import { Typography } from '@material-ui/core';
import React from 'react';
import CustomTimeline, {CustomTimelineSeparator} from '../Timeline/CustomTimeline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

import resumeData from '../../utils/resumeData';

import displayimage from '../../assets/images/displayimage.jpg';
import './Profile.css';

const CustomTimelineItem = ({title, text, link}) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className='timeline_content'>
            {link? (<Typography className='timelineItem_text'>
                <span>{title}:</span> <a href={link} target='_blank'>{text}</a>
            </Typography>) : (
                <Typography className='timelineItem_text'><span>{title}:</span> {text}</Typography>
            )}
        </TimelineContent>
    </TimelineItem>
);

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>{resumeData.name}</Typography>
                <Typography className='title'>{resumeData.title}</Typography>
            </div>

            <figure className='profile_image'>
                <img src={displayimage} alt='displayimage'></img>
            </figure>

            <div className='profile_information'>
                <CustomTimeline icon={<PersonOutlineIcon/>}>
                    <CustomTimelineItem title='Name' text={resumeData.name}/>
                    <CustomTimelineItem title='Title' text={resumeData.title}/>
                    <CustomTimelineItem title='Email' text={resumeData.email}/>

                    {Object.keys(resumeData.socials).map((key) => (
                        <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
                    ))}
                </CustomTimeline><br/>
                <button>my button</button>
            </div>
        </div>
    )
}

export default Profile
