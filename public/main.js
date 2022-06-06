let liked = document.getElementsByClassName("fa-solid fa-heart");
let hated = document.getElementsByClassName("fa-solid fa-heart-crack");
let trash = document.getElementsByClassName("fa-ban");
let feedBack = document.getElementsByClassName("submit");

Array.from(liked).forEach(function (element) {
  element.addEventListener("click", function () {
    console.log(Liked);
    console.log(this.parentNode.parentNode);
    console.log(this.parentNode.parentNode.childNodes[1]);
    console.log(this.parentNode.parentNode.childNodes[2]);
    console.log(this.parentNode.parentNode.childNodes[3]);
    console.log(this.parentNode.parentNode.childNodes[4]);
    console.log(this.parentNode.parentNode.childNodes[5]);
    console.log(this.parentNode.parentNode.childNodes[6]);
    console.log(this.parentNode.parentNode.childNodes[7]);
    console.log(this.parentNode.parentNode.childNodes[8]);
    console.log(this.parentNode.parentNode.childNodes[9]);
    
    const customerName = this.parentNode.parentNode.childNodes[1].innerText;
    const coffeeInstructions = this.parentNode.parentNode.childNodes[3].innerText;
    const coffeeChoice = this.parentNode.parentNode.childNodes[5].value;
    const coffeeChoice2 = this.parentNode.parentNode.childNodes[7].value;
    const coffeeChoice3 = this.parentNode.parentNode.childNodes[9].value;
    const coffeeChoice4 = this.parentNode.parentNode.childNodes[11].value;
    const coffeeChoice5 = this.parentNode.parentNode.childNodes[13].value;
    const baristaName = this.parentNode.parentNode.childNodes[15].value;
    const orderId = this.parentNode.parentNode.childNodes[17].value;
    
    fetch("savedToDatabase", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerName: customerName,
        coffeeInstructions: coffeeInstructions,
        coffeeChoice: coffeeChoice,
        coffeeChoice2: coffeeChoice2,
        coffeeChoice3: coffeeChoice3,
        coffeeChoice4: coffeeChoice4,
        coffeeChoice5: coffeeChoice5,
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
      console.log(Liked);
    });
  });
});

Array.from(trash).forEach(function (element) {
  element.addEventListener("click", function () {
    const customerName = this.parentNode.parentNode.parentNode.childNodes[1].innerText;
    const coffeeInstructions = this.parentNode.parentNode.parentNode.childNodes[3].innerText;
    const coffeeChoice = this.parentNode.parentNode.parentNode.childNodes[5].innerText;
    const coffeeChoice2 = this.parentNode.parentNode.parentNode.childNodes[7].innerText;
    const coffeeChoice3 = this.parentNode.parentNode.parentNode.childNodes[9].innerText;
    const coffeeChoice4 = this.parentNode.parentNode.parentNode.childNodes[11].innerText;
    const coffeeChoice5 = this.parentNode.parentNode.parentNode.childNodes[13].innerText;
    const baristaName = this.parentNode.parentNode.parentNode.childNodes[15].innerText;
    const orderId = this.parentNode.parentNode.parentNode.childNodes[17].innerText;

    console.log(customerName)
    console.log(coffeeInstructions);
    console.log(coffeeChoice);
    console.log(coffeeChoice2);
    console.log(coffeeChoice3);
    console.log(coffeeChoice4);
    console.log(coffeeChoice5);
    console.log(baristaName);
  
    fetch("deleteOrders", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerName: customerName,
        coffeeInstructions: coffeeInstructions,
        coffeeChoice: coffeeChoice,
        orderId: orderId,
        baristaName: baristaName
      }),
    }).then(function (response) {
      window.location.reload();
    });
  });
});
