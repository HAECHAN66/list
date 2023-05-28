import React from 'react';
import {styled} from 'styled-components';

// 넘겨준다 !
type ItemPostype = {
    id: number;
    userID: number;
    title: string;
}
const PostListItem = ({id, userID, title} : ItemPostype) => {
    return (
        <Container>
            <UserID><UserIdText>{userID}</UserIdText></UserID>
            <Title title={title}>{title}</Title>
        </Container>
    );
};

const Container = styled.li`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    width: 100%;
    height : 40px;
    border-bottom : 1px solid #a9a9a9;
`;

const UserID = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 40px;
    text-align: center;
    line-height: 40px;
`;

const UserIdText = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid gray;
    border-radius: 20px;
    line-height: 20px;
    font-size: .75rem;
    text-align: center;
`;

const Title = styled.div`
    width: 100%;
    height: 40px;
    overflow: hidden;
    line-height: 40px;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export default PostListItem;