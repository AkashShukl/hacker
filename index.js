import React from 'react';
import './styles.css';
import search from '../../assets/Icons/Icon feather-search.png';

class Header extends React.Component {


    render()
    {
        return(
            <div id= "header-parent">
                <div id="search-cont">
                    <img src = {search} id ="sicon" alt=" "/>
                    <input type ="text" placeholder="Search your favourite recipe.." />
                </div>
                
                <div className = "heading">
                    <label id ="heading-text" >Pizza & Noodle</label>
                </div>
            </div>
        );
    }
}

export default  Header;