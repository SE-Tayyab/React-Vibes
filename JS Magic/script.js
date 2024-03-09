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

window.addEventListener("mousemove", (dets)=>{
    var rect2 = document.querySelector("#rect");

    var xval = gsap.utils.mapRange(0, window.innerWidth, 100+rect2.getBoundingClientRect().width/2, window.innerWidth-100 - rect2.getBoundingClientRect().width/2, dets.clientX)
    gsap.to("#rect",{
        left: xval + 'px',
        ease: Power3,
    })
})