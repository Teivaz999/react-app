import React from "react";
import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display:flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color:${props => props.colored ? 'red' : 'yellow'};
        :hover {
            color:orange;
            cursor:pointer;
        }
    }
    h2 {
    font-size: 1.2rem;
    color: grey;
    }

`

const AppHeader = () => {
    return (
        <Header colored as="a">
            <h1>Эдгар Дёмин</h1>
            <h2>7 записей, из них просмотрено 0</h2>
        </Header>
    )
}

export default AppHeader;