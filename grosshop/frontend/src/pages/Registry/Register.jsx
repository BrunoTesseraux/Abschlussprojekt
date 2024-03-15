import { Link } from "react-router-dom";
import TopNav from "../../components/TopNav/TopNav";
import "./Registry.scss"

const Register = () => {
    return (
      <section className="registry">
        <article className="form-container">
        <TopNav />
        <div className="create-account">
          <h1>Create new Account</h1>
          <p>Enter Your details to create account</p>
        </div>
        <div className="registry-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        <button>Sign Up!</button>
        </div>
        </article>
        <p>Already have an account? <Link>Sign in</Link></p>
      </section>
    );
  };
  
  export default Register;