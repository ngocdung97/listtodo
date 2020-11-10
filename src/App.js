import React, { Component } from 'react';
import { DB } from './database'
import Item_To_Do from './Item_To_Do';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null
    }
  }

  componentWillMount() {
    DB.on('value', (value) => {
      const lst = [];
      value.forEach(item => {
        lst.push(item.val())
      })
      this.setState({
        list: lst
      })
    })



  }
  render_item = () => {
    if (this.state.list)
      return (
        this.state.list.map((item) => {
          return (
            <Item_To_Do value={item}></Item_To_Do>
          )
        })
      )
  }
  onClick = () => {
    const date = new Date;
    const item = {
      id: date.getSeconds() + date.getMinutes(),
      name: this.state.name,
      STT: 1
    }
    DB.push(item, () => {
      DB.on('value', (value) => {
        const lst = [];
        value.forEach(item => {
          lst.push(item.val())
        })
        this.setState({
          list: lst
        })
      })
    });
  }
  onChange = (ev) => {
    this.setState({
      name: ev.target.value
    })
  }
  render() {
    return (
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title">Awesome Todo list</h4>
                  <div className="add-items d-flex">
                    <input onChange={this.onChange} type="text" className="form-control todo-list-input" placeholder="What do you need to do today?" />
                    <button onClick={this.onClick} className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button> </div>
                  <div className="list-wrapper">
                    <ul className="d-flex flex-column-reverse todo-list">
                      {this.render_item()}

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;