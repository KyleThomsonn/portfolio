import StackIcon from "tech-stack-icons";

function SkillsList({ data }) {
  return (
    <>
      <h3>{data.acf.design_skills_title}</h3>
      <ul>
        {data.acf.design_skills_list.map((skill, index) => (
          <li key={index} className="skill-item design">
            <StackIcon name={`${skill.value}`} />
            <p>{skill.label}</p>
          </li>
        ))}
      </ul>

      <h3>{data.acf.development_skills_title}</h3>
      <ul>
        {data.acf.development_skills_list.map((skill, index) => (
          <li key={index} className="skill-item dev">
            <StackIcon name={`${skill.value}`} />
            <p>{skill.label}</p>
          </li>
        ))}
      </ul>
      <h3>{data.acf.learning_title}</h3>
      <ul>
        {data.acf.learning_list && data.acf.learning_list.map((skill, index) => (
          <li key={index} className="skill-item dev">
            <StackIcon name={`${skill.value}`} />
            <p>{skill.label}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SkillsList;
