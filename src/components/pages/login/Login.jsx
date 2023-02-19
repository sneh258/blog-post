import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="email"></input>
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="enter your password"
        ></input>
        <button className="loginButton">Login</button>
        <button className="registerButton">Register</button>
      </form>
    </div>
  );
}
