import { FaBars, FaTimes } from "react-icons/fa";
import PagesData from "../../PublicData/PagesData";
import { Link } from "react-router-dom";
function Navbar({ toggle, isOpane }) {
  
  return (
    <div className="z-20 ">
      <div className="text-white shadow-xl">
        <nav
          className={`md:px-8 px-4 flex  text-base justify-between items-center h-20 bg-gray-900`}
        >
          <div className="group">
            <img
              src="https://previews.123rf.com/images/furkanahmet/furkanahmet1909/furkanahmet190900112/133381648-3d-amazing-natural-wallpaper.jpg"
              className={`navImage w-16 h-16 md:w-20 md:h-20 mr-2 -z-50 cursor-pointer  rounded-full`}
              alt="jawad"
            />
            <div className="px-3 py-8 text-gray-200  m-4 mt-0 ml-10  transform absolute rounded-xl shadow-xl scale-0 group-hover:scale-100 duration-500 w-2/4 md:w-2/5 lg:w-1/4 text-center bg-gray-700">
              <h1 className="text-3xl font-bold my-4">Jawad Erfani</h1>
              <h1 className="text-2xl font-bold my-4">Frontend Developer</h1>
              <p className="text-md  text-justify ">
                <span className="text-5xl text-blue-700 ">Hey!</span>I am Jawad
                I am good at Javascript, Reactjs and TailwindCss 
          ....lorem adipisicing elit. Ipsam, accusamus rem iure
                repellendus quisquam iusto, enim
              </p>
            </div>
          </div>
          <div className="flex ">
            {PagesData.map((page) => {
              const { linkAddress, name, id } = page;
              return (
                <ul key={id} className="hidden sm:flex">
                  <li>
                    <Link
                      className="px-6  m-2 py-2 ml-3  border  transform ease-in-out duration-200  hover:bg-white rounded-full hover:text-black"
                      to={linkAddress}
                    >
                      {name}
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>

          <div onClick={toggle} className="sm:hidden text-2xl cursor-pointer">
            {isOpane ? (
              <FaTimes className="transition-all  duration-700 ease-in" />
            ) : (
              <FaBars className="transition-all duration-700 ease-in" />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
