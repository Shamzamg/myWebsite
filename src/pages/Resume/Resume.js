import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import './Resume.css'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/CustomTimeline';

import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

import resumeData from '../../utils/resumeData';

const CustomTimelineItem = ({title, text, date}) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className='timeline_content'>
            <Typography className='timelineItem_title'><span>{title}:</span></Typography>
            <Typography className='timelineItem_date'><span>{date}</span></Typography>
            <Typography className='timelineItem_text'>{text}</Typography>
        </TimelineContent>
    </TimelineItem>
);

const Resume = () => {
    return (
        <div>
            {/* About me*/}
            <Grid container className='section'>
                <Grid item className='section_title' xs={12}>
                    <span>aaaaaaaaaa</span>
                    <Typography variant='h6' className='section_title_text'>About Me</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutme_text'>{resumeData.aboutme}</Typography>
                </Grid>
            </Grid>

            {/* Education and experiences */}
            <Grid container className='section'>
                <Grid item className='section_title' xs={12}>
                    <span>aaaaaaaaa</span>
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

            </Grid>

            {/* Contact */}
            <Grid container className='section'>

            </Grid>
        </div>
    )
}

export default Resume

