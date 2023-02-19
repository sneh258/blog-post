import "./setting.css";
import Sidebar from "./../../sidebar/Sidebar";

export default function Setting() {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update your account</span>
          <span className="settingDeleteTitle">Delete your account</span>
        </div>
        <form className="settingForm">
          <label>profile pic</label>
          <div className="settingPP">
            <img
              className="settingImg"
              src="https://images.unsplash.com/photo-1602199000376-ee1ce1cd46ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvdGVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            ></img>
            <label htmlFor="fileInput">
              <i className="settingPPIcon fa-solid fa-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
            ></input>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak"></input>
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com"></input>
          <label>Password</label>
          <input type="password"></input>
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
