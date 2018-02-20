import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import List from './List.js';
import data from '../data.js';
import SearchBar from './SearchBar.js';
class SearchBody extends Component {
    render(){

        return (
            <Grid className = "Search-list">
                <div className = "input-body">
                    <SearchBar />
                    <List data = {data}/>
                </div>

            </Grid>
        );
    }
}

export default SearchBody;
