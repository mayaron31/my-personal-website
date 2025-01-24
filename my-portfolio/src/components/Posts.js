import React from "react";

function Posts() {
    const linkedInProfile = "https://www.linkedin.com/in/maya-ron";
    const linkedInPost = "https://www.linkedin.com/feed/update/your-latest-post-id";

    return (
        <section className="posts-section">
            <h2 className="section-title">Latest Post</h2>
            <div className="posts-container">
                {/* Left side: Post Image */}
                <div className="post-image">
                    <img
                        src="https://via.placeholder.com/400" // Replace with a dynamic image from LinkedIn's API
                        alt="Latest LinkedIn Post"
                    />
                </div>

                {/* Right side: Post Content */}
                <div className="post-content">
                    <h3 className="post-title">A Sneak Peek into My Latest Update</h3>
                    <p className="post-excerpt">
                        Check out my latest thoughts on [topic of the post]! I’ve shared
                        insights about [brief details of your post]. Click below to read
                        more.
                    </p>
                    <div className="post-links">
                        <a
                            href={linkedInPost}
                            className="post-link-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read Full Post
                        </a>
                        <a
                            href={linkedInProfile}
                            className="post-link-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit My LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Posts;
