import React from "react";

function Skills() {
    const skills = [
        {
            category: "Frontend Development",
            description: "Experienced in creating responsive and user-friendly interfaces.",
            skills: ["React", "HTML", "CSS", "JavaScript"],
            icon: "🌐",
        },
        {
            category: "Backend Development",
            description: "Proficient in building robust and scalable backend systems.",
            skills: ["Python", "Java", "Node.js", "MongoDB", "SQL"],
            icon: "🔧",
        },
        {
            category: "Tools & Technologies",
            description: "Utilized tools and technologies for version control, deployment, and testing.",
            skills: ["Git", "Docker", "Azure"],
            icon: "🛠️",
        },
        {
            category: "Soft Skills",
            description: "Strong interpersonal and problem-solving skills, ideal for team environments.",
            skills: [
                "Project Management",
                "Team Leadership",
                "Data Analysis",
                "Problem Solving",
                "AI Optimization",
            ],
            icon: "🤝",
        },
    ];

    return (
        <section className="skills">
            <h2 className="skills-title">My Expertise</h2>
            <div className="skills-grid">
                {skills.map((skillSet, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-icon">{skillSet.icon}</div>
                        <h3 className="skill-category">{skillSet.category}</h3>
                        <p className="skill-description">{skillSet.description}</p>
                        <ul className="skill-list">
                            {skillSet.skills.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
