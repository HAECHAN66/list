import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import PostList from '../component/PostList';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PostListItem from '../component/PostListItem';
import Header from '../component/laout/header';

type PostItemType = {
    userId: number;
    id: number;
    title: string;
    body: string;
}



const Main = () => {
    
    // geter, 지정
    const [postList, setPostList] = useState<Array<PostItemType>>([]);
    useEffect(() => {
        const request = axios({
            // 요소~
            method: "get",
            url: "https://jsonplaceholder.typicode.com/posts",
        }).then((res)=>{
            setPostList(res.data);

        });
    })

    return (<Container>
        <Header />
        <PostList>
        {postList.map((e) => {
            
            return(
                // a 태그와 같음
            <Link style={{ width: "100%", textDecoration: "none", color: "black"}} key = {e.id}to={`/detail/${e.id}`}>
                <PostListItem key={e.id} userID={e.userId} id={e.id} title={e.title}/>
            </Link>
            );
        })}
        </PostList>
    </Container>
    );
};

// Container은 전체, main은 html 태그임!
const Container = styled.main`
    width : 80%;
    height : 500px;
    margin : 0 auto;
    font-family: "Pretendard-Regular", sans-serif;
`;


export default Main;