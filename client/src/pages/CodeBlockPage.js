import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { Navigate } from 'react-router-dom'; // Import Navigate for redirection

const CodeBlockPage = () => {
    const { id } = useParams();
    const [role, setRole] = useState('student');
    const [code, setCode] = useState('');
    const [socket, setSocket] = useState(null);
    const [redirectToLobby, setRedirectToLobby] = useState(false);

    useEffect(() => {
        // Simulate role setting (Tom is the mentor)
        if (role === 'student') {
            setSocket(io('http://localhost:5001'));
        }
        return () => {
            if (socket) {
                socket.disconnect();
            }
        };
    }, [role]);

    useEffect(() => {
        if (socket) {
            socket.on('code-update', newCode => {
                setCode(newCode);
            });
        }
        setCode('Initial code template here...');
    }, [socket]);

    const handleCodeChange = (newCode) => {
        setCode(newCode);
        if (socket) {
            socket.emit('code-change', newCode);
        }
        if (newCode === 'solution code') {
            alert('Congratulations! You solved it!');
        }
    };

    const handleLeaveRoom = () => {
        setRedirectToLobby(true);
        setCode('');
    };

    if (redirectToLobby) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <h1>Code Block {id}</h1>
            <p>Role: {role}</p>
            <textarea value={code} onChange={(e) => handleCodeChange(e.target.value)} />
            <button onClick={handleLeaveRoom}>Leave Room</button>
        </div>
    );
};

export default CodeBlockPage;
