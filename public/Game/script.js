const url = "http://localhost:3000/personage";

fetch(url, {
  method: "GET",
  headers: new Headers({
    "Content-Type": "application/json",
  }),
})
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResponse) {
    console.log(jsonResponse);
  });
