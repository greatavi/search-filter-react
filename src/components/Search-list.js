import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            people : [
                {
                    id : 1,
                    First : "Avinash",
                    Second : "Machavarapu",
                    Age : "24"
                },
                {
                    id : 2,
                    First : "Anudeep",
                    Second : "Machavarapu",
                    Age : "28"
                },
                {
                    id : 3,
                    First : "Karthika",
                    Second : "Machavarapu",
                    Age : "28"
                }
            ]
        };
        this.searchFor = this.searchFor.bind(this);
    }
    searchFor(event){

    }
    render(){
        return (
            <Grid className = "Search-list">
                <div className = "input-body">
                    <form>
                        <input type = "text" onChange = {this.searchFor}></input>
                    </form>
                </div>
                {
                    this.state.people.map(function(person){
                        return(
                                <ul key = { person.id }>
                                   <li> { person.First }</li>
                                </ul>

                        )
                    })
                }
            </Grid>
        );
    }
}

export default List;
