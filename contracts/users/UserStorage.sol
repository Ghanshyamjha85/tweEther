pragma solidity ^0.5.16;

import "../helpers/BaseStorage.sol";


contract UserStorage is BaseStorage{

    struct Profile {
        uint id;
        bytes32 username;
        bytes32 firstName;
        bytes32 lastName;
        string bio;
    }

    mapping (uint => Profile) public profiles;
    mapping (address => uint) public addresses;
    mapping (bytes32 => uint) public usernames; 

    uint latestUserId = 0;
    address ownerAddr;

    function createUser(
      address _address,
      bytes32 _username,
      bytes32 _firstName,
      bytes32 _lastName,
      string memory _bio
      ) 
      public onlyController returns(uint) {
    
      latestUserId++;  

      profiles[latestUserId] = Profile(
        latestUserId, 
        _username,
        _firstName,
        _lastName,
        _bio
        );

        addresses[_address] = latestUserId;
        usernames[_username] = latestUserId;

        return latestUserId;
    }
}