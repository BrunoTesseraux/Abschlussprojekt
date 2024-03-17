import { Link } from "react-router-dom";
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
          <input type="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <Link className="forgot-password">Forgot password?</Link>
          <button>Sign In!</button>
        </div>
      </article>
      <p>
        Dont have an account? <Link to="/signup">Sign up</Link>
      </p>
    </section>
  );
};

export default SignIn;
