import React from "react";

const skills = [
    { name: "HTML & CSS", level: "90%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "70%" },
    { name: "Python", level: "85%" },
];

const Skills = () => {
    return (
        <section id="skills">
            <h2>My Skills</h2>
            <div className="row">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <h3>{skill.name}</h3>
                        <div className="progress-bar">
                            <span className="progress" style={{ width: skill.level }}></span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
