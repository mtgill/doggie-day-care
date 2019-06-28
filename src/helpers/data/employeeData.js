import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const fbUrl = firebaseConfig.firebaseKeys.databaseURL;

const getemployees = () => new Promise((resolve, reject) => {
  axios.get(`${fbUrl}/employees.json`)
    .then((res) => {
      const employees = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        employees.push(res.data[fbKey]);
      });
      resolve(employees);
    })
    .catch(err => reject(err));
});

export default { getemployees };
