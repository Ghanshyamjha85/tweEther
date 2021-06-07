pragma solidity >=0.5.0 <0.6.0;

contract Owned {
  
  address private _owner;

  event OwnershipTransferred(
    address indexed previousOwner,
    address indexed newOwner
  );

  constructor() internal {
    
    _owner = msg.sender;

    emit OwnershipTransferred(address(0), _owner);
  }


//##################
//Verifying Ownwer #
//#################


  modifier onlyOwner() {
    require(isOwner());
    _;
  }

  function isOwner() public view returns(bool) {
    return msg.sender == _owner;
  }


//###################################
//Change Ownership of SmartContract #
//###################################


  function transferOwnership(address newOwner) public onlyOwner {
    _transferOwnership(newOwner);
  }

  function _transferOwnership(address newOwner) internal {
    require(newOwner != address(0));
    emit OwnershipTransferred(_owner, newOwner);
    _owner = newOwner;
  }
}
