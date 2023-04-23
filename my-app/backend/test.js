const axios = require('axios');

axios.post('http://localhost:3000/library/favorite', {
  library: "Moffit"
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error);
});

// axios.get('http://localhost:3000/')
// .then(response => {
//   console.log(response.data);
// })
// .catch(error => {
//   console.log(error);
// });