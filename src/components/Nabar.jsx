import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const logo =
    theme === "dark"
      ? "./assets/Noble frame_white_png.png"   // dark mode logo5 
      : "./assets/Noble frame_black_png.png";  // light mode logo

  return (
    <nav className="fixed top-0 w-full  px-5 lg:px-10  py-0 lg:py-0 flex justify-between items-center">
  

      <div>
      <img
        src={logo}
        alt="Noble Frame Logo"
        className=" w-[130px] lg:w-[170px] h-[130px] lg:h-[170px]"
      />
      </div>
    

      <button
        onClick={toggleTheme}
        className="px-4 py-1 border-none rounded"
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;
