import Constants from '../constants/Constants';
import Icons from '../constants/Icons';
import { navigate } from '../utils/Navigate';
const Presentation = () => {
  const navigateToLinkedin = () => {
    navigate(Constants.LINKEDIN_URL);
  };
  return (
    <section
      id="home"
      className="bg-bg-pattern bg-cover flex flex-col items-center justify-center lg:min-h-screen min-h-40 p-9 ">
      <div className="flex flex-col items-center justify-center max-w-3xl gap-10">
        <span className="lg:text-6xl text-3xl font-extrabold tracking-wider text-center">
          HELLO, MY NAME IS JULIAN ARCHE
        </span>
        <p className="lg:text-lg text-base text-center text-slate-700">
          A computer programmer with more than 10 years working experience and currently focused on frontend
        </p>
        <button
          type="button"
          onClick={navigateToLinkedin}
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-sm lg:px-24 lg:py-5 px-16 py-3 text-center mr-2 mb-2 inline-flex items-center">
          <Icons.linkedinIcon size="1.5rem" className="mr-5" />
          <span className="lg:text-lg text-base">Linkedin</span>
        </button>
      </div>
    </section>
  );
};

export default Presentation;
