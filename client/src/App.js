
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LobbyPage from './pages/LobbyPage';
import CodeBlockPage from './pages/CodeBlockPage';
import Forum from './pages/Forum';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LobbyPage />} />
                <Route path="/codeblock/:id" element={<CodeBlockPage />} />
                <Route path="/forum" element={<Forum />} />
            </Routes>
        </Router>
    );
};

export default App;




