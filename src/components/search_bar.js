import React,{ Component } from 'react';

class SearchBar extends Component {

constructor(props) {
	super(props);

	this.state = { term: ''};
}	

  render() {
  	return (
  		<div>
  			<div>
   			<div className="input-group col-md-7 search-bar">
	  			<input className="form-control"
	  			value={this.state.term}
	  			onChange={event => this.setState({ term: event.target.value })} />
	  			<span className="input-group-btn">
        		<button className="btn btn-secondary" type="button" onClick={ event => this.onInputChange(this.state.term)} >Go!</button>
     			</span>
    		</div>
 		 	</div>
  		</div>
  	);
  }

  onInputChange(term){
  	this.setState({term});
  	this.props.onSearchTermChange(term);

  }

}

export default SearchBar;