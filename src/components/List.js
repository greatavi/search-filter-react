import React, { Component } from 'react';
import '../List.css';

class List extends Component {
    constructor(props){
        super(props);
        this.state = this.props.state;
    }
    componentWillReceiveProps(nextProps){
        this.setState(nextProps.state);
    }
    render() {
        const {data} = this.state;
        const namesList = data.map(name => {
            return (
                <li key = {name.id}>{name.name}</li>
            )
        });
        return (
            <ul className = "list">
                {namesList}
            </ul>
        );
    }
}

export default List;
