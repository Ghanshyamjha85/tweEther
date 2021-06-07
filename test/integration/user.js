const UserStorage = artifacts.require("UserStorage");
const utils = require("../utils");
const { assertVMException } = utils;

const UserController = artifacts.require('UserController')

  
contract('user', () => {

          it("can create user with controller", async () => {
    const controller = await UserController.deployed()

    const tx = await controller.createUser(
      web3.utils.fromAscii("Ghanshyam"),
      web3.utils.fromAscii("Jha"),
      web3.utils.fromAscii("sam"),
      "I like building stuff",
    )
    assert.isOk(tx)
  })

  it("can't create user without controller", async () => {
    const storage = await UserStorage.deployed()

    try {
      const tx = await storage.createUser(
        0x0,
        "Ghanshyam",
        "Jha",
        "Sam",
        "I like building stuff",
      )
      assert.fail();
    } catch (err) {
      assertVMException(err);
    }
  })

    
    it("can get user", async () => {

        const storage = await UserStorage.deployed();
        const userId = 1;

        const userInfo = await storage.profiles.call(userId);

        const username = web3.utils.toAscii(userInfo[1]).replace(/\u0000/g, '')


        assert.equal(username, "Ghanshyam");
    })
})