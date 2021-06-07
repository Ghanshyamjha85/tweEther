import Link from "next/link"
import Web3 from "web3"
import Avatar from "./Avtar"

export default ({ userInfo, toggleComposeModal }) => {
  const { userName, firstName, lastName } = userInfo
  console.log(userInfo)

  return (
    <nav>
      <button 
      onClick={toggleComposeModal}>
        Tweet
      </button>
      <Link href={`/profile?u=${Web3.utils.fromAscii(userName)}`}>
        <a className="username">
          {<Avatar
            firstname = {firstName}
            lastname = {lastName}
            size = {30}
            style={{
              marginBottom: -2,
            }}
          />}

          <span>
            {userName}
          </span>
        </a>
      </Link>

      <style jsx>{`
        nav {
          display: inline-block; 
          float: right;
        }
        nav button, 
        nav a {
          min-height: 33px;
          border: none;
          padding: 7px;
          text-align: center;
          border-radius: 24px;
          display: inline-block;
          vertical-align: middle;
          cursor: pointer;
          margin: 0 10px;
          transition: background-color 0.1s;
          color: inherit;
        }
        nav button:hover, 
        nav a:hover {
          background-color: rgba(140,111,193,0.14);
        }
        nav button:focus {
          outline: none;
        }
        .username {
          font-size: 18px;
          text-decoration: none;
        }
        .username span {
          display: inline-block;
          vertical-align: middle;
          margin-left: 10px;
          margin-right: 10px;
        }
        nav :global(svg) {
          margin-bottom: -2px;
        }
        button {
          background-color: #50b7f5;
          color: white !important;
          font-weight: 600 !important;
          font-size: 14px;
      
        }
      `}</style>
    </nav>
  )
}
