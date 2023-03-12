import React from "react";
import AppHeader from '../app-header';
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

/* const StyledAppBlock = styled(AppBlock)`
    background-color:grey;
`; */
    


const data = [
    {label:'Go to learn React', important:true, id:'fgf'},
    {label:'That is so god', important:false, id:'gfffh'},
    {label:'I need a break...', important:false, id:'iuuy'}
]

const App = () => {
    return (
    <AppBlock>
        <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList posts={data}/>
        <PostAddForm/> 
    </AppBlock>
    )
};

export default App;