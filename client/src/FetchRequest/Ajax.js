// export const getDataFromDb = (type) => {
//   let filter = type === undefined ? 'All' : type
//   return fetch(`api/getData/${filter}`)
//   .then(data => data.json())
// }

// export const addDataToDb = (text) => {
//   return fetch("api/addData",{
//     method: "POST",
//     body: JSON.stringify({ text, completed: false }),
//     headers: {"Content-Type": "application/json"}
//   })
//   .then( data => data.json() )
// }
