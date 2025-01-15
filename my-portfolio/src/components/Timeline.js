import React, { useState } from "react";

const timelineData = [
    {
        year: 2012,
        img: "/assets/images/theater.jpg",
        text: "I studied at 'Hakfar Hayarok' high school, specializing in theater and biology. I volunteered at AMCHA and Latet.",
    },
    {
        year: 2018,
        img: "/assets/images/tir.jpg",
        text: "I joined the military as an Operations Sergeant in the infantry, later promoted to Officer.",
    },
    {
        year: 2022,
        img: "/assets/images/reichman.jpg",
        text: "I started my studies at Reichman University in Computer Science & Entrepreneurship.",
    },
    {
        year: 2024,
        img: "/assets/images/paradox.jpg",
        text: "I joined Paradox.AI as a Data Intern and later became an employee.",
    },
];

const Timeline = () => {
    const [activeYear, setActiveYear] = useState(null);

    const toggleContent = (year) => {
        setActiveYear(activeYear === year ? null : year);
    };

    return (
        <section id="timeline">
            <h2>Timeline</h2>
            <div className="timeline">
                {timelineData.map((item) => (
                    <div key={item.year} className="timeline-item" onClick={() => toggleContent(item.year)}>
                        <div>{item.year}</div>
                        {activeYear === item.year && (
                            <div className="timeline-content">
                                <img src={item.img} alt={`${item.year}`} className="timeline-image" />
                                <p>{item.text}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
