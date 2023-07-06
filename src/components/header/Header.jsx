import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://atmos.earth/wp-content/uploads/2020/07/black-lives-matter-protest-fists-1280x853.jpg"
        alt="protest"
      />
    </div>
  );
}
