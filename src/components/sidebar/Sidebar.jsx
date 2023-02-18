import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">about me</span>
        <img
          className="sidebarImg"
          src="https://assets.teenvogue.com/photos/5ed0fa254e22a58f3f6de7cc/16:9/w_2560%2Cc_limit/GettyImages-1229777150.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          numquam, aspernatur obcaecati aut at umenda temporibus repellendus.
          Commodi, quia ipsum!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">categories</span>
        <ul className="sidebarList">
          <li className="sidebarListitem">life</li>
          <li className="sidebarListitem">education</li>
          <li className="sidebarListitem">job</li>
          <li className="sidebarListitem">style</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fa-brands fa-facebook"></i>
          <i className=" sidebarIcon fa-brands fa-twitter"></i>
          <i className=" sidebarIcon fa-brands fa-pinterest"></i>
          <i className=" sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
