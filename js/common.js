document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => res.text())
    .then((data) => {
      document.getElementById("heading").innerHTML = data;
  })
  .catch((error) => {
    console.log("Error in loading header :", error);    
  })

  fetch("footer.html")
    .then(res => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
  })
    .catch((error) => {
    console.log("Error in loading footer: ", error);
  })
})