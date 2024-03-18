import { Link, Navigate } from "react-router-dom";
import TopNav from "../../components/TopNav/TopNav";
import "./Registry.scss";
import { useEffect, useState } from "react";
import { backendUrl } from "../../api/api.js";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [registered, setRegistered] = useState(null);

  const [formActive, setFormActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFormActive(true);
    }, 50); 
  }, []);

  const fetchRegistrationData = async () => {
    try {
      const res = await fetch(backendUrl + "/api/v1/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, passwordConfirm }),
      });

      const { status, data, error } = await res.json();
      if (status !== "success") throw new Error(error);
      else console.log("Registration success: ", data);
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
      setRegistered(true);
    } catch (error) {
      setRegistered(false);
      console.error("Registration error: User with this email exists");
    }
  };

  const handleSubmit = () => {
    fetchRegistrationData();
  };

  return (
    <section className="registry">
      <article className={`form-container ${formActive ? 'active' : ''}`}>
        <TopNav />
        <div className="create-account">
          <h1>Create new Account</h1>
          <p>Enter Your details to create account</p>
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <button onClick={handleSubmit}>Sign Up!</button>
          {registered === true && <Navigate to="/register-success" />}
          {registered === false && (
            <span className="fail">
              Email oder Passwort entspricht nicht unseren Bedingungen. Oder der
              User mit dieser Email Adresse existiert bereits. Bitte geben Sie
              eine korrekte Email Adresse ein und ein Passwort mit mindestens 8
              Zeichen!
            </span>
          )}
        </div>
      </article>
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </section>
  );
};

export default Register;
