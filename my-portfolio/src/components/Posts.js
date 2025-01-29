import React, { useEffect, useState } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load environment variables
    const ACCESS_TOKEN = process.env.REACT_APP_LINKEDIN_ACCESS_TOKEN;
    const PROFILE_ID = process.env.REACT_APP_LINKEDIN_PROFILE_ID;
    const linkedInProfile = "https://www.linkedin.com/in/maya-ron";

    // CORS Proxy URL (Run your proxy server on port 8080)
    const PROXY_URL = "http://localhost:8080/";

    useEffect(() => {
        if (!ACCESS_TOKEN || !PROFILE_ID) {
            console.error("Missing LinkedIn API credentials. Check your .env file.");
            setLoading(false);
            return;
        }

        const fetchPosts = async () => {
            try {
                const API_URL = `https://api.linkedin.com/rest/posts?q=author&author=urn:li:person:${PROFILE_ID}`;
                const response = await fetch(PROXY_URL + API_URL, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${ACCESS_TOKEN}`,
                        "Content-Type": "application/json",
                        "X-Restli-Protocol-Version": "2.0.0",
                        "LinkedIn-Version": "202401",
                    },
                });

                const data = await response.json();
                console.log("LinkedIn API Response:", data);

                if (data.elements) {
                    setPosts(data.elements);
                } else {
                    setPosts([]);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching LinkedIn posts:", error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, [ACCESS_TOKEN, PROFILE_ID]); // Dependencies for useEffect

    return (
        <section className="posts-section">
            <h2 className="section-title">Latest Posts</h2>
            {loading ? (
                <p>Loading posts...</p>
            ) : posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                <div className="posts-container">
                    {posts.map((post, index) => (
                        <div key={index} className="post-item">
                            {/* Display Image if available */}
                            {post.content?.contentEntities?.[0]?.thumbnails?.[0]?.url && (
                                <img
                                    src={post.content.contentEntities[0].thumbnails[0].url}
                                    alt="LinkedIn Post"
                                    className="post-image"
                                />
                            )}
                            {/* Display Post Content */}
                            <div className="post-content">
                                <h3 className="post-title">LinkedIn Post</h3>
                                <p className="post-excerpt">
                                    {post.content?.description || "Click below to see full post."}
                                </p>
                                <a
                                    href={`https://www.linkedin.com/feed/update/${post.id}`}
                                    className="post-link-button"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read Full Post
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="post-links">
                <a href={linkedInProfile} className="post-link-button" target="_blank" rel="noopener noreferrer">
                    Visit My LinkedIn
                </a>
            </div>
        </section>
    );
}

export default Posts;
