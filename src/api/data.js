import axios from 'axios';

const getData = () => {
  const getFile = name => axios.get (name);
  const baseUrl = process.env.BASE_URL;

  return Promise.all ([
    getFile (`${baseUrl}data/data.json`),
  ])
    .then (function (response) {
        console.log('response',response)
      return {
        data_set: response[0].data,
      };
    })
    .catch (function (error) {
      // handle error
      console.log (error);
    });
};

export default {getData};
