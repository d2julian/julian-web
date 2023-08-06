import { useState } from 'react';
import NavBarList from '../navBarList/NavBarList';
import Constants from '../../constants/Constants.js';
import Images from '../../constants/Images';
import Icons from '../../constants/Icons';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 w-full z-50">
      <div className="relative w-full">
        <div className="flex items-center justify-between flex-wrap p-4">
          <div className="lg:px-5 flex items-center flex-shrink-0 text-black">
            <div className="lg:h-12 lg:w-12 h-9 w-9 rounded-full overflow-hidden mr-4 border border-violet-700 border-dashed">
              <img className="w-full h-full object-cover contrast-125" src={Images.facePic} alt="me" />
            </div>
            <div className="lg:text-lg font-bold text-slate-700 tracking-wide">JULIAN ARCHE</div>
          </div>
          <div
            onClick={() => setIsOpen(value => !value)}
            className="lg:hidden md:hidden block cursor-pointer hover:scale-110">
            {!isOpen && <Icons.MenuBurger size="1.5rem" className="text-slate-700" />}
            {isOpen && <Icons.MenuClose size="1.5rem" className="text-slate-700" />}
          </div>
          <div
            className={`lg:flex lg:items-center md:flex md:items-center block px-5 ${
              !isOpen ? 'hidden' : 'md:w-auto lg:w-auto toggle w-full'
            }`}>
            <NavBarList
              closeMenu={() => setIsOpen(false)}
              listItems={Constants.NAVBAR_ITEMS_LINKS}
              classList="lg:flex md:flex hidden"
              classItem="lg:text-base md:lg:text-base list-none p-3 cursor-pointer uppercase text-sm font-bold text-slate-700 tracking-wide border-transparent hover:text-violet-800"
            />
          </div>
        </div>
        <div className={`${isOpen ? 'lg:invisible md:invisible visible' : 'invisible'}`}>
          <div
            className={`absolute z-50 w-full top-full shadow-md bg-white border-b border-gray-100 transition-all ease-in-out duration-500 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}>
            <NavBarList
              closeMenu={() => setIsOpen(false)}
              listItems={Constants.NAVBAR_ITEMS_LINKS}
              classItem={`list-none p-3 text-slate-700 uppercase text-sm text-end font-bold border-t py-5`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
