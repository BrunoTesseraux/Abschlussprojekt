import { Link, useNavigate } from "react-router-dom";
import TopNav from "../../components/TopNav/TopNav";
import "./Registry.scss";
import { useEffect, useState } from "react";

const SignIn = () => {

  const [formActive, setFormActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFormActive(true);
    }, 50); 
  }, []);

import { backendUrl } from "../../api/api";

const SignIn = ({ login, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (login) {
      navigate("/home");
    }
  }, [login, navigate]);

  const fetchLoginData = async () => {
    try {
      const res = await fetch(backendUrl + "/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const { status, token, error } = await res.json();
      if (status !== "success") throw new Error(error);
      else console.log("Login success: ", status, token);
      setEmail("");
      setPassword("");
      onLogin(true);
    } catch (error) {
      onLogin(false);
      console.error("Login error: User with this email not exist");
    }
  };

  const handleSubmit = () => {
    fetchLoginData();
  };

  return (
    <section className="registry">
      <article className={`form-container ${formActive ? 'active' : ''}`}>
        <TopNav />
        <div className="grosshop">
          <img src="/grocery.svg" alt="" />
          <p className="name">
            <span>GrosS</span>hop
          </p>
        </div>
        <div className="registry-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link className="forgot-password">Forgot password?</Link>
          <button onClick={handleSubmit}>Sign In!</button>
        </div>
      </article>
      <p>
        Dont have an account? <Link to="/signup">Sign up</Link>
      </p>
    </section>
  );
};

export default SignIn;
