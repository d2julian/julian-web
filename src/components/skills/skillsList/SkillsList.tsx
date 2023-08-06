import Constants from '../../../constants/Constants';
import { Skill } from '../skill/Skill';

const SkillsList = () => {
  return (
    <div className="flex flex-wrap">
      {Constants.SKILLS.map(s => {
        return <Skill skillName={s.name} />;
      })}
    </div>
  );
};

export default SkillsList;
