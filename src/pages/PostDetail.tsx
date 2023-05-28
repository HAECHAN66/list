import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import { url } from 'inspector';
import {styled} from 'styled-components';
import Header from '../component/laout/header';


type PostItemType = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// 받아오는 과정
const PostDetail = () => {
    const params = useParams();
    const [data, setData] = useState<PostItemType>();
    const [loading, setLoading] = useState(false);
    
    useEffect (() => {
        setLoading(true);
        const  request = axios({
            method: "get",
            url: `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
        }).then((res)=>{
            setData(res.data);
            setLoading(false);
        })
        .catch(() => {
            console.log("error");
        });
    },[params.postId]);

    if (loading) return <h1>잠시만요...</h1>;
    return (
        <Detail>
        <Header/>
            <Column>
                {data?.title}
            </Column>
            <Box>
                {data?.body}
            </Box>
        </Detail>
    );
};

const Detail = styled.div`
width : 80%;
height : 500px;
margin : 0 auto;
font-family: "Pretendard-Regular", sans-serif;

`;

// flex = 가운데정렬 같은 너! 낌!
const Column = styled.div`
background-color : #f8f8ff;
border : 1px solid black;

width: 100%;
height : 50px;
line-height : 50px;
font-size: 1.2rem;
`;

const Box = styled.div`
width: 100%;
height : 300px;
border : 1px solid black;
border-top : none;
padding-top : 20px;
`;


export default PostDetail;