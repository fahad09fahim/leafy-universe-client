import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log( email, password);
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
              type="text"
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
      </div>
    </div>
  );
};

export default Login;
