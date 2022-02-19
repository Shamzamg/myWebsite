import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { Grid, Typography, Icon, Paper, LinearProgress} from '@material-ui/core';
import { TimelineDot } from '@material-ui/lab';
import { withStyles } from "@material-ui/core/styles";
import './Resume.css'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/CustomTimeline';

import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import GestureIcon from '@material-ui/icons/Gesture';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import PublicIcon from '@material-ui/icons/Public';
import WatchIcon from '@material-ui/icons/Watch';
import LinkIcon from '@material-ui/icons/Link';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

import resumeData from '../../utils/resumeData';

const CustomTimelineItem = ({title, text, date}) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className='timeline_content'>
            <Typography className='timelineItem_title'><span>{title}</span></Typography>
            <Typography className='timelineItem_date'><span>{date}</span></Typography>
            <Typography className='timelineItem_text'>{text}</Typography>
        </TimelineContent>
    </TimelineItem>
);

const StyledLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: "#A3D6F9"
    },
    barColorPrimary: {
      backgroundColor: "#338cc8"
    }
  })(LinearProgress);

const Resume = () => {
    return (
        <div>
            {/* About me*/}
            <Grid container className='section'>
                <Grid item className='section_title' xs={12}>
                    <span class='spantitle'>aaaaaaaaaa</span>
                    <Typography variant='h6' className='section_title_text'>About Me</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutme_text'>{resumeData.aboutme}</Typography>
                </Grid>
            </Grid>

            {/* Education and experiences */}
            <Grid container className='section'>
                <Grid item className='section_title' xs={12}>
                    <span class='spantitle'>aaaaaaaaa</span>
                    <Typography variant='h6' className='section_title_text'>Resume</Typography>
                </Grid>
                <Grid item xs={12} className='section_timelines'>
                    <Grid container>
                        {/* Experiences */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title='Work History' icon={<WorkTwoToneIcon />}>
                                {Object.keys(resumeData.works).map((key) => (
                                    <CustomTimelineItem title={resumeData.works[key].title} text={resumeData.works[key].description} date={resumeData.works[key].date}/>
                                ))}
                            </CustomTimeline>
                        </Grid>
                        {/* Education */}
                        <Grid item sm={12} md={6}> 
                            <CustomTimeline title='Education' icon={<SchoolRoundedIcon />}>
                                {Object.keys(resumeData.education).map((key) => (
                                    <CustomTimelineItem title={resumeData.education[key].title} text={resumeData.education[key].description} date={resumeData.education[key].date}/>
                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Skills */}
            <Grid container className='section'>
                 <Grid item className='section_title' xs={12}>
                    <span class='spantitle'>aaaaaaaaaaaaa</span>
                    <Typography variant='h6' className='section_title_text'>My Services</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3} justify='space-around'>
                        {resumeData.services.map(service => (
                            <Grid item xs={12} sm={6} md={3}>
                                <div className='service'>
                                    <Icon className='service_icon'>{service.icon}</Icon>
                                    <Typography className='service_title' variant='h6'>{service.title}</Typography>
                                    <Typography className='service_description' variant='body2'>{service.description}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            {/* Skills */}
            <Grid container spacing={3} justify='space-between' className='section'>
                {resumeData.skills.map(skill => (
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={2} className='skill'>
                            <Typography variant='h6' className='skill_title'>
                                {skill.title}
                            </Typography>
                            {skill.description.map(element => (
                                <Typography variant='body2' className='skill_description'>
                                    <TimelineDot variant='outlined' className='timeline_dot'/>
                                    {element}
                                </Typography>
                            ))}
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Contact */}
            <Grid container className='section'>
                <Grid item className='section_title' xs={12}>
                    <span class='spantitle'>aaaaaaaaaaa.</span>
                    <Typography variant='h6' className='section_title_text'>Languages</Typography>
                </Grid>
                <Grid container justify='space-between' className='pad_15'>
                    <Grid item xs={5}>
                    <ReactCountryFlag className='language_flag' countryCode="GB" title="United States" svg />
                        <span class='language_text'>English (TOEIC ~900)</span>
                        <StyledLinearProgress className='top_15' variant="determinate" value={90} />
                    </Grid>
                    <Grid item xs={5}>
                        <ReactCountryFlag className='language_flag' countryCode="FR" svg />
                        <span class='language_text'>French (Native)</span>
                        <StyledLinearProgress className='top_15' variant="determinate" value={100} />
                    </Grid>
                    <Grid item xs={5}>
                        <ReactCountryFlag className='language_flag' countryCode="JP" svg />
                        <span class='language_text'>Japanese (JLPT N4)</span>
                        <StyledLinearProgress className='top_15' variant="determinate" value={25} />
                    </Grid>
                </Grid>
            </Grid>

            {/* Hobbies */}
            <Grid container className='section'>
                <Grid item className='section_title' xs={12}>
                    <span class='spantitle'>aaaaaaaa.</span>
                    <Typography variant='h6' className='section_title_text'>Hobbies</Typography>
                </Grid>
                <Grid container  className='pad_15'>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='body2' className='section_title_text hobbies_text drawing'><GestureIcon className='drawing_icon'/>  <span style={{color: 'blue'}}>D</span>
                                                                                                                                        <span style={{color: 'red'}}>r</span>
                                                                                                                                        <span style={{color: 'orange'}}>A</span>
                                                                                                                                        <span style={{color: 'blue'}}>w</span>
                                                                                                                                        <span style={{color: 'green'}}>i</span>
                                                                                                                                        <span style={{color: 'red'}}>n</span>
                                                                                                                                        <span style={{color: 'pink'}}>G</span>
                        </Typography>
                    </Grid>
                    <Grid item className='mg_auto' xs={12} sm={6} md={3}>
                        <Typography variant='body2' className='section_title_text hobbies_text'><DriveEtaIcon className='hobbies_icon'/> Sports cars</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='body2' className='section_title_text hobbies_text'><LinkIcon className='hobbies_icon'/> Blockchain</Typography>
                    </Grid>
                    <Grid item className='mg_auto' xs={12} sm={6} md={3}>
                        <Typography variant='body2' className='section_title_text hobbies_text'><PublicIcon className='hobbies_icon'/> Japanese culture</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Resume

