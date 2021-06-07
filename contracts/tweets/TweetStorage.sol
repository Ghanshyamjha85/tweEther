pragma solidity ^0.5.16;

import "../helpers/BaseStorage.sol";

contract TweetStorage is BaseStorage {

    struct Tweet {
        uint32 id;
        uint32 userId;
        string text;
        uint postedAt;
    }

    mapping(uint => Tweet) public tweets;
    mapping (uint => uint[]) userTweetIds;
    uint[] public tweetIds; 
    uint32 latestTweetId = 0;

    function createTweet(uint32 _userId, string memory _text) public onlyController returns(uint32){
        latestTweetId++;
        tweets[latestTweetId] = Tweet(latestTweetId, _userId, _text, now );
        userTweetIds[_userId].push(latestTweetId);
        
        tweetIds.push(latestTweetId);
        
        return latestTweetId;
    }

    function getTweetIdsFromUser(uint _userId) view public returns(uint[] memory) {
      return userTweetIds[_userId];
    }

    function getNumTweets() view public returns(uint _numTweets) {
      return tweetIds.length;
    }


}