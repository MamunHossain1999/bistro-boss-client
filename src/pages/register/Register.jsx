import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createuser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (data) => {
    const { name, email, photoUrl, password } = data;

    // Call createUser function from AuthContext
    createuser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Update user's profile
        updateProfile(user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            console.log("Profile updated successfully!");
            alert("Registration successful!");
            reset(); // Reset the form
            navigate("/"); // Navigate to home page
          })
          .catch((error) => {
            console.error("Error updating profile:", error.message);
            alert("Error updating profile: " + error.message);
          });
      })
      .catch((error) => {
        console.error("Error during registration:", error.message);
        alert("Error during registration: " + error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <p className="py-6">
            Register today and join our community. It's quick and easy!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="card-body"
          >
            <h1 className="text-5xl font-bold">Register</h1>
            
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            {/* Photo URL Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                {...register("photoUrl", { required: "Photo URL is required" })}
                className="input input-bordered"
              />
              {errors.photoUrl && (
                <span className="text-red-500 text-sm">{errors.photoUrl.message}</span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
