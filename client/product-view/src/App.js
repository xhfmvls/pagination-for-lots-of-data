import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <br/>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

function App() {
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    getData();

  }, []);

  const getData = async () => {
    try {
      const response = await Axios.get(`http://localhost:8000/api/product?limit=${limit}&page=${page}`);
      let list = [];
      response.data.data.forEach((element) => {
        list.push(element);
      });
      setProducts(list);
    } catch (error) {
      console.log(error);
    }
  }

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event) => {
    const result = event.target.value.replace(/\D/g, '');

    setPage(result);
  }

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <h1>Product</h1>
      <h2>Product List</h2>
      <Dropdown
        label="Items (Products) per Page?"
        options={[
          { label: '10', value: 10 },
          { label: '20', value: 20 },
          { label: '50', value: 50 },
          { label: '100', value: 100 },
        ]}
        value={limit}
        onChange={handleLimitChange}
      />

      <br/><br/>
      <label>
        Page<br/>
        <input
          type="text"
          placeholder="page"
          value={page}
          onChange={handlePageChange}
        />
      </label>
      <br/>
      <button onClick={getData}>Click to reload!</button>

      <table>
        <tr>
          <th>Porduct Code</th>
          <th>Product Name</th>
          <th>Sub Category</th>
          <th>Brand</th>
          <th>Retail Price</th>
          <th>Status</th>
        </tr>
        {products.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.product_id}</td>
              <td>{val.product_name}</td>
              <td>{val.category}</td>
              <td>{val.brand_name}</td>
              <td>{val.retail_price}</td>
              <td>{val.active_status == true ? "Active" : "Non-Active"}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}
  
export default App;