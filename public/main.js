let liked = document.getElementsByClassName("fa-solid fa-heart");
let hated = document.getElementsByClassName("fa-solid fa-heart-crack");
let trash = document.getElementsByClassName("fa-ban");
let feedBack = document.getElementsByClassName("submit");

Array.from(liked).forEach(function (element) {
  element.addEventListener("click", function () {
    console.log(this.parentNode.parentNode);
    const coffeeChoice = this.parentNode.parentNode.childNodes[1].innerText;
    const coffeeInstructions =
      this.parentNode.parentNode.childNodes[3].innerText;
    const customerName = this.parentNode.parentNode.childNodes[5].innerText;
    const baristaName = this.parentNode.parentNode.childNodes[7].value;
    const orderId = this.parentNode.parentNode.childNodes[9].value;

    fetch("savedToDatabase", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerName: customerName,
        coffeeChoice: coffeeChoice,
        coffeeInstructions: coffeeInstructions,
        baristaName: baristaName,
        orderId: orderId,
      }),
    })
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        console.log(coffeeInstructions);
        document.getElementById("bookCover").innerText = coffeeInstructions;
        window.location.reload(true);
      });
  });
});

Array.from(trash).forEach(function (element) {
  element.addEventListener("click", function () {
    console.log(this.parentNode.parentNode.childNodes)
    const coffeeChoice = this.parentNode.parentNode.childNodes[2].innerText;
    const coffeeInstructions =this.parentNode.parentNode.childNodes[5].innerText;
    const customerName = this.parentNode.parentNode.childNodes[8].innerText
    console.log(coffeeChoice);
    console.log(coffeeInstructions);
    console.log(customerName)
    fetch("deleteOrders", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coffeeChoice: coffeeChoice,
        coffeeInstructions: coffeeInstructions,
        customerName: customerName
      }),
    }).then(function (response) {
      window.location.reload();
    });
  });
});
