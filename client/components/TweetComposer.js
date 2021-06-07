import React from 'react'
import { createTweet } from '../web3/tweets'
import Button from './Button'

export default class ComposeModal extends React.Component {
  state = {
    text: "",
    textCount: 0
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
    const { onClose } = this.props

    await createTweet(text)

    alert("Your tweet was posted!")

    onClose()
  }

  render() {
    const { onClose } = this.props
    const { text, textCount } = this.state
    var remainingText = 140 - textCount

    const disabled = (text === "")

    return (
      <div>
        <h3>
          Post a new tweet
        </h3>

        <textarea
          value={text}
          onChange={this.handleChange}
          maxLength={140}
        />
        <div style={{
          float:"right"
        }}>
        <h5 style={{
          marginTop: 20,
          display: 'inline',
          padding:10,
        }}
        className = { remainingText <= 10? "textRed":""}
        >
          {remainingText}
        </h5>

        <Button
          onClick={this.post}
          disabled={disabled}
          style={{
            marginTop: 20,
            display: 'inline',  
          }}
        >
          Post tweet
        </Button>
        </div>

        <style jsx>{`
          textarea {
            box-sizing: border-box;
            margin: 0px;
            margin-top: 10px;
            border: 2px solid rgba(107,108,139,0.58);
            border-radius: 7px;
            width: 100%;
            padding: 11px;
            font-size: 16px;
          }
          textarea:focus {
            outline: none;
          }
          .textRed {
            color:red;
          }
        `}</style>
      </div>
    )
  }
}