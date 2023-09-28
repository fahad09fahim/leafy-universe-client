import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Social = () => {
  const {googleSignIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn =()=>{
    googleSignIn()
    .then(result=>{
          console.log(result)
            navigate(from, { replace: true });

    })
    .catch(err=>{
      console.log(err)
    })
  }
    return (
        <div>
        <div className="divider">OR</div>
        <div className="flex gap-3 justify-center">
              <button onClick={handleGoogleSignIn} >
                <FcGoogle className="h-7 w-7" />
              </button>
            </div>
      </div>
    );
};

export default Social;