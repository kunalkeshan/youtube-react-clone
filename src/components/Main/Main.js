import React from 'react';
import './Main.css'
import VideoCard from '../VideoCard/VideoCard';

function Main() {
    return (
        <div className="main">
            <h2 className="main__title">Recommended</h2>
            <div className="main__videos">
                <VideoCard 
                image="https://miro.medium.com/max/2400/1*pE2fOVDikEUwiQJlh4ggzg.jpeg"
                title="Guide to Web Dev"
                channel="Urban Coder"
                channelImage="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
                views="1M Views"
                timeStamp="1 day ago"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/IgKWPdJWuBQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDyPrSqQRxcHMdhjgLW5gs3Yx6gDA"
                title="The mind behind Tesla, SpaceX and more | Elon Must"
                channel="TED"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwngdSYULh1HN6S152HlDS7X2xMQYAwUcuj-agc_ojw=s48-c-k-c0x00ffffff-no-rj"
                views="3M Views"
                timeStamp="Mar 19, 2013"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/A6vfZpEyYao/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLARkpEtJIR-IV9x6SyKMllwGWklWw"
                title="How to Improve Your Relationships"
                channel="Tim Ferriss"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnjcwIQXSKeR_t0R_bQbaSLtBMb0ksNKKvKvinGCXA=s48-c-k-c0x00ffffff-no-rj"
                views="25K Views"
                timeStamp="5 days ago"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/WsQQvHm4lSw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAa3ywQYauKEPc-Jmhrwvgh8u4ojg"
                title="Understand Calculus in 35 mins"
                channel="The Organic Chem Tutor"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnjVhr_W6MM0q81HPKTU8J4TmHMV1NlfFNuB0H_jDQ=s48-c-k-c0x00ffffff-no-rj"
                views="3.05M Views"
                timeStamp="Sep 10,2018"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ"
                title="Let's build a YouTube Clone"
                channel="Clever Programmer"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s48-c-k-c0x00ffffff-no-rj"
                views="1.5M Views"
                timeStamp="Jul 29,2020"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/g2nMKzhkvxw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCB8kBEQCUkpBINecyYAmAOd5saug"
                title="Junior Vs Senior Code"
                channel="Web Dev Simplified"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s48-c-k-c0x00ffffff-no-rj"
                views="6.8M Views"
                timeStamp="Apr 28,2020"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/rhzKDrUiJVk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAD3wySEL6h_npw74KeOrxhNNiwrQ"
                title="Learn RegExp in 20 mins"
                channel="Web Dev Simplified"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s48-c-k-c0x00ffffff-no-rj"
                views="3M Views"
                timeStamp="Oct 29,2019"
                />
                <VideoCard 
                image="https://miro.medium.com/max/2400/1*pE2fOVDikEUwiQJlh4ggzg.jpeg"
                title="Guide to Web Dev"
                channel="Urban Coder"
                channelImage="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
                views="1M Views"
                timeStamp="1 day ago"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/IgKWPdJWuBQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDyPrSqQRxcHMdhjgLW5gs3Yx6gDA"
                title="The mind behind Tesla, SpaceX and more | Elon Must"
                channel="TED"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwngdSYULh1HN6S152HlDS7X2xMQYAwUcuj-agc_ojw=s48-c-k-c0x00ffffff-no-rj"
                views="3M Views"
                timeStamp="Mar 19, 2013"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/A6vfZpEyYao/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLARkpEtJIR-IV9x6SyKMllwGWklWw"
                title="How to Improve Your Relationships"
                channel="Tim Ferriss"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnjcwIQXSKeR_t0R_bQbaSLtBMb0ksNKKvKvinGCXA=s48-c-k-c0x00ffffff-no-rj"
                views="25K Views"
                timeStamp="5 days ago"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/WsQQvHm4lSw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAa3ywQYauKEPc-Jmhrwvgh8u4ojg"
                title="Understand Calculus in 35 mins"
                channel="The Organic Chem Tutor"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnjVhr_W6MM0q81HPKTU8J4TmHMV1NlfFNuB0H_jDQ=s48-c-k-c0x00ffffff-no-rj"
                views="3.05M Views"
                timeStamp="Sep 10,2018"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ"
                title="Let's build a YouTube Clone"
                channel="Clever Programmer"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s48-c-k-c0x00ffffff-no-rj"
                views="1.5M Views"
                timeStamp="Jul 29,2020"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/g2nMKzhkvxw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCB8kBEQCUkpBINecyYAmAOd5saug"
                title="Junior Vs Senior Code"
                channel="Web Dev Simplified"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s48-c-k-c0x00ffffff-no-rj"
                views="6.8M Views"
                timeStamp="Apr 28,2020"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/rhzKDrUiJVk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAD3wySEL6h_npw74KeOrxhNNiwrQ"
                title="Learn RegExp in 20 mins"
                channel="Web Dev Simplified"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s48-c-k-c0x00ffffff-no-rj"
                views="3M Views"
                timeStamp="Oct 29,2019"
                />
                <VideoCard 
                image="https://miro.medium.com/max/2400/1*pE2fOVDikEUwiQJlh4ggzg.jpeg"
                title="Guide to Web Dev"
                channel="Urban Coder"
                channelImage="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
                views="1M Views"
                timeStamp="1 day ago"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/IgKWPdJWuBQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDyPrSqQRxcHMdhjgLW5gs3Yx6gDA"
                title="The mind behind Tesla, SpaceX and more | Elon Must"
                channel="TED"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwngdSYULh1HN6S152HlDS7X2xMQYAwUcuj-agc_ojw=s48-c-k-c0x00ffffff-no-rj"
                views="3M Views"
                timeStamp="Mar 19, 2013"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/A6vfZpEyYao/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLARkpEtJIR-IV9x6SyKMllwGWklWw"
                title="How to Improve Your Relationships"
                channel="Tim Ferriss"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnjcwIQXSKeR_t0R_bQbaSLtBMb0ksNKKvKvinGCXA=s48-c-k-c0x00ffffff-no-rj"
                views="25K Views"
                timeStamp="5 days ago"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/WsQQvHm4lSw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAa3ywQYauKEPc-Jmhrwvgh8u4ojg"
                title="Understand Calculus in 35 mins"
                channel="The Organic Chem Tutor"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnjVhr_W6MM0q81HPKTU8J4TmHMV1NlfFNuB0H_jDQ=s48-c-k-c0x00ffffff-no-rj"
                views="3.05M Views"
                timeStamp="Sep 10,2018"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ"
                title="Let's build a YouTube Clone"
                channel="Clever Programmer"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s48-c-k-c0x00ffffff-no-rj"
                views="1.5M Views"
                timeStamp="Jul 29,2020"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/g2nMKzhkvxw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCB8kBEQCUkpBINecyYAmAOd5saug"
                title="Junior Vs Senior Code"
                channel="Web Dev Simplified"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s48-c-k-c0x00ffffff-no-rj"
                views="6.8M Views"
                timeStamp="Apr 28,2020"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/rhzKDrUiJVk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAD3wySEL6h_npw74KeOrxhNNiwrQ"
                title="Learn RegExp in 20 mins"
                channel="Web Dev Simplified"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s48-c-k-c0x00ffffff-no-rj"
                views="3M Views"
                timeStamp="Oct 29,2019"
                />
            </div>
        </div>
    )
}

export default Main;
