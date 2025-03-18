import React, { useState } from 'react'
import "./profile.css";
import Gallery from '../../components/gallery/Gallery';
import Collections from '../../components/collections/Collections';
import Image from '../../components/image/Image';
const Profile = () => {
  const [activeTab, setActiveTab] = useState("saved");
  
  return (
    <div className="profilepage">
      <Image
        className="profileImage"
        width={100}
        height={100}
        path="/general/noAvatar.png"
        alt="profile"
      />
      <h1 className="profileName">John Doe</h1>
      <span className="profileUsername">@johnDoe</span>
      <div className="followerCount">10 followers . 20 following</div>
      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path="/general/more.svg" alt="" />
      </div>
      <div className="profileOptions">
        <span
          onClick={() => setActiveTab("created")}
          className={activeTab === "created" ? "active" : ""}
        >
          Created
        </span>
        <span
          onClick={() => setActiveTab("saved")}
          className={activeTab === "saved" ? "active" : ""}
        >
          Saved
        </span>
      </div>
      {activeTab === "created" ? <Gallery /> : <Collections />}
    </div>
  );
}

export default Profile
