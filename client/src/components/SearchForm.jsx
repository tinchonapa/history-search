import React from 'react';


class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      element: 'Search'
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    // console.log('Props at search ', props)
  }
  /*update() {
    this.props.onUpdate(document.getElementsByName('keyword').value)
  }*/

  onInputChange(event){
    console.log('InputChange ', event.target.value)
    const element = event.target.value;
    this.setState(state => ({
      element: element
    }))
  }

  clearForm() {
    this.setState({
      element:'Search'
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    const newElement = this.state;
    console.log('On Submit this is event ', event)
    console.log('On Submit this is state ', newElement)
    this.props.onUpdate(newElement);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' name='name' onChange={this.onInputChange} value={this.state.element} />
          <button>Search</button>
        </form>
      </div>
    )
  }
}

export default SearchForm;