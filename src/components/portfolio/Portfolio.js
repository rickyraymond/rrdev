import React, { useState } from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio() {
    const [selectedType, setSelectedType] = useState('all');

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    }

    const types = ['all', ...new Set(info.portfolio.map((item) => item.type))];

    return (
        <Box>
            <Box component={'section'} p={'1rem'} textAlign={'center'} margin={'40px 0 0 0'}>
                <Box margin={'0 auto'} maxWidth={'960px'} padding={'1rem 2rem'} component={'p'} fontSize={'1.5rem'}>Here are some of my personal projects, example work, and previous employment. I'm always working on something new, so check back often!</Box>

                <FormControl variant="filled" sx={{ m: 1, minWidth: 120, border: 'none' }} size="small">
                    <InputLabel id="filter-by-type-label" color='secondary'>Type</InputLabel>
                    <Box component={'div'} bgcolor={'rgba(255,255,255,.4)'}>
                        <Select
                            labelId="filter-by-type-label"
                            id="filter-by-type"
                            value={selectedType}
                            onChange={handleTypeChange}
                            padding={'0.25rem'}
                            fullWidth={true}
                        >
                            {types.map((type, index) => (
                                <MenuItem key={index} value={type} padding={0}>
                                    <Box component={'span'} padding={0}>{type}</Box>
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                </FormControl>
            </Box>

            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio
                    .filter(project => selectedType === 'all' ? true : project.type === selectedType)
                    .map((project, index) => (
                        <Grid item xs={12} md={6} key={index} sx={{maxWidth:500}}>
                            <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} description={project.description} type={project.type} />
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
};