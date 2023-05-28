import React, { useEffect, useState } from 'react';
// useState 변수
import { styled } from "styled-components";
import PostListItem from './PostListItem';
import axios from 'axios';
import { Link } from 'react-router-dom';

type PLPropsType ={
    children: React.ReactNode;
}

const PostList = ({children}: PLPropsType) => {
    return (<Container>
                <Columnbar>
            <Number>
                <p>번호</p>
            </Number>
            <Column>
            <p>제목</p>
            </Column>
        </Columnbar>
    {children}
    </Container>

    );
};
 
const Container = styled.ul`
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
`


const Columnbar = styled.div`
display: flex;
align-item: center;
justify-content: center;

background-color : #f8f8ff;
border : 1px solid black;
border-right: none;
border-left: none;

width: 100%;
height : 50px;
`;

const Column = styled.div`
width : 100%;
height : 50px;
text-align: center;
`;

const Number = styled.div`
    width: 80px;
    height: 50px;
    text-align: center;
`;


export default PostList;