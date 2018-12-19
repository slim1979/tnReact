import React, { Component } from 'react';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], title: '', cost: '', total: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit}>
          <div className="card-header">
            <div className="row">
              <div className="col h3">
                <div>Сумма: {this.state.total} <span className="fa fa-ruble-sign"></span></div>
              </div>
              <div className="col h3 text-right font-weight-bold">
                Чек
              </div>
            </div>
          </div>
          <div className="card-body">
            <ul>
              {this.state.items.length < 1 ? 'Нет добавленных товаров' : ''}
              {this.state.items.map(item => (
                <li key={item.id}>{item.title} =={item.cost} р.</li>
              ))}
            </ul>
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col d-flex">
                <label htmlFor="new-item" className="alert-link align-self-center mb-0 pr-2 text-uppercase">
                  Добавление нового товара
                </label>
                <input
                  id="new-item"
                  placeholder="Название товара"
                  className="form-control float-left form-control mr-2 w-25"
                  onChange={this.handleTitle}
                  value={this.state.title}
                />
                <input
                  id="new-cost"
                  placeholder="Стоимость товара"
                  className="form-control float-left form-control mr-2 w-25"
                  type="number"
                  onChange={this.handleChange}
                  value={this.state.cost}
                />

                <button className="btn btn-outline-success alert-success">
                  Добавить позицию #{this.state.items.length + 1}
                </button>

              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ cost: e.target.value });
  }

  handleTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.title.length || !this.state.cost.length) {
      return;
    }

    const newItem = {
      title: this.state.title,
      cost: this.state.cost,
      id: Date.now()
    };

    this.setState(state => ({
      items: state.items.concat(newItem),
      title: '',
      cost: '',
      total: state.total * 1 + newItem.cost * 1
    }));
  };
};
