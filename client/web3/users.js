import { eth, getInstance,  } from './provider'

import UserStorage from "./artifacts/UserStorage.json"
import UserController from "./artifacts/UserController.json"
import Web3 from 'web3'


export const getUserInfo = async (userId) => {
  const storage = await getInstance(UserStorage)
  const {id, username, firstName, lastName, bio} = await storage.profiles.call(userId)

   return {
    userId : parseInt(id),
    userName : Web3.utils.toAscii(username),
    firstName: Web3.utils.toAscii(firstName),
    lastName : Web3.utils.toAscii(lastName),
    bio
  } 
}

export const createUser = async (...params) => {

  try {
    await ethereum.enable()
    const controller = await getInstance(UserController)
    const addresses = await eth.getAccounts()

    const result = await controller.createUser(
      ...params,
    {
      from: addresses[0],
    })

    return result
  } catch (err) {
    console.error("Err:", err)
  }
}

export const getLoggedInUserId = async () => {
  try {
    await ethereum.enable()
    const addresses = await eth.getAccounts()

    if (!addresses) return

    const storage = await getInstance(UserStorage)
    const userId = await storage.addresses.call(addresses[0])

    return parseInt(userId)
  } catch (err) {
    console.error("Err:", err)
  }
}

export const getUserIdFromUsername = async (username) => {
  const storage = await getInstance(UserStorage)
  const userId = await storage.usernames.call(username)

  return userId
}

