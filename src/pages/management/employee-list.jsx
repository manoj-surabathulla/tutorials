/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUsers } from "../../features/userSlice";
import { useEffect } from "react";

const EmployeeList = () => {
  const { userData, loading } = useSelector((state) => state?.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addBtn = () => {
    navigate("/management");
  };
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (loading) return <p className="">Loading...</p>;

  return (
    <div className="container my-0 mx-auto">
      <div>
        <h1 className="text-xl">Flyer's Employees list</h1>
        <button
          onClick={addBtn}
          className="border bg-purple-600 text-white capitalize p-2 rounded"
        >
          create +
        </button>
      </div>
      <div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border text-left p-2">ID</th>
              <th className="border text-left p-2">Name</th>
              <th className="border text-left p-2">Email</th>
              <th className="border text-left p-2">Contact No</th>
              <th className="border text-left p-2">Employee ID</th>
              <th className="border text-left p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((user, index) => {
              const { name, email, contactNumber, EmployeeID } = user;
              return (
                <tr key={index}>
                  <td className="border text-left p-2">{`FST0${index + 1}`}</td>
                  <td className="border text-left p-2">{name}</td>
                  <td className="border text-left p-2">{email}</td>
                  <td className="border text-left p-2">{contactNumber}</td>
                  <td className="border text-left p-2">{EmployeeID}</td>
                  <td className="border text-left p-2 flex gap-3 w-full">
                    <Link className="capitalize flex items-center justify-center bg-purple-500 w-1/2 text-white p-2 rounded">
                      edit
                    </Link>
                    <button className="capitalize bg-red-500 w-1/2 text-white p-2 rounded">
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
