import React, { Component } from 'react';
import './DataTable.css';
import TableHeader from './TableHeader'
import Footer from './Footer';
import Body from './Body';
// import Search from './Search';

var tableData = [];
var haveFiltered = false;
var query = '';

class DataTable extends Component {
	constructor() {
		super();
		this.searchQuery = this.searchQuery.bind(this);
		this.filterData = this.filterData.bind(this);
		this.sortBy = this.sortBy.bind(this);
		// get initial state
		this.state = {
			query: '',
			sortBy: '',
		}
	}

	sortBy(e) {
		e.preventDefault();
		const selection = e.target.innerHTML;
		this.setState({sortBy: selection});
		const props = this.props.data;
		props.sort(function(a, b) {
		    return (a[selection] < b[selection]) ? -1 : (a[selection] > b[selection]) ? 1 : 0;
		});
	}

	filterData(filter) {
		return filter.name.indexOf(query) >= 0;
	}

	searchQuery(e) {
		e.preventDefault();
		query = this.query.value;
		// update state
		this.setState({query : query});
		// props to be passed to child component
		tableData = [];

		const props = this.props.data;
        tableData = props.filter(this.filterData);
        // if there is a search query
        if(query) {
	        haveFiltered = true;
	    } else {
	    	haveFiltered = false;
	    }
	}

	// <Search search={this.searchQuery}/>
	// <div className="App-logo App-Header">
	// </div>

  render() {
  	const headers = ['name', 'menuCategory', 'salesCategory', 'menuPage', 'salesRevenue', 'quantitySold'];

  	if(!haveFiltered) {
  		tableData = this.props.data;
  	}

    return (
      <div>
      	<div className="searchBar">
	      <input ref={(text) => this.query = text} type="search" placeholder="Search Inventory" id="search" onChange={(e) => this.searchQuery(e)}/>
      	</div>
	    <table id="salesData">
	    	<thead>
	    		<TableHeader headers={headers} sortBy={this.sortBy}/>
	          	</thead>
	    		<Body data={tableData} query={this.state.query}/>
	    		<Footer data={tableData}/>
	      </table>
      </div>
    );
  }
}

export default DataTable;
