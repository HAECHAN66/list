import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import PostDetail from './pages/PostDetail';
import "./fonts.css";

const Router = () => {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element = {<Main/>} />
            <Route path="/detail/:postId" element = {<PostDetail/>} />
        </Routes>
    </BrowserRouter>)
};

export default Router;