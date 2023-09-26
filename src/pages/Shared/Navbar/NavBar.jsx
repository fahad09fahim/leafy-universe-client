import logo from "../../../assets/logo-1.svg"

const NavBar = () => {

    const navItems =< >
    
         <li className="mx-4 text-lg font-mono font-semibold cursor-pointer">Home</li>
         <li className="mx-4 text-lg font-mono font-semibold cursor-pointer">Trees</li>
         <li className="mx-4 text-lg font-mono font-semibold cursor-pointer">Add Trees</li>
         <li className="mx-4 text-lg font-mono font-semibold cursor-pointer">Login</li>
    </>
    return (
        <div className="navbar bg-base-100 max-h-[1220px] lg:px-11  mx-auto  shadow-2xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
             {navItems}
            </ul>
          </div>
          <img className="max-h-14 hidden lg:flex md:flex"  src={logo} alt="" />
        </div>
        <img className="max-h-14 navbar-end lg:hidden md:hidden"  src={logo} alt="" />
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
      </div>
    );
};

export default NavBar;