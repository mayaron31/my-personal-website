import React from 'react';

function Timeline() {
    return (
        <section className="timeline">
            <h2 className="timeline-title">My Journey</h2>
            <div className="timeline-content">
                <div className="timeline-item">
                    <h4>2012</h4>
                    <p>
                        Graduated from high school with a focus on arts and biology. Volunteered in several organizations.
                    </p>
                </div>
                <div className="timeline-item">
                    <h4>2018</h4>
                    <p>
                        Enlisted in the IDF as an operations officer. Led teams and participated in major operations.
                    </p>
                </div>
                <div className="timeline-item">
                    <h4>2020</h4>
                    <p>
                        Began my studies in Computer Science and Entrepreneurship at Reichman University.
                    </p>
                </div>
                <div className="timeline-item">
                    <h4>2024</h4>
                    <p>
                        Participated in a student exchange program at TU Darmstadt, Germany, studying advanced computer science courses.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
