import "./sidebar.css"
import {RssFeed, HelpOutline, WorkOutline, Event, School, Bookmark, Group, PlayCircleFilledOutlined} from "@material-ui/icons"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <PlayCircleFilledOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </li>

            <li className="sidebarListItem">
              <Group className="sidebarIcon"/>
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <Bookmark className="sidebarIcon"/>
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <HelpOutline className="sidebarIcon"/>
              <span className="sidebarListItemText">Questtions</span>
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon"/>
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <Event className="sidebarIcon"/>
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
              <School className="sidebarIcon"/>
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr"/>
          <ul className="sidebarFriendList">
            <li className="sidebarFriend">
              <img src="/assests/person/4.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Random</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/5.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jhanvi</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/6.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Deepanshi </span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/8.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Random2</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/9.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Random3</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/10.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Prerna</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/1.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Muskan</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/4.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Himanshi</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/5.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">White Bhaturee</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/6.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Random4</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/3.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Random5</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/8.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Aishwarya</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/9.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Anonymous</span>
            </li>
            
          </ul>
        </div>
    </div>
  )
}
