import React from 'react';

class Row extends React.Component {

    render() {
        const item = this.props.item;

        return (
            <tr>
                <td key="col0">{item.name}</td>
                <td key="col1">{item.menuCategory}</td>
                <td key="col2">{item.salesCategory}</td>
                <td key="col3">{item.menuPage}</td>
                <td key="col4">{item.salesRevenue}</td>
                <td key="col5">{item.quantitySold}</td>
            </tr>
        )
    }
}

export default Row;