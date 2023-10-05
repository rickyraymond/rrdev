import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Home() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
         justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box display={'flex'} flexDirection={'column'}>
            <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{ background: info.gradient }} component={'img'} src={me}
               width={'auto'}
               height={{ xs: '25vh', md: '40vh' }}
               maxHeight={{ xs: '35vh', md: '400px' }}
               maxWidth={{ xs: '35vh', md: '400px' }}
               borderRadius={'1.5rem'} p={{xs: '0 2rem' ,md:'0 3.75rem'}} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }}/>
            <Box component={'ul'} display={'flex'} flexDirection={'row'} gap={'2rem'} justifyContent={'center'} alignItems={'center'} p={'0.8rem'} m={'.8rem'}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label}/>
               ))}
            </Box>
         </Box>
         <Box>
            <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} link={bio.link} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}