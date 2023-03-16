 const slider=document.querySelector(".slider") .children;
 const indicators=document.querySelector(".indicator");
 let index=0;

 function circleindicators(){
    for (let i=0; i<slider.length; i++){
        const div=document.createElement("div");
                 div.innerHTML=i+1;
                div.setAttribute("onclick","indicatesliders(this)")
                indicators.appendChild(div);
    }
 }