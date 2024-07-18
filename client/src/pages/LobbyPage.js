
import React from 'react';
import { Link } from 'react-router-dom';

const LobbyPage = () => {
    return (
        <div>
            <h1>Choose code block</h1>
            <ul>
                <li><Link to="/codeblock/1">Array Methods</Link></li>
                <li><Link to="/codeblock/2">Closure Scope</Link></li>
                <li><Link to="/codeblock/3">Event Delegation</Link></li>
                <li><Link to="/codeblock/4">Prototype Inheritance</Link></li>
            </ul>
            <Link to="/forum">Go to Forum</Link>
        </div>
    );
};

export default LobbyPage;



