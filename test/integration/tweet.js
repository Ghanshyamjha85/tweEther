const TweetStorage = artifacts.require('TweetStorage');
const utils = require("../utils");
const { assertVMException } = utils;

const TweetController = artifacts.require('TweetController')

contract("tweets", ()=> {

    it("can create tweet with controller", async () => {
        const controller = await TweetController.deployed()
    
        const tx = await controller.createTweet(1, "Hello World")
    
        assert.isOk(tx)
      })
    

    it("can't create tweet without controller", async () => {
        const storage = await TweetStorage.deployed()
    
        try {
          const tx = await storage.createTweet(1, "Hello World")
          assert.fail();
        } catch (err) {
          assertVMException(err);
        }
      })
    
    
    it("can get tweets", async()=> {

        const storage = await TweetStorage.deployed();


        const tweet = await storage.tweets.call(1);

        const { id, userId, text } = tweet;

        assert.equal(id, '1');
        assert.equal(userId, '1');
        assert.equal(text, "Hello World");
    })
})