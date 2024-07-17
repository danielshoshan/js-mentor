
import React from 'react';
import { Link } from 'react-router-dom';

const LobbyPage = () => {
    return (
        <div>
            <h1>Choose code block</h1>
            <ul>
                <li><Link to="/codeblock/1">Async Case</Link></li>
                <li><Link to="/codeblock/2">Promise Example</Link></li>
                <li><Link to="/codeblock/3">Callback Hell</Link></li>
                <li><Link to="/codeblock/4">Event Loop</Link></li>
            </ul>
            <Link to="/forum">Go to Forum</Link>
        </div>
    );
};

export default LobbyPage;



