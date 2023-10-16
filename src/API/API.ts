import axios from "axios";

const URL = "http://localhost:3333/data";

export const createTask = (data: any) => {
  try {
    return axios.post(URL, data);
  } catch (error) {
    console.log(error);
  }
};

export const getTask = () => {
  try {
    return axios.get(URL).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (data: any) => {
  try {
    return axios.delete(`${URL}/${data}`).then((res) => {
      console.log(res);

      return res;
    });
  } catch (error) {
    console.log(error);
  }
};
