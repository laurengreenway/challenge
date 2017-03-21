import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from './DataTable';
import './index.css';

ReactDOM.render(
  <div>
    <h1>Sales</h1>
    <DataTable data={data} />
  </div>,
  document.getElementById('root')
);
