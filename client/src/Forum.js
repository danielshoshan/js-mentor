import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Forum = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

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

    const handlePostSubmit = async () => {
        try {
            await axios.post('/api/posts', { content: newPost });
            setNewPost('');
            fetchPosts();
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };

    return (
        <div>
            <h1>Forum</h1>
            <div>
                <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Write your post here..."
                ></textarea>
                <button onClick={handlePostSubmit}>Submit Post</button>
            </div>
            <div>
                <h2>Posts</h2>
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
