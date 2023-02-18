import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-aCDOtTDuyI_rejoNAy8Nq8B8RKPUVnk1g&usqp=CAU"
        alt=""
      />
      <div className="postInfo">
        <div className="postcats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lore elit. Sapiente cumqueiet deserunt animi ipsum illo, dict
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ad
        vitae, vero tenetur facilis minus magni tempore reprehenderit id
        vitae, vero tenetur facilis minus magni tempore reprehenderit id
        vitae, vero tenetur facilis minus magni tempore reprehenderit id
        vitae, vero tenetur facilis minus magni tempore reprehenderit id
        vitae, vero tenetur facilis minus magni tempore reprehenderit id
        vitae, vero tenetur facilis minus magni tempore reprehenderit id
        vitae, vero tenetur facilis minus magni tempore reprehenderit id
        vitae, vero tenetur facilis minus magni tempore reprehenderit id
        deleniti, fugit consequatur perspiciatis? Ea animi nemo, beatae deserunt
        fuga recusandae?
      </p>
    </div>
  );
}
