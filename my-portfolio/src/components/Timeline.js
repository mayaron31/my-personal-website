import React, { useState } from "react";

function Timeline() {
    const timelineData = [
        { year: "2012", image: "/images/classmates.JPG", text: "Graduated high school with a dual focus on arts and biology, achieving a GPA of 114." },
        { year: "2018", text: "Enlisted in the IDF and served in the special operations room along the Lebanese border." },
        { year: "2019", image: "/images/hm.JPG", text: "Served as an Operations Officer in Unit 88, managing a team of 20 soldiers and collaborating with Product Managers." },
        { year: "2021", text: "Promoted to Control Officer, overseeing 50+ reservists and ensuring operational readiness." },
        { year: "2022", image: "/images/dev-vlub.JPG", text: "Started Computer Science and Entrepreneurship studies at Reichman University, participated in Tech-bootcamp as a leader and development club." },
        { year: "2024", image: "/images/germany.jpg", text: "Completed an internship at Paradox-AI and participated in a student exchange program in Germany." },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextItem = () => {
        if (currentIndex < timelineData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevItem = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <section className="timeline">
            <h2 className="timeline-title">My Journey</h2>
            <div className="timeline-wrapper">
                <button className="nav-button left" onClick={prevItem} disabled={currentIndex === 0}>
                    ◀
                </button>
                <div className="timeline-container">
                    {timelineData.map((item, index) => (
                        <div
                            className={`timeline-card ${index === currentIndex
                                ? "active"
                                : index === currentIndex - 1 || index === currentIndex + 1
                                    ? "nearby"
                                    : "inactive"
                                }`}
                            key={index}
                        >
                            {item.image && <img src={item.image} alt={`Year ${item.year}`} className="timeline-image" />}
                            <h4 className="timeline-year">{item.year}</h4>
                            <p className="timeline-text">{item.text}</p>
                        </div>
                    ))}
                </div>
                <button className="nav-button right" onClick={nextItem} disabled={currentIndex === timelineData.length - 1}>
                    ▶
                </button>
            </div>
        </section>
    );
}

export default Timeline;
