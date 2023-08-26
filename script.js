

const url = "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";
// fetching the data from the server using fetch keyword
let response = fetch(url);

// getMenu() function to get all the data from the server
function getMenu(){
    let res = response.then((data) =>{
        // using json to get the data packets
    let res = data.json();
        res.then((d)=>{
            // creating more menu items using the array of objects
            const burgur = document.querySelector(".burgur");
            for(let i =0;i<d.length;i++){
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
}
// calling getMenu()
getMenu();


// adding eventlistner for the + button  click any of the fisrt burgur + to get the desired result
const plus = document.querySelectorAll(".pluss")
for(let i =0;i<plus.length;i++){
    const add_button = plus[i];

    add_button.addEventListener("click",() =>{
        const link = "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";
        const response1 = fetch(link);
        let random_burgors=[];
        let res = response1.then((data) =>{
            let arr = data.json();
            
            arr.then((data) =>{
               
                random_burgors.push(data[8].name);
                random_burgors.push(data[24].name);
                random_burgors.push(data[18].name);
                console.log(random_burgors);
            })
    
        })
        // take order function
        function TakeOrder(){
           return new Promise((resolve)=>{
            setTimeout(() =>{
                const order = {
                    burgur:random_burgors
                }
                resolve(true);
            },2500)
           })
           
        }
        TakeOrder();
        // orderpep funtion using normal promise chainig
        function orderPrep(){
            return new Promise((resolve) =>{
                setTimeout(() =>{
                    let order_pp = {};
                    order_pp.order_status = true;
                    order_pp.paid = false;
                    console.log(order_pp);
                    resolve(order_pp);
                },1500)
            })
        }
        let x = orderPrep();
        let y = x.then((data) =>{
            return new Promise((resolve) =>{
                setTimeout(() =>{
                    data.order_status = true;
                    data.paid = true;
                    console.log(data);
                    resolve(data);
                },1000)
            })
        })
         y.then((data) =>{
            if(data.paid === true){
                return alert("Payment Done Successfully");
            }
         })
    })
}
