import React, { useState, useEffect } from "react";
import axios from "axios";
import Tweet from "../Tweet";
import Post from "../Post";
import CategoryNavigation from "../CategoryNavigation";

const TweetContent = () => {
  const [tweet, setTweet] = useState([]);

  useEffect(() => {
    getTweets();
  }, []);

  const getTweets = async () => {
    const res = await axios.get("http://localhost:3001/api/v1/tweet");
    setTweet(res.data.data);
  };

  return (
    <div className="lg:col-span-3 col-span-3 overflow-y-auto relative">
      <CategoryNavigation />
      <Post />
      <Tweet tweet={tweet} />
    </div>
  );
};

export default TweetContent;
