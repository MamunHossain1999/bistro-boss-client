import { useContext, useEffect, useRef } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const captchaRef = useRef();

  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    loadCaptchaEnginge(6); // Generate CAPTCHA with 6 characters
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const userCaptchaValue = captchaRef.current.value;

    if (!validateCaptcha(userCaptchaValue)) {
      console.error("Captcha does not match");
      alert("Please enter the correct captcha!");
      return;
    }

    // If captcha is valid, proceed with login
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        alert("Login successful!");
        navigate(from, {replace:true})
      })
      .catch((error) => {
        console.error("Error during login:", error.message);
        alert("Error during login: " + error.message);
      });
  };

  const handleValidate = () => {
    const userCaptchaValue = captchaRef.current.value;
    if (validateCaptcha(userCaptchaValue)) {
      console.log("Captcha matched");
    } else {
      console.error("Captcha does not match");
    }
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Login with Google successful!");
        navigate("/"); // Redirect to home page after successful Google login
      })
      .catch((error) => {
        console.error("Error during Google login:", error.message);
        alert("Error during Google login: " + error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-1/2">
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplateNoReload />
              </label>
              <label className="label">
                <span className="label-text">Captcha</span>
              </label>
              <input
              disabled
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="captcha"
                className="input input-bordered"
                required
              />
              <button disabled
                onClick={handleValidate}
                className="btn btn-outline btn-xs mt-2"
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {/* Google Login Button */}
          <div className="form-control mt-6">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-secondary"
            >
              Login with Google
            </button>
          </div>
          <p className="px-2">
            <small>
              New Here? <Link to="/register">Create an account</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
