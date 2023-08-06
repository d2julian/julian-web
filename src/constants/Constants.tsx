import { ConstantsI } from '../types/types';
import Images from '../constants/Images';

const Constants: ConstantsI = {
  NAVBAR_ITEMS_LINKS: [
    {
      id: 'home',
      name: 'HOME',
    },
    {
      id: 'aboutMe',
      name: 'ABOUT',
    },
    {
      id: 'projects',
      name: 'PROJECTS',
    },
    {
      id: 'contact',
      name: 'CONTACT',
    },
  ],
  SKILLS: [
    {
      name: 'TypeScript',
    },
    {
      name: 'JavaScript',
    },
    {
      name: 'React',
    },
    {
      name: 'React Native',
    },
    {
      name: 'CSS',
    },
    {
      name: 'NodeJs',
    },
    {
      name: 'Firebase',
    },
    {
      name: 'MongoDB',
    },
    {
      name: 'Oracle',
    },
  ],
  PROJECTS: [
    {
      title: 'Webpages / Migrations',
      description:
        'I have migrated several projects (intranets, applications...) coded with old stacks like delphi and oracle, to new stacks including React, Firebase and MongoDB  ',
      info: 'Old stacks are usually not maintained, so companies migrate them to new mordern stacks to improve security, scablity and design',
      image: Images.myPage,
    },
    {
      title: 'Housekeeping App ',
      description:
        'App housekeeping to control the status of the rooms, minibars and tasks. Made with React Native, React Navigation, Redux, I18n.',
      info: 'App is now using by over hundred of people working at Riu hotels improving their response time with customers problems, chekins, checkouts, room service and so on',
      image: Images.mobileApp,
    },
  ],
  LINKEDIN_URL: 'https://www.linkedin.com/in/julian-arche-166665238',
  GITHUB_URL: 'https://github.com/d2julian',
};

export default Constants;
