import React, { useEffect, useState } from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
   const { image, live, source, title, description, type } = props;
   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 767);

   const handleResize = () => {
      setIsDesktop(window.innerWidth > 767);
   };
   useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
         bgcolor={'rgba(255,255,255,.2)'} margin={'2rem'} borderRadius={'40px'} padding={'3rem 2rem'}>
         {image && (
            <Box component={'img'} src={image} alt={'mockup'} marginBottom={'2rem'} maxHeight={'200px'} width={'100%'} sx={{ objectFit: 'cover' }} />
         )}
         <h2 style={{ fontSize: '2rem' }}>{title}</h2>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box padding={'1rem 2rem'} component={'p'}>{description}</Box>
            {type === 'project' && live && (
               <Box p={1} border={'2px solid'} borderRadius={'25px'}>
                  <IconLink link={live} title={'Live Demo'} icon={isDesktop ? 'fa fa-desktop' : 'fa fa-mobile'} />
               </Box>
            )}
         </Box>
      </Box>
   );
}

export default PortfolioBlock;