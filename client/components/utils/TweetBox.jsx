import React from "react";
import { Button } from "@material-ui/core";
import { createTweet } from "../../web3/tweets"



import Avatar from "../Avtar";

class TweetBox extends React.Component {

  state = {
    text: "",
    textCount: 0,
  }

  
  handleChange = e => {
    var text = e.target.value
    var textCount = text.length
    this.setState({
      text,
      textCount
    });
  }

  post = async () => {
    const { text } = this.state

    await createTweet(text)

    alert("Your tweet was posted!")
    window.location.reload();
  }


  render() {

    const { text, textCount } = this.state
    const {firstName, lastName} = this.props
    var remainingText = 140 - textCount

    const disabled = (text === "")


    return (
      <div className="tweetBox">
        <form action="">
          <div className="tweetBox_input">
          <div className="tweetBox_avatar">
            <Avatar firstname = {firstName} lastname ={lastName} size={50}/>
          </div>
            <textarea
              value={text}
              onChange={this.handleChange}
              maxLength={140}
              placeholder="What's Happening?"
              type="text" />
          </div>
          <div>
            <Button
            className="tweetBox_tweetButton"
              onClick={this.post}
              disabled={disabled}
              style={{
                marginTop: 20,
                display: 'inline',
                float:"right"
              }}
            >
              Tweet
        </Button>
        <h5             
            style={{
              marginTop: 20,
              display: 'inline',
              padding: 10,
              float:"right",
            }}
            className= {remainingText >10 ?"blueText":"redText"}
            >
              {remainingText}
            </h5>

          </div>
        </form>
        <style jsx>
          {`
            textarea {
              font-size: 20px;
              width:100%;
              border: none;
              outline: none;   
              -webkit-box-shadow: none;
              -moz-box-shadow: none;
              box-shadow: none;
              resize: none;
              }
              .redText {
                color : red ;
                }
              .blueText {
                color : blue;
              }
          `}

        </style>
      </div>
    );
  }

}

export default TweetBox;
