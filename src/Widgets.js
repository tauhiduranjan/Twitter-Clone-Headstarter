import React from 'react';
import "./Widgets.css";
import { TwitterTimelineEmbed,TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="widgets">
        <div className="widgets__input">
        <SearchIcon className="widgets_searchIcon"/>  
        <input placeholder="Search Twitter" type="text"/> 
        </div>
        <div className="widgets__widgetContainer">
            <h2>What's Happening?</h2>
                <TwitterTweetEmbed tweetId={"1671934123693293587"}/>


                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="MKBHD"
                options={{ height: 400 }}

                />

        </div>
    </div>
  );
}

export default Widgets;