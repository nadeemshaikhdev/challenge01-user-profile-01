import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";
import "./styles.css";

export default function App() {
  const userProfile = {
    avatarSrc: "./nadeem.jpeg",
    fullName: "Mohammed-Nadeem Shaikh",
    description:
      "Full-stack .net web developer. When not coding or learning front-end technologies, I like to play FIFA 2024 on PS4 with my children, to just enjoy walk on trails.",
    skillList: [
      { skillName: "HTML+CSS", icon: "💪", bgColor: "cyan" },
      { skillName: "JavaScript", icon: "💪", bgColor: "yellow" },
      { skillName: "Web Design", icon: "💪", bgColor: "lightgreen" },
      { skillName: "Git and Github", icon: "💪", bgColor: "red" },
      { skillName: "React", icon: "💪", bgColor: "skyblue" },
      { skillName: "Svelte", icon: "💪", bgColor: "brown" },
    ],
  };
  return (
    <div className="card">
      <Avatar src={userProfile.avatarSrc} />
      <div className="data">
        <Intro
          fullName={userProfile.fullName}
          description={userProfile.description}
        />
        <SkillList skills={userProfile.skillList} />
      </div>
    </div>
  );
}
