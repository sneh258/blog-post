import "./topbar.css";
import { Link } from "react-router-dom";
export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className=" topIcon fa-brands fa-facebook"></i>
        <i className=" topIcon fa-brands fa-twitter"></i>
        <i className=" topIcon fa-brands fa-pinterest"></i>
        <i className=" topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/write">WRITE</Link>
          </li>
          <li className="topListItem">
            <Link to="/">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to="/">{user && 'LOGOUT'}</Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImage"
          src="https://cdn-cf.ipsy.com/contentAsset/image/033f9f37-8054-4140-8567-20c7254dcccc/fileAsset?byInode=1"
          alt="not downloaded"
        ></img>
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
