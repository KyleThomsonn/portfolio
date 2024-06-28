import StackIcon from "tech-stack-icons";
import { useState } from "react";

function SkillsList({ data }) {
  return (
    <>
      <h3>{data.acf.design_skills_title}</h3>
      <ul>
        {data.acf.design_skills_list.map((skill, index) => (
          <li key={index} className="skill-item design">
            <StackIcon name={`${skill}`} />
          </li>
        ))}
      </ul>

      <h3>{data.acf.development_skills_title}</h3>
      <ul>
        {data.acf.development_skills_list.map((skill, index) => (
          <li key={index} className="skill-item dev">
            <StackIcon name={`${skill}`} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default SkillsList;
