import React, { Component } from 'react';
import Count from './Arithmetic'
import Greeting from './HelloWorld';

export default class caramba extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_number: Math.floor(Math.random() * 100),
      second_number: Math.floor(Math.random() * 100)
    }
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-12 h3">
          <Greeting />
        </div>
        <div className="card">
          <div className="card-header text-center">
            Математические вычисления
          </div>
          <div className="card-body text-center">
            <div className="row">
              <div className="col">
                Первое число {this.state.first_number}
              </div>
              <div className="col">
                Второе число {this.state.second_number}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12 alert alert-info text-center">
                Результаты вычислений
              </div>
              <div className="col">
                Сложение {Count.summ(this.state.first_number, this.state.second_number)}
              </div>
              <div className="col">
                Вычитание {Count.subtraction(this.state.first_number, this.state.second_number)}
              </div>
              <div className="col">
                Умножение {Count.multiply(this.state.first_number, this.state.second_number)}
              </div>
              <div className="col">
                Деление {Count.division(this.state.first_number, this.state.second_number)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
