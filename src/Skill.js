export default function Skill(props) {
  const { skillName, icon, bgColor } = props.data;
  return (
    <li className="skill" style={{ backgroundColor: bgColor }}>
      {skillName} {icon}
    </li>
  );
}
