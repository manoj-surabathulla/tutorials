/* eslint-disable react/prop-types */

const ManagementCreate = ({ formSubmit, changeHandler, values }) => {
  return (
    <div className="flex justify-center h-screen items-center p-3">
      <div className="border border-purple-600 rounded p-6 w-full sm:w-1/2 shadow-lg">
        <h1 className="font-sans text-xl text-purple-800 font-bold">
          Add New Employee
        </h1>
        <form className="" onSubmit={formSubmit}>
          <div className="flex flex-col py-2">
            <label className="py-3 font-sans font-semibold text-base">
              Name:
            </label>
            <input
              className="border p-3"
              type="text"
              placeholder="Employee Name"
              name="employee_name"
              value={values.name}
              onChange={changeHandler}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="py-3 font-sans font-semibold text-base">
              Email:
            </label>
            <input
              className="border p-3"
              type="email"
              placeholder="Employee Email"
              name="employee_email"
              value={values?.employee_email}
              onChange={changeHandler}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="py-3 font-sans font-semibold text-base">
              Contact No:
            </label>
            <input
              className="border p-3"
              type="text"
              placeholder="Employee Contact No"
              onChange={changeHandler}
              name="employee_contact_no"
              value={values?.name}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="py-3 font-sans font-semibold text-base">
              Employee ID:
            </label>
            <input
              className="border p-3"
              type="text"
              placeholder="Employee ID"
              name="employee_id"
              value={values?.name}
              onChange={changeHandler}
            />
          </div>
          <button
            className="border bg-purple-600 text-white text-base font-sans w-1/2 p-2 my-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManagementCreate;
