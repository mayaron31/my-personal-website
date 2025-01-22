import React from "react";

function ContactMe() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-header">
                <h2>Contact Me</h2>
                <p>Feel free to reach out for any inquiries or collaborations!</p>
            </div>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                    <label htmlFor="topic">Choose a Topic</label>
                    <select id="topic" name="topic" required>
                        <option value="">Select One...</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="inquiry">General Inquiry</option>
                        <option value="feedback">Feedback</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-primary">
                    Submit
                </button>
            </form>
        </section>
    );
}

export default ContactMe;
