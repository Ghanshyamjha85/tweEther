import React from "react";
import Post from "./Post";
import TweetBox from "./TweetBox";

function Feed({tweets, userInfo}) {
  const {firstName, lastName} = userInfo
  return (
    <div className="feed">

      {/* Header */}

      <div className="feed_header">
        <h2>Home</h2>
      </div>

      {/* Tweet Box */}

      <TweetBox firstName={firstName} lastName = {lastName}/>


      {/* Posts */}
      {!tweets.length && <p>No tweets yet.</p>}
      {tweets.map(tweet => <Post key={tweet.id} tweet={tweet} />)}

    </div>
  );
}

export default Feed;
