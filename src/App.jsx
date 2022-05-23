import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import DetailSections from './components/DetailSections';

const App = () => {
  // const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://dummy.restapiexample.com/api/v1/employees')
      .then((res) => setData(res.data.data));
  }, []);

  const data = [
    { id: 1, employee_name: 'dodi' },
    { id: 2, employee_name: 'bagus' },
    { id: 3, employee_name: 'olil' },
  ];

  return (
    <div className="bg-blue-200 p-3">
      <h1>Create Order</h1>
      <DetailSections data={data} />
    </div>
  );
};

export default App;
