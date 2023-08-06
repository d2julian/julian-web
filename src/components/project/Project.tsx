import { ProjectT } from '../../types/types';

const Project = ({ image, title, description, info }: ProjectT) => {
  return (
    <div className="flex w-3/4 lg:flex-row flex-col">
      <div className="flex-1 flex justify-center items-center">
        <img className="opacity-70 lg:w-96 lg:h-96 w-72 h-72" src={image} />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <p className="lg:text-3xl text-lg font-extrabold mb-5">{title}</p>
        <p className="lg:text-base text-base w-full text-left text-slate-700 mb-5">{description}</p>
        <p className="lg:text-base text-base w-full text-left text-slate-700">{info}</p>
      </div>
    </div>
  );
};

export default Project;
