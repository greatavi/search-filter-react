import React, { Component } from 'react';
import '../SearchBar.css';

class SearchBar extends Component {
    searchFor(){
        const inputValue = this.refs.inputBox.value;
        this.props.filterList(inputValue);
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

