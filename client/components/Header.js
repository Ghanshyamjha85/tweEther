import React from 'react'
import Link from "next/link"
import Modal from "./Modal"
import Nav from "./Nav"
import TweetComposer from "./TweetComposer"
import TweetBox from "./utils/TweetBox"


import { Center } from "./Layout"
//import Logotype from "../icons/logotype.svg"


import { getLoggedInUserId, getUserInfo } from "../web3/users"


export default class Header extends React.Component {

  state = {
    loggedIn: false,
    userInfo: {},
    showComposeModal: false,
  }


  async componentDidMount() {
    const userId = await getLoggedInUserId() 
    if(userId) {
      const userInfo = await getUserInfo(userId) 
      this.setState({
        loggedIn: true,
        userInfo,
      })
    } else {
      console.error("Couldn't find logged in user")
    }

  }

  toggleComposeModal = () => {
    const { showComposeModal } = this.state

    this.setState({
      showComposeModal: !showComposeModal,
    })
  }


  render() {
    const { loggedIn, userInfo, showComposeModal } = this.state
    const {firstName, lastName} = userInfo

    if(this.state.loggedIn) {
      return (
        <header>
          <Center>
            <Link href="/">
              <a className="logotype">
              </a>
            </Link>
            <nav>
              {loggedIn && (
                <Nav
                  userInfo={userInfo}
                  toggleComposeModal={this.toggleComposeModal}
                />
              )}
            </nav>
          </Center>
          {showComposeModal && (
            <Modal
              onClose={this.toggleComposeModal}
            >
              <TweetBox firstName={firstName} lastName={lastName} onClose={this.toggleComposeModal} />
  
            </Modal>
          )}
          <style jsx>{`
            header {
              background-color: #FFFFFF;
              box-shadow: 0 1px 3px 0 rgba(0,0,0,0.14);
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 100;
            }
          `}</style>
        </header>
      )  

    }
    else {
      return ""
    }
  }
}