async function getdata(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data)
}
getdata()

// async function postdata(){
//     const sendData =await fetch("https://api.github.com/users/nirmalk2006",{
//         method: "POST",
//         headers: {
//             contentType: "application/json"
//         },
//         body: JSON.stringify({
//             name: "Nirmal Kumar",
//             age: 20,
//         })

//     });

// }
// console.log("Data Posted Successfully",sendData.status)
// postdata()
async function createUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "John",
      age: 25
    })
  });

  console.log("Status:", response.status);

  if (response.ok) {
    const data = await response.json();
    console.log("User created:", data);
  } else {
    console.log("Failed:", response.status);
  }
}

createUser();