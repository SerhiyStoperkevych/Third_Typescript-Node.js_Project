import React from 'react';
import './App.css';
import TodoItems from './components/TodoItems';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/todos" element={<TodoItems />} />
            </Routes>
        </Router>
    );
};

export default App;
