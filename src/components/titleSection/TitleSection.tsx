import { RiSeparator } from 'react-icons/ri';

type TitleSectionProps = {
  title: string;
  description: string;
};

const TitleSection = ({ title, description }: TitleSectionProps) => {
  return (
    <>
      <span className="lg:text-5xl lg:p-3 text-3xl font-bold tracking-wider text-center">{title}</span>
      <RiSeparator size="2.5rem" className="text-purple-600" />
      <p className="lg:text-base text-sm text-center text-slate-700 lg:p-5 lg:w-2/5 mb-5">{description}</p>
    </>
  );
};

export default TitleSection;
