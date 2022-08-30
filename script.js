const searchInput = document.querySelector("#search");
console.log(searchInput);

const taro = document.querySelectorAll(".card");
console.log(taro);
console.log(typeof taro); 

searchInput.addEventListener("keyup",function(event){
    const user = event.target.value.toLowerCase();
    
    console.log(user);
    
    taro.forEach(item=>{
        item.querySelector("p").textContent.toLowerCase().includes(user)? (item.style.display="block"):(item.style.display="none");
    })
})