import React from 'react';
import './VideoRow.css'


function VideoRow({views, channel, subs, description, timeStamp, title, image}) {
    return (
        <div className="videoRow">
            <img src={image} alt={channel} className="videoRow__image" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">{channel} • <span class="videoRow__subs"><span className="videoRow__subsNumber">{subs}</span> Subcribers</span> • {views} views • {timeStamp}</p>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow;
