pragma solidity ^0.5.16;

import "truffle/Assert.sol";
import "../../contracts/tweets/TweetStorage.sol";

contract TestTweetStorage {
  TweetStorage tweetStorage;

  constructor() public {
    tweetStorage = new TweetStorage();
    tweetStorage.setControllerAddr(address(this));
  }

  function testCreateTweet() public {
    uint32 _userId = 1;
    uint _expectedTweetId = 1;

    Assert.equal(
      tweetStorage.createTweet(_userId, "Hello World!"), 
      _expectedTweetId, 
      "Should create tweet with ID 1"
    );
  }
}