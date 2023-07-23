import Init from "./hackerText Final";

const imageURLTemplate = `https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/`;

const skills = [
  `HTML`,
  `CSS`,
  `JavaScript`,
  `Sass`,
  `Java`,
  `Tailwind CSS`,
  `NPM`,
  `REACT`,
  `Node JS`,
  `Git`,
];

export default function Skills() {
  return (
    <>
      <header className="section-header skills-header">
        <h1 id="skill" onClick={e => Init(e.target.id, 2, 50)}>
          Skill & Technology
        </h1>
      </header>
      <div className="skills-container">
        {skills.map((s, i) => (
          <SkillTab skill={s} key={i} />
        ))}
      </div>
    </>
  );
}

function SkillTab({ skill }) {
  return (
    <div className="skill-tab">
      <img
        src={
          imageURLTemplate + `${skill.split(` `).join(``).toLowerCase()}.svg`
        }
        alt={skill + "'s logo"}
      />
      <p>{skill}</p>
    </div>
  );
}
