import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Enter your username"></input>
        <label>Email</label>
        <input type="text" className="registerInput" placeholder="Enter your email"></input>
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="enter your password"
        ></input>
        <button className="registerButton">Register</button>
        <button className="registerLoginButton">Login</button>
      </form>
    </div>
  );
}
