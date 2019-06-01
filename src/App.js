import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Counters from './components/counters';
class App extends React.Component {
  state = { 
    counters : [
        {id : 1, value : 0},
        {id : 2, value : 0},
        {id : 3, value : 0},
        {id : 4, value : 0},
        {id : 5, value : 0},
    ]
 }
//  constructor(props){
//    super(props);
//    console.log('App - Constructor', this.props);
   
//  }

//  componentDidMount(){
//    //Ajax Call
//    console.log('App - Mounted');
//  }
 handleIncrement = counter => {
    const counters = [...this.state.counters];

    const index = counters.indexOf(counter)
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters})
 }
 
 handleDelete = (counterId) => {
     const counters = this.state.counters.filter(c => c.id !== counterId);

     this.setState({
         counters
     })
 }

 handleReset = () => {
     const counters = this.state.counters.map(counter => {
         counter.value = 0;
         return counter;
     })

     this.setState({
         counters
     })
 }
  render(){
    console.log('App - Rendered')
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(counter => counter.value > 0).length}/>
        <Counters
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }
}

export default App;
