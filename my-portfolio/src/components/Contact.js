import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="contact--section">
            <h2>Contact Me</h2>
            <p>Feel free to reach out with any questions or opportunities!</p>
            <form className="contact--form--container">
                <label htmlFor="name">
                    <span>Full Name</span>
                    <input type="text" id="name" placeholder="Enter your name" required />
                </label>
                <label htmlFor="email">
                    <span>Email Address</span>
                    <input type="email" id="email" placeholder="Enter your email" required />
                </label>
                <label htmlFor="subject">
                    <span>Subject</span>
                    <input type="text" id="subject" placeholder="Subject of your message" required />
                </label>
                <label htmlFor="message">
                    <span>Message</span>
                    <textarea id="message" rows="5" placeholder="Type your message..." required></textarea>
                </label>
                <button type="submit" className="btn">
                    Send Message
                </button>
            </form>
        </section>
    );
}
