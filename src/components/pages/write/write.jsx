import "./write.css";

export default function write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://plus.unsplash.com/premium_photo-1661488559192-f136c5093319?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvdGVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className=" writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">publish</button>
      </form>
    </div>
  );
}
