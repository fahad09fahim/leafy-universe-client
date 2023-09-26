import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Login = () => {

  const {signIn} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signIn(email, password)
    .then(result =>{
     const user = result.user;
    console.log(user)
     if(user){
      Swal.fire(
        'Thank you!',
        'Log in successfully',
        'success'
      )
     }
    })
    .then(err=>{
      if(err){
        Swal.fire('Unable to Log in',
        'Please check your Email & password.',
        'warning')}
    })
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
            <input type="submit" value="login" className="btn btn-secondary border-x-cyan-950">
            </input>
          </div>
        </form>
        <div className="text-white mt-1">
          <span >New to leafy universe? <Link className="text-info" to='/register'>Create an Account.</Link></span> 
        </div>
      </div>
    </div>
  );
};

export default Login;
