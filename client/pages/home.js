import React from "react"
import SideBar from "../components/utils/Sidebar"
import Feed from "../components/utils/Feed"

import { Page, Center } from "../components/Layout"
import { getLatestTweetIds, getTweetInfo, loadTweetsFromTweetPromises } from '../web3/tweets'
import { getLoggedInUserId, getUserInfo } from "../web3/users"



export default class HomePage extends React.Component {
  state = { 
    tweets: [],
    userInfo: {}
  }


  componentDidMount() {
    this.loadLatestTweets()
    this.loadUserInfo()
  }

  loadUserInfo = async () => {
    const userId = await getLoggedInUserId() 
      const userInfo = await getUserInfo(userId) 
      this.setState({
        userInfo,
      })
    }

  loadLatestTweets = async () => {
    const tweetIds = await getLatestTweetIds()

    const tweetPromises = tweetIds.map(tweetId => {
      return getTweetInfo(tweetId)
    })

    const tweets = await loadTweetsFromTweetPromises(tweetPromises)

    this.setState({
      tweets,
    })
  }

  render() {
    const { tweets, userInfo } = this.state

    return (
      <Page>
        <div className="main">
          <SideBar userInfo = {userInfo}/>
          <Feed tweets = {tweets} userInfo={userInfo}/>
       </div>
        <style jsx>{`
          h2 {
            font-size: 16px;
            color: rgba(84,83,98,0.64);
            letter-spacing: 0.5px;
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 16px;
            margin-top: 4px;
          }
          .main {
            display:flex;
            height: 100vh;
            margin-left: auto;
            margin-right: auto;
            padding: 0 100;
            }
            .tweetList {
              flex:0.6
            }   
            Page {
              background-color: white;
            }       
          
        `}</style>
      </Page>
    )
  }
}