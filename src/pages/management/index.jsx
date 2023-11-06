import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ManagementCreate from "./management-create";
import { postUser } from "../../features/userSlice";

const ManagementPage = () => {
  const [values, setValues] = useState({
    employee_name: "",
    employee_email: "",
    employee_contact_no: "",
    employee_id: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { userData } = useSelector((state) => state.users);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postUser({
        // id: users[users.length - 1].id + 1,
        // id: userData[userData?.length - 1].id + 1,
        // id: userData.length,
        name: values.employee_name,
        email: values?.employee_email,
        contactNumber: values?.employee_contact_no,
        EmployeeID: values?.employee_id,
      })
    );
    navigate("/management/employee");
  };
  return (
    <>
      <ManagementCreate
        formSubmit={formSubmit}
        changeHandler={changeHandler}
        values={values}
      />
    </>
  );
};

export default ManagementPage;
