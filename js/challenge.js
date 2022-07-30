//See the timer increment every second once the page has loaded.

let intervalID;

let totalSeconds =document.getElementById('counter');

 function runCounter() {
    intervalID = setInterval(() => totalSeconds.innerHTML++, 1000)
 }

runCounter()


function handleCounter(){
    document.addEventListener("click", (event) => {
    if (event.target.id === "minus"){
        totalSeconds.innerHTML--;
    }
    else if (event.target.id === "plus"){
        totalSeconds.innerHTML++;
    }
    else if (event.target.id === "heart"){
        const ul = document.getElementsByClassName("like");
        const li = document.createElement("li");
        li.appendChild(document.createTextNode("Hello")); 
        const list = ul.appendChild(li)
        console.log(list)
        }
    
         
    })
}

handleCounter()
