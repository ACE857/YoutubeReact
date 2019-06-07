import React from 'react';

class SearchBar extends React.Component {

  constructor (props){
  super(props);

  this.state = {
        term: ''
    };

}

    render() {
      return (
        <div className='search-bar'>
        <input
        value = {this.state.term}
        type='text' onChange={event => this.onInputChange(event.target.value)}/>
        <br />
        Value of the search: {this.state.term}
        </div>
      );
    }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar
