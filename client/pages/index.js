import React from 'react'
import { Page, Center } from "../components/Layout"
import Button from "../components/Button"
import Modal from "../components/Modal"
import RegistrationForm from "../components/RegistrationForm" 
import { getLoggedInUserId } from "../web3/users"
import Router from 'next/router'




export default class IndexPage extends React.Component {

  state = {
    showRegisterModal: false,
  }


  toggleRegisterModal = async () => {
    const { showRegisterModal } = this.state

    this.setState({
      showRegisterModal: !showRegisterModal,
    })
  }


  async componentDidMount() {
    const userId = await getLoggedInUserId() 

    if (userId) {
      Router.replace('/home')
    }
  }


  render() {
    return (
      <Page>
        <Center>
          <h2>
            <mark> A decentralized, uncensorable Twitter clone built on Ethereum</mark>
          </h2>

          <div className="right-side">
            <Button onClick={this.toggleRegisterModal}>
              Create your account
            </Button>


            <div className="disclaimer">
              <p>
                <mark>MetaMask will automatically open and ask you to confirm a transaction.</mark>
              </p>
            </div>
          </div>
        </Center>
        {this.state.showRegisterModal && (
          <Modal
            onClose={this.toggleRegisterModal}
          >
            <RegistrationForm />
          </Modal>
        )}
        <style jsx global>{`
          html, body {
            min-height: 100%;
          }
          body {
            background-image:url("../static/images/landing_background.jpg");
            background-size: cover;
            background-position: center center;
            
          }
        `}</style>

        <style jsx>{`
          h2 {
            font-size: 50px;
            color: #00acee;
            line-height: 78px;
            position: relative;
            text-transform: uppercase;
            max-width: 520px;
            display: inline-block;
            font-weight: 900;
          }
          mark {
            color: inherit;
            background-color: #fbedbc;
            padding: 0 7px;
          }
          .right-side {
            float: right;
            position: relative;
            max-width: 320px;
            text-align: center;
            margin-top: 120px;
          }
          .right-side :global(svg) {
            position: absolute;
            margin-left: -46px;
            margin-top: -8px;
          }
          .disclaimer {
            font-size: 19px;
            color: red;
            line-height: 25px;
            font-weight: 400;
            margin-top: 23px;
          }
        `}</style>
      </Page>
    )
  }
}