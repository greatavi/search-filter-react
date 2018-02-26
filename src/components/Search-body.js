import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import List from './List.js';
import SearchBar from './SearchBar.js';

class SearchBody extends Component {
    constructor(props){
        super(props)
        this.state = {
            values : this.props
        };
    }
    filterList = (typedData)=>{
        var filteredList = [];
        var wrap = {};
        for(let i=0; i<this.props.data.length; i++){
            if(this.props.data[i].name.toLowerCase().search(typedData) !== -1){
                filteredList.push(this.props.data[i]);
            }
        }
        wrap.data = filteredList;
        this.setState({values : wrap});

    };
    render(){

        return (
            <Grid className = "search-list">
                <div className = "input-body">
                    <SearchBar filterList = {this.filterList}/>
                    <List state = {this.state.values}/>
                </div>
            </Grid>
        );
    }
}

export default SearchBody;
