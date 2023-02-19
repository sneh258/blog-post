import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://media.istockphoto.com/id/1385766529/photo/woman-holding-signs-during-on-a-demonstration-outdoors.jpg?b=1&s=170667a&w=0&k=20&c=F_ObguYKCLkFTMA-gEgNmIdueZ4gh0g9Z55EYRWic6o="
          alt="oops"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          repellendus?
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Sneha</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          voluptate expedita sit quod eos nesciunt repellendus sint repellat
          itaque totam eligendi laboriosam optio, ipsum eaque odit tempore.
          Veritatis libero totam natus, corrupti optio necessitatibus tempore
          officiis iure itaque, rem sunt aut eveniet unde odio! Eum molestiae
          molestias magnam voluptates eveniet!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          voluptate expedita sit quod eos nesciunt repellendus sint repellat
          itaque totam eligendi laboriosam optio, ipsum eaque odit tempore.
          Veritatis libero totam natus, corrupti optio necessitatibus tempore
          officiis iure itaque, rem sunt aut eveniet unde odio! Eum molestiae
          molestias magnam voluptates eveniet!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          voluptate expedita sit quod eos nesciunt repellendus sint repellat
          itaque totam eligendi laboriosam optio, ipsum eaque odit tempore.
          Veritatis libero totam natus, corrupti optio necessitatibus tempore
          officiis iure itaque, rem sunt aut eveniet unde odio! Eum molestiae
          molestias magnam voluptates eveniet!
        </p>
      </div>
    </div>
  );
}
