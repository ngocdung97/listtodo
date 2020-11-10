import React, { Component } from 'react';

class Item_To_Do extends Component {

    onClick=()=>{
        alert(this.props.value.id);
    }

    render() {
        return (
            <li onClick={this.onClick}>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="checkbox" type="checkbox" />
                        {this.props.value.name} <i className="input-helper" /></label> </div>
                <i className="remove " />x
            </li>
        );
    }
}

export default Item_To_Do;