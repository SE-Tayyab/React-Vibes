function project1(){
    let rect = document.querySelector("#centor");

rect.addEventListener('mousemove',(dets)=>{
    var rectLoc = rect.getBoundingClientRect();
    // console.log(rectLoc);
    var rectInsideVal = dets.clientX - rectLoc.left;

    if(rectInsideVal<=rectLoc.width/2){
        console.log("on left");
        var redCOlor = gsap.utils.mapRange(0, rectLoc.width/2, 255, 0, rectInsideVal);
        console.log(redCOlor);
        gsap.to(rect, {
            backgroundColor: `rgb(${redCOlor},0,0)`
        })
    }else{
        console.log("on right");
        var blueColor = gsap.utils.mapRange(rectLoc.width/2, rectLoc.width, 0, 255, rectInsideVal);
        console.log(blueColor);
        gsap.to(rect, {
            backgroundColor: `rgb(,0,0,${blueColor})`
        })
    }
})
}

project1();

function project2(){
    window.addEventListener("mousemove", (dets)=>{
        var rect2 = document.querySelector("#rect");
    
        var xval = gsap.utils.mapRange(0, window.innerWidth, 100+rect2.getBoundingClientRect().width/2, window.innerWidth-100 - rect2.getBoundingClientRect().width/2, dets.clientX)
        gsap.to("#rect",{
            left: xval + 'px',
            ease: Power3,
        })
    })
}

project2();

// let centor3 = document.querySelector("#centor3");
// centor3.addEventListener("mousemove", (dets)=>{
//     console.log(dets.clientX, dets.clientY)
// })


function imageArray() {
    var images = [
        "https://images.pexels.com/photos/36704/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2349168/pexels-photo-2349168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3254036/pexels-photo-3254036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2895295/pexels-photo-2895295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2236674/pexels-photo-2236674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/326716/pexels-photo-326716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/394355/pexels-photo-394355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/318451/pexels-photo-318451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2344997/pexels-photo-2344997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2104856/pexels-photo-2104856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2449510/pexels-photo-2449510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1047284/pexels-photo-1047284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];
    return images[Math.floor(Math.random() * images.length)]; // Accessing an element using square brackets []
}


let centor3 = document.querySelector("#centor3");
var pro3 = document.querySelector("#project3");
        const throttleFunction = (func, delay) => {
            let prev = 0;
            return (...args) => {
                let now = new Date().getTime();
                // console.log(now - prev, delay);
                if (now - prev > delay) {
                    prev = now;
                    return func(...args);
                }
            }
        }

        centor3.addEventListener("mousemove", throttleFunction((event) => {
            var divElement = document.createElement("div");
            var imageElement = document.createElement("img")
            imageElement.setAttribute("src", imageArray())

            
            divElement.style.width = "200px";
            divElement.style.height = "270px";
            divElement.style.transform = `rotate(${Math.floor(Math.random() * (11)) - 5}deg)`
            divElement.classList.add('imageDiv');

            divElement.appendChild(imageElement)
            pro3.appendChild(divElement)

            divElement.style.left = event.clientX -(divElement.getBoundingClientRect().width/2)+ "px"
            divElement.style.top = event.clientY -(divElement.getBoundingClientRect().height)+ "px"
            
            gsap.to(imageElement,{
                y:"0",
                ease: Power1,
                duration:.5,
            })

            gsap.to(imageElement,{
                y:"100%",
                delay: .6,
                ease: Power2,
            })

            setTimeout(()=>{
                divElement.remove()
            },1000)
        }, 150));

// var divElement = document.createElement("div");
// divElement.style.width = "100px"; // Set a width for the element
// divElement.style.height = "100px"; // Set a height for the element

// document.body.appendChild(divElement); // Append the divElement to the document body

// console.log("Width: ", divElement.clientWidth); // Log the width
// console.log("Height: ", divElement.clientHeight); // Log the height

// const maxRotation = 180; // Maximum rotation angle

// // Generate a random rotation angle between -180 and 180 degrees
// const rotationAngle = Math.floor(Math.random() * (maxRotation * 2)) - maxRotation;
// console.log(rotationAngle)
// // divElement.style.transform = `rotate(${rotationAngle}deg)`;