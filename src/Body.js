import React from 'react';
import Row from './Row';

class Body extends React.Component {

// refactor to stateless functional component
    render() {
        return (
            <tbody>
                {Object
                    .keys(this.props.data)
                    .map(key => <Row key={key} item={this.props.data[key]}/>
                )}
            </tbody>
        )
    }
}

export default Body;