import React, { Component } from 'react';

class item extends Component {
    render() {
        return (
            <li>
            <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" /> For what reason would it be advisable. <i className="input-helper" /></label> </div> <i className="remove mdi mdi-close-circle-outline" />
          </li>
        );
    }
}

export default item;