import React, { useState } from 'react';
import "./Tweetbox.css"
import { Avatar, Button} from '@mui/material';
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
  
    const sendTweet = (e) => {
      e.preventDefault();
      
          db.collection("posts").add({
            displayName: "Bill Gates",
            username: "allaboutdatbag",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
        });
       
       
        setTweetMessage("");
        setTweetImage("");
      };
    
    
    return (
        <div className="tweetBox">
          <form>
            <div className="tweetBox__input">
            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg" 
            />
            <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text" />
            </div>
            <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button  
               onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton">
            Tweet
            </Button>
          </form>
        </div>
      );
}

export default TweetBox;
