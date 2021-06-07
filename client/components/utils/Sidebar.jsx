import React from "react";
import Link from "next/link"
import Web3 from "web3"


import SidebarOption from "./SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from '@material-ui/core';

function Sidebar({userInfo}) {
  const {userName} = userInfo
  return (
    <div className="sidebar">
        {/* Twitter Icon */}
      <TwitterIcon className='sidebar_twitterIcon' />

        {/* SideBar */}

      <SidebarOption active text="Home" Icon={HomeIcon} /> 
      <SidebarOption text="Explore" Icon={SearchIcon} /> 
      <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarOption text="Lists" Icon={ListAltIcon} />
      <Link href={`/profile?u=${Web3.utils.fromAscii(userName)}`}>
         <SidebarOption text="Profile" Icon={PermIdentityIcon} />
      </Link>
{/*       <SidebarOption text="More" Icon={MoreHorizIcon} />
 */}
{/*       <Button varient='outline' className='sidebar_tweet'>Tweet</Button>
 */}    </div>
  );
}

export default Sidebar;
