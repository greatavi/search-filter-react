import React, { Component } from 'react';
class List extends Component {
    constructor(props){
        super(props)
        {
            this.state = {values : this.props};
        }
    }
    render() {
        const {data} = this.state.values;
        console.log(data);
        const namesList = data.map(name => {
            return (
                <li key = {name.id}>{name.name}</li>
            )
        });

        return (
            <ul>
                {namesList}
            </ul>
        );


    }
}

export default List;
