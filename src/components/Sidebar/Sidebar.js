import React from 'react';
import './Sidebar.css'
import SidebarRow from '../SidebarRow/SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected title="Home" Icon={HomeIcon} />
            <SidebarRow title="Trending" Icon={WhatshotIcon} />
            <SidebarRow title="Subscriptions" Icon={SubscriptionsIcon} />
            <hr />
            <SidebarRow title="Library" Icon={VideoLibraryIcon} />
            <SidebarRow title="History" Icon={HistoryIcon} />
            <SidebarRow title="Your Videos" Icon={OndemandVideoIcon} />
            <SidebarRow title="Watch Later" Icon={WatchLaterIcon} />
            <SidebarRow title="Liked Videos" Icon={ThumbUpAltIcon} />
            <SidebarRow title="Show More" Icon={ExpandMoreOutlinedIcon} />
            <hr />
        </div>
    )
}

export default Sidebar;

