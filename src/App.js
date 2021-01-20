import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '이황',
  'birth' : '990662',
  'gender' : '남자',
  'job' : 'part-time'
  },
  {
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '이진백',
  'birth' : '990662',
  'gender' : '여자',
  'job' : 'back-end'
  },
  {
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '이색기',
  'birth' : '002101',
  'gender' : '중성',
  'job' : 'server'
  }
]

class App extends Component{
  render(){
    return (
      <div>
        {
          customers.map(c =>{
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birth={c.birth}
                gender={c.gender}
              />  
              );
            })
          }
      </div>
    );
  }
}

export default App;
