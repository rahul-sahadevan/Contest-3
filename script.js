

const url = "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";
// fetching the data from the server using fetch keyword

// getMenu() function to get all the data from the server
document.addEventListener("DOMContentLoaded",() =>{
   getMenu();
   const press = document.getElementById("butt");
   press.addEventListener("click",mainFunction);
})
function getMenu(){
    let arr = [];
    let response = fetch(url);
    let res = response.then((data) =>{
        // using json to get the data packets
    let res = data.json();
        res.then((d)=>{
            // creating more menu items using the array of objects
            const burgur = document.querySelector(".burgur");
            for(let i =0;i<d.length;i++){
                arr.push(d[i]);
                const div = document.createElement("div");
                div.classList.add("bur");
                const img_div = document.createElement("div");
                const img = document.createElement("img");
                img.src = d[i].imgSrc;

                img_div.classList.add("b-img");
                img_div.append(img);

                const para_div = document.createElement("div");
                const p1 = document.createElement("p");
                p1.innerText = d[i].name;

                const p2 = document.createElement("p");
                p2.innerText = d[i].price;

               const descript = document.createElement("div");
               descript.classList.add("price");


                para_div.append(p1,p2);

                // const plus = document.querySelector(".plus");

                const plus_div = document.createElement("div");
                const img2 = document.createElement("img");
                img2.classList.add = "pluss";
                img2.src = "Group 3.png";

                plus_div.append(img2);

                descript.append(para_div,plus_div);
                descript.style.display = "flex";
                descript.style.justifyContent = "space-between"
                descript.style.alignItems = "center"
                div.append(img_div,descript);
                div.style.padding = "10px";
                p1.style.fontSize = "18px"

                burgur.append(div)



                
            }
        })
    })
    return arr;
}
// calling getMenu()


// adding eventlistner for the + button  click any of the fisrt burgur + to get the desired result
function getRandomFood(data) {
    const all_food = data;
    const order = [];
    for (let i = 0; i < 3; i++) {
      let ri = Math.floor(Math.random() * data.length);
      order.push(all_food[ri]);
    }
    return order;
  }
  
  function TakeOrder(data) {
    return new Promise((resolve, reject) => {
      var order = getRandomFood(data);
      setTimeout(() => {
        resolve(order);
      }, 2500);
    });
  }
  
  function orderPrep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log({ order_status: true, paid: false });
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  
  function payOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log({ order_status: true, paid: true });
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  function thankyouFnc() {
    alert("thankyou for eating with us today!");
  }
  
  function mainFunction() {
    // get the data
    // adding the promises or writing the chain
    fetch(
      "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
    )
      .then((response) => response.json())
      .then((data) => TakeOrder(data))
      .then((order) => {
        console.log(order);
        return order;
      })
      .then((order) => orderPrep())
      .then((status) => {
        if (status.order_status) {
          return payOrder();
        } else {
          throw new Error("Problem in making the order");
        }
      })
      .then((status) => {
        if (status.paid) {
          thankyouFnc();
        } else {
          throw new Error("Payment declined/failed.");
        }
      })
      .catch((err) => console.error(err));
  }