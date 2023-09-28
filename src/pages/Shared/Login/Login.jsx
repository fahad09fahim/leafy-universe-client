import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  // send user email and pass to authentication
  const { signIn } = useContext(AuthContext);

  // ----------------
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  // ----------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submit form data
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signIn(email, password)
      .then((result) => {
        const user = result.user;

        // notification
        if (user) {
          Swal.fire("Thank you!", "Log in successfully", "success");
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        console.log(err.message);
        if (
          err.message === "Firebase: Error (auth/invalid-login-credentials)."
        ) {
          Swal.fire("Unable to Log in", "Invalid Email & password", "warning");
        }
      });
    // if(err.message ==="")
  };
  return (
    <div className="card w-96 glass my-7 mx-auto bg-[#237A57]">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl font-serif">
                Enter Your Email
              </span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered input-info w-full max-w-xs space-y-8"
            />
            {errors.email && (
              <span className="text-red-600">Email required</span>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl font-serif">
                Enter Password
              </span>
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="input input-bordered input-info w-full max-w-xs space-y-8"
            />
            {errors.password && (
              <span className="text-red-600">Password required</span>
            )}
          </div>
          <div className="card-actions justify-center mt-5">
            <input
              type="submit"
              value="login"
              className="btn btn-secondary border-x-cyan-950"
            ></input>
          </div>
        </form>
        <div className="text-white mt-1">
          <span>
            New to leafy universe?{" "}
            <Link className="text-info" to="/register">
              Create an Account.
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
