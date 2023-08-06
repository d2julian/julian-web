import Icons from '../constants/Icons';
import { navigate } from '../utils/Navigate';
import Constants from '../constants/Constants';
const Footer = () => {
  return (
    <footer id="contact" className="bg-black h-40 flex justify-center lg:text-base text-sm">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-1 gap-10">
          <div className="flex gap-2 items-center cursor-pointer" onClick={() => navigate(Constants.GITHUB_URL)}>
            <Icons.gitHubIcon size="1.5rem" className="text-slate-50" />
            <span className="text-white">Github</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer" onClick={() => navigate(Constants.LINKEDIN_URL)}>
            <Icons.linkedinIcon size="1.5rem" className="text-slate-50" />
            <span className="text-white">Linkedin</span>
          </div>
        </div>
        <div className="flex flex-2 p-2">
          <p className="text-white self-end">© Copyright 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
