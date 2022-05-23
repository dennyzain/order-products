import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://dummy.restapiexample.com/api/v1/employees')
      .then((res) => setData(res.data.data));
  }, []);

  return (
    <div className="bg-blue-200 p-3">
      <h1>Create Order</h1>
      <section className="flex p-3 bg-blue-300 h-screen">
        <h2 className="w-1/4">Detail</h2>
        <form className="w-full">
          <label className="block">
            Name <span className="text-red-500">*</span>
          </label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            {data.map((employee) => {
              console.log(employee);
              return <option value={employee.id}>{employee.employee_name}</option>;
            })}
          </select>
        </form>
      </section>
    </div>
  );
};

export default App;
