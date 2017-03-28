import React from 'react';

class TableHeader extends React.Component {

	render() {
		const header = this.props.headers;
		const key = Object.keys(header);
		const col = 'col';
		const columnName = header.map((i, key) => 
			<th name={i} key={col + key}><a href="#" key={col + key} onClick={(e) => this.props.sortBy(e)}>{i}</a></th>
		);
		return (
			<tr >
				{columnName}
			</tr>
		)
	}
}

export default TableHeader;