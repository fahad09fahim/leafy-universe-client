import { useContext } from "react";
import logo from "../../../assets/logo-1.svg";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'User log out successfully',
      showConfirmButton: false,
      timer: 1500
    })
  };
  const navItems = (
    <>
 
        <Link className=" btn btn-accent  font-mono m-2 my font-semibold   " to='/'>Home</Link>
  
     
   
       <Link to="trees" className=" btn btn-accent  font-mono m-2 my font-semibold   ">Trees</Link>
 
      
      {user ? <>
        
          <button className=" btn btn-accent  font-mono m-2 my font-semibold   ">
        Add Trees
      </button>
        <button
          onClick={handleLogOut}
          className=" btn btn-accent  font-mono m-2 my font-semibold   "
        >
          Log out
        </button>
      
      </>: (
  
          <Link className="btn btn-accent  font-mono m-2 my font-semibold" to="login">Log in</Link>
  
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 max-h-[1220px] lg:px-11  mx-auto  shadow-2xl ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navItems}
          </ul>
        </div>
        <img className="max-h-14 hidden lg:flex md:flex" src={logo} alt="" />
      </div>
      <img
        className="max-h-14 navbar-end lg:hidden md:hidden"
        src={logo}
        alt=""
      />
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
    </div>
  );
};

export default NavBar;
