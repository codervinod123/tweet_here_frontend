import React, { useEffect, useState } from "react";
import CategoryNavigation from "../CategoryNavigation";
import { useLocation } from "react-router-dom";
import Tweet from "../Tweet";

const TrendingPosts = () => {
  const [tweet, setTweet] = useState([]);
  const location = useLocation();
  const trendingData = location.state;

  useEffect(() => {
    setTweet(trendingData.trends);
  }, []);

  return (
    <div className="lg:col-span-3 col-span-3 overflow-y-auto relative">
      <CategoryNavigation />
      <Tweet tweet={tweet} />
    </div>
  );
};

export default TrendingPosts;
