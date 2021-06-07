import React from "react";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import Moment from "react-moment"
import Avatar from "../Avtar"

function Post({ tweet }) {
    const { text, user, postedAt } = tweet
    const { userName, firstName, lastName } = user
    return (
        <div className="post">
            <div className="post_header">
                <Avatar size={30} firstname = {firstName} lastname = {lastName} />
                <div className="post_userName"></div>
                <h3>{firstName} {lastName}</h3>
                <div className="post_userId">
                    <p>@{userName}</p>
                </div>
                <div className="post_time">
                    <Moment fromNow ago unix>
                        {postedAt}
                    </Moment>
                </div>
            </div>
            <div className="post_body">
                <p>{text}</p>
            </div>
            <div className="post_footer">
                <ChatBubbleOutlineIcon />
                <RepeatIcon />
                <FavoriteBorderIcon />
                <PublishIcon />
            </div>
        </div>
    );
}

export default Post;
