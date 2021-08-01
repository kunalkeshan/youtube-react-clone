import React from 'react';
import './SearchPage.css'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow 
            image="https://yt3.ggpht.com/ytc/AAUvwnhyQxJ5qyZrz_BA3G3UnYz7H5GCX5PrkGtcyCM6RQ=s68-c-k-c0x00ffffff-no-rj"
            channel="CA Rachana Ranade"
            verified
            subs="2.34M"
            noOfVideos="100+"
            description="We have the objective of building financial discipline in the masses by simplifying Stock Market Education and Financial concepts. Our leader CA Rachana Ranade is the spearhead in this mission.... "
            />
            <hr />
            <VideoRow 
            image="https://i.ytimg.com/an_webp/Xn7KWR9EOGQ/mqdefault_6s.webp?du=3000&sqp=CIyX2oQG&rs=AOn4CLDfxlqxlU8vPvszmA0qrRAUFmK0gg"
            views="13M"
            description="Watch the best video on the Basics of Stock Market, learn how to invest in the share market, learn how to buy and sell shares."
            channel="CA Rachana Ranade"
            title="Basics of Stock Market For Beginners Lecture 1 By CA Rachana Ranade"
            timeStamp="2 years ago"
            subs="2.34M"
            />
            <VideoRow 
            image="https://i.ytimg.com/an_webp/bLl_VRQ7pBs/mqdefault_6s.webp?du=3000&sqp=CKqX2oQG&rs=AOn4CLCnOkD9RFgIfxkfb90VBerpIhrxyg"
            views="5.2M"
            description="Watch the best video on the Basics of Stock Market, learn how to invest in the share market, learn how to buy and sell shares."
            channel="CA Rachana Ranade"
            title="Basics of Stock Market For Beginners Lecture 2 By CA Rachana Ranade"
            timeStamp="1 year ago"
            subs="2.34M"
            />
            <VideoRow 
            image="https://i.ytimg.com/an_webp/hBKqk5oYexw/mqdefault_6s.webp?du=3000&sqp=CKSP2oQG&rs=AOn4CLDPNyv83SCVojW17lJSTBsTCDLyhA"
            views="1.4M"
            description="Watch the best video on the Basics of Stock Market, learn how to invest in the share market, learn how to buy and sell shares."
            channel="CA Rachana Ranade"
            title="Basics of Stock Market For Beginners Lecture 3 By CA Rachana Ranade"
            timeStamp="9 months ago"
            subs="2.34M"
            />
        </div>
    
    )
}

export default SearchPage;
