import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <nav className="max-w-[100%] h-[100px] bg-[#f5ebe0]">
          <div className="m-auto flex pl-[30px] pr-[30px] bg-[#f5ebe0] max-w-[100%] h-[100px] justify-between items-center">
            <h1>Navbar</h1>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
