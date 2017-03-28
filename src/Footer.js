import React from 'react';

var totalSales = []; 
var totalUnits = [];
class Footer extends React.Component {
	constructor() {
		super();
		this.trackValues = this.trackValues.bind(this);
	}
	trackValues() {
		const items = this.props.data;
		const salesArray = [];
		const quantityArray = [];
		items.map(function(i) {
			const salesRevenue = i.salesRevenue;
			salesArray.push(salesRevenue);
			const quantitySold = i.quantitySold;
			quantityArray.push(quantitySold);
		});
		
		totalSales = salesArray.reduce((a,b) => a + b, 0);
		totalUnits = quantityArray.reduce((a,b) => a + b, 0);
	}
	render() {
		this.trackValues();
		return (
			<tfoot>
				<tr>
					<td><strong>Totals</strong></td>
					<td></td>
					<td></td>
					<td></td>
					<td><strong>{totalSales}</strong></td>
					<td><strong>{totalUnits}</strong></td>
				</tr>
			</tfoot>
		)
	}
}

export default Footer;