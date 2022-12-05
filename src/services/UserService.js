import firebase from "../firebase";
const db = firebase.collection("/users");

const getAllUser = () => {
  return db;
};
const userservice = {
  getAllUser,
};

export default userservice;
