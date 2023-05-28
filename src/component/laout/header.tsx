import React from 'react';
import {styled} from 'styled-components';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <Container>
        <Link to = "/"
        style={{ width: "100%", textDecoration: "none", color: "black"}}>
        게시판</Link>
        </Container>
    );
};
         
const Container = styled.h1`
    text-align: center;
    margin: 120px;
    color: balck;
`;

export default Header;