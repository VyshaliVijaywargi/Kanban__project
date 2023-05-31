import React from 'react'
import { FaTwitter,FaHome,FaHashtag,FaRegBell,FaRegEnvelope,FaRegBookmark,FaClipboardList,FaUser,FaMehBlank } from 'react-icons/fa';
import './sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul>
        <li>
            <a> <FaTwitter className='logo'/> </a>
        </li>
        <li>
            <a href="" className='name'> <FaHome className='opt logo1'/>Home </a>
        </li>
        <li>
            <a href="" className='name'> <FaHashtag className='opt logo1'/>Explore </a>
        </li>
        <li>
            <a href="" className='name'> <FaRegBell className='opt logo1'/>Notification </a>
        </li>
        <li>
            <a href="" className='name'> <FaRegEnvelope className='opt logo1'/>Messages </a>
        </li>
        <li>
            <a href="" className='name'> <FaRegBookmark className='opt logo1'/>Bookmarks </a>
        </li>
        <li>
            <a href="" className='name'> <FaClipboardList className='opt logo1'/>Lists </a>
        </li>
        <li>
            <a href="" className='name'> <FaUser className='opt logo1'/>Profile </a>
        </li>
        <li>
            <a href="" className='name'> <FaMehBlank className='opt logo1'/>More </a>
        </li>
        <li>

            <button className='btn name'>Tweet</button>

        </li>
      </ul>
    </div>
  )
}

export default Sidebar
