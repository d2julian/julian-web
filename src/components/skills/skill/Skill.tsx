type SkillT = {
  skillName: string;
};

export const Skill = ({ skillName }: SkillT) => {
  return <div className="p-2 m-2 bg-slate-200 text-sm text-slate-600 rounded-md">{skillName}</div>;
};
