import React from 'react';
import SearchForm from './SearchForm.jsx';
import EventList from './EventList.jsx';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      historicalEvents: [],
      element: 'Search'
    }

    this.getEvents = this.getEvents.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentDidMount() {
    this.getEvents();
    /*this.setState({
      events: db
    })*/
  }
/*
  componentDidUpdate(prevProps, prevState) {
    console.log('This is prev ',prevState.element);
    if ( this.state.element !== prevState.element ){
      console.log('At DidUpdate ', this.state.element);
      this.onUpdate(this.state.element);
    }
  }*/

  getEvents(){
    fetch(`http://localhost:3000/events`)//?_page=1
    .then((res) => {
      console.log('this is res ', res);
      return res.json()
    })
    .then((data) => {
      console.log('this is data', data[0])
      this.setState({
        historicalEvents: data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  onUpdate(value){
    console.log('This is the element to send', value.element)
    console.log('This is the typeof element to send', typeof value)
    var keyword = value.element;
    // console.log('This is the element to send', element)
    
    fetch(`http://localhost:3000/events?q=${keyword}`) //_page=1
    .then((res) => {
      console.log('this is res ', res);
      return res.json()
    })
    .then((data) => {
      console.log('this is data', data[0])
      this.setState({
        historicalEvents: data
      })
    })
    .catch((error) => {
      console.log(error)
    })
    
  }
  


  render() {
    return (
      <div className="head">
        <h1>Historical Events</h1>
        <SearchForm input={this.state.element} onUpdate={this.onUpdate} />
        <EventList
          historicalEvents={this.state.historicalEvents}
        />
      </div>
    )
  }
}

export default App;