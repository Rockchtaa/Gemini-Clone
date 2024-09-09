import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
const Sidebar = () => {
  const [sideBar, setsideBar] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=> setsideBar(prev => !prev)} className="menu" src={assets.menu_icon} alt="" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {sideBar ? <p>new chat</p> : null}
        </div>
        {sideBar ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>was ist react</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {sideBar ? <p>Help</p> : null}

        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {sideBar ? <p>Activity</p> : null}

        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {sideBar ? <p>Setting</p> : null}

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
