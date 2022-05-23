import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const distribution = [{ name: 'DC Tangerang' }, { name: 'DC Cikarang' }];

const DetailSections = ({ data }) => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const employeeForm = watch('employee');
  const distributionForm = watch('distribution');

  const onSubmit = (data) => {
    console.log(data, 'data dari on submit');
  };

  const [isName, setIsName] = useState(false);
  useEffect(() => {
    employeeForm ? setIsName(true) : setIsName(false);
    console.log(errors);
  }, [watch]);

  return (
    <section className="flex p-3 bg-blue-300 h-screen">
      <h2 className="w-1/4">Detail</h2>
      <form className="w-full">
        <label className="block">
          Name <span className="text-red-500">*</span>
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Name"
          {...register('employee', { required: true })}
        >
          {data.map((employee) => {
            return (
              <option key={employee.id} value={employee.id}>
                {employee.employee_name}
              </option>
            );
          })}
        </select>
        {errors.firstName?.type === 'required' && 'First name is required'}

        <label className="block">
          Distribution Center <span className="text-red-500">*</span>
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Distribution"
          {...register('distribution', { required: true })}
        >
          {!isName ? (
            <option>No Data Available</option>
          ) : (
            distribution.map((store) => {
              return <option value={store.name}>{store.name}</option>;
            })
          )}
        </select>

        <div>
          <label className="block">Payment Type</label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Distribution"
            {...register('distribution', { required: true })}
          >
            {distribution.map((store) => {
              return <option value={store.name}>{store.name}</option>;
            })}
          </select>
        </div>

        <hr />
        <button className="rounded-lg px-4 py-2">Cancel</button>
        <button className="rounded-lg px-4 py-2 ml-2 bg-slate-500" onClick={handleSubmit(onSubmit)}>
          Confirm
        </button>
      </form>
    </section>
  );
};

export default DetailSections;
