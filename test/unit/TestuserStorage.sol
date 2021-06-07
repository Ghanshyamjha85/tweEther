pragma solidity ^0.5.16;

import "truffle/Assert.sol";
import "../../contracts/users/UserStorage.sol";

contract TestUserStorage {
  UserStorage userStorage;

  constructor() public {
    userStorage = new UserStorage();
    userStorage.setControllerAddr(address(this));
  }

  function testCreateFirstUser() public {
    uint _expectedId = 1;

    Assert.equal(userStorage.createUser(
      address(0),
      "Ghanshyam",
      "Jha",
      "Madhubani",
      "I like building stuff"
    ), _expectedId, "Should create user with ID 1");
  }

}