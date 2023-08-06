import TitleSection from '../components/titleSection/TitleSection';
import SkillsList from '../components/skills/skillsList/SkillsList';
import dashboardPic from '../assets/man-purple-dashboard.png';
import blueDashPic from '../assets/blue-dashboard.png';
const AboutMe = () => {
  return (
    <section id="aboutMe" className="bg-bg-projects bg-cover flex flex-col items-center lg:min-h-screen min-h-25 p-9">
      <div className="flex flex-col items-center justify-center max-full">
        <TitleSection title="ABOUT ME" description="What did i do, what i am doing and what will i do." />
        <div className="flex flex-col lg:flex-row md:lg:flex-row lg:w-4/5 lg:gap-10">
          <div className="flex-1 ">
            <div className="lg:text-2xl text-xl font-extrabold w-full text-left lg:py-4 mb-2">Who is Julian</div>
            <p className="lg:text-lg text-base w-full text-left text-slate-700 mb-5">
              I'm Julian, a computer programmer working currenly with React / React Native. I have been working as a
              programmer for over 10 years. I from Mallorca, Spain.
            </p>
            <p className="lg:text-lg text-base w-full text-left text-slate-700">
              I have worked always in relate tourism fields. During this 10 years, i have coded many things in many
              different languages over the last 2 years i have been focusing in frontend / apps.
            </p>
          </div>
          <div className="flex-1 w-full lg:flex lg:justify-center hidden">
            <img className="opacity-70 w-72 h-72" src={dashboardPic} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row md:lg:flex-row lg:w-3/5 w-full">
          <div className="flex-1 w-full lg:flex lg:justify-start hidden">
            <img className="opacity-70 w-96 h-96" src={blueDashPic} />
          </div>
          <div className="flex-1 w-full lg:self-center">
            <div className="lg:text-2xl text-xl font-extrabold w-full text-left py-4">Skills</div>
            <SkillsList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
