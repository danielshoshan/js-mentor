
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Forum = () => {
    const [posts, setPosts] = useState([]);
    const [content, setContent] = useState('');

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('/api/posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/api/posts', { content });
            setContent('');
            fetchPosts();
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };

    return (
        <div>
            <h1>Forum</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your post here..."
                />
                <button type="submit">Submit</button>
            </form>
            <div>
                {posts.map((post) => (
                    <div key={post._id}>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forum;
