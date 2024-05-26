import Skill from "./Skill";
export default function SkillList(props) {
  return (
    <ul className="skill-list">
      {props.skills.map((s) => (
        <Skill data={s} />
      ))}
    </ul>
  );
}
