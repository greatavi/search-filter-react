import React, { Component } from 'react';
import data from '../data.js';
class SearchBar extends Component {
    searchFor(){
        const inputValue = this.refs.inputBox.value;
        console.log(inputValue);
    }
    render(){
        return (
            <form>
                <input type = "text" ref = "inputBox" onChange = {this.searchFor.bind(this)}></input>
            </form>
        );
    }
}

export default SearchBar;

