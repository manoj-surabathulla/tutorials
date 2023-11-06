import axios from "axios";

export const getAllUsersThunk = async () => {
  const url = "http://localhost:3030/api/v1/user";
  try {
    const resp = await axios.get(url);
    return resp;
  } catch (error) {
    console.log(error);
  }
};
