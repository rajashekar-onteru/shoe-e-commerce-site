import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import useScrollSpy from "../hooks/useScrollSpy";
const sections = ["home", "products", "about-us", "contact-us"];

function Navbar() {
  const activeId = useScrollSpy(sections, 100); // 100px offset for better accuracy
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="flex justify-between z-50 w-full h-[70px] fixed bg-white top-0 pt-6 shadow-lg ">
      <a href="/" className="px-16 max-md:px-6">
        <img src={headerLogo} alt="Logo" width={120} height={29} />
      </a>
      <div className="w-[60vw]">
        <ul className="flex-1 flex  justify-evenly items-center max-md:hidden">
          {sections.map((sectionId) => (
            <li key={sectionId}>
              <a
                href={`#${sectionId}`}
                className={`text-lg ${
                  activeId === sectionId
                    ? "black font-semibold"
                    : "text-slate-gray"
                }`}
              >
                {sectionId
                  .replace("-", " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden max-md:block relative">
        <img
          src={hamburger}
          className="h-6 hidden max-lg:block cursor-pointer mr-6"
          alt="Menu"
          onClick={toggleMenu}
        />
        {menuOpen && (
          <div className="md:hidden bg-white shadow-xl w-36 absolute top-8 right-5 rounded-lg">
            {sections.map((sectionId) => (
              <a
                key={sectionId}
                href={`#${sectionId}`}
                className={`text-lg block px-6 py-2 rounded-lg text-center ${
                  activeId === sectionId
                    ? "text-black bg-slate-200"
                    : "text-slate-gray"
                }`}
                onClick={closeMenu}
              >
                {sectionId
                  .replace("-", " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
