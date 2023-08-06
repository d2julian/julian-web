import {
  AiOutlineGithub as gitHubIcon,
  AiFillLinkedin as linkedinIcon,
  AiOutlineMenu as MenuBurger,
  AiOutlineClose as MenuClose,
} from 'react-icons/ai';
import { IconType } from 'react-icons/lib';

type IconsT = Record<string, IconType>;

const Icons: IconsT = {
  gitHubIcon,
  linkedinIcon,
  MenuBurger,
  MenuClose,
};

export default Icons;
