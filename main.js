// let ques = [
//     {savol :`Savol qismi`,
//     a:`a variant`,
//     b:`b variant`,
//     c:`c variant`,
//     d:`d variant`
//     }
// ]
let alert = document.querySelector(".alert") 

// console.log(alert)
function createques(savol,av,bv,cv,dv){
    this.savol = savol;
    this.a = av;
    this.b = bv;
    this.c = cv;
    this.d = dv;
}

function createques1(savol,av,bv,cv,dv){
        let newques = new createques(savol,av,bv,cv,dv);
        let save = localStorage.getItem("save");
        if(save == null){
          console.log("json yoq")
          let  ques = [] ;
          localStorage.setItem("save",JSON.stringify([]));

      }else
        ques = JSON.parse(localStorage.getItem("save"))
        ques.push(newques);

localStorage.setItem("save",JSON.stringify(ques));

}

 

// for(let i = 0; i < 77 ; i++){
//     createques1(`${i} savol`,`${i} avariant`,`${i} bvariant`,`${i}cvariant`,`${i}dvariant`)   
// }


// localStorage.setItem("save",JSON.stringify(ques));
// console.log(ques)




let form = document.querySelector("form") ;
let parentsector = document.querySelector(".parentsector");
let ul =document.querySelector("ul");

let addme = document.querySelector(".addme");
addme.addEventListener("click",()=>{
  let answer = document.querySelector(".answer").value;
let avariant = document.querySelector(".avariant").value ;
let bvariant = document.querySelector(".bvariant").value;
let cvariant = document.querySelector(".cvariant").value;
let dvariant = document.querySelector(".dvariant").value;
if(answer.trim() != 0  && avariant.trim() != 0)
{createques1(answer,avariant,bvariant,cvariant,dvariant);
  localStorage.setItem("save",JSON.stringify(ques));
document.querySelector(".answer").value =""
document.querySelector(".avariant").value  =""
document.querySelector(".bvariant").value =""
 document.querySelector(".cvariant").value =""
document.querySelector(".dvariant").value =""

}
else
foralert(`Savol va tog'ri javob qismi kiritilishi shart!`)
 

  showtasks()

})

showtasks()
function showtasks(){
    
    let save = localStorage.getItem("save");
    //console.log(JSON.parse(save))    
    if(save == null){
        let  ques = [] ;
        
    }
    else {
    parentsector.innerHTML='';
    ul.innerHTML ='';
    let ques = JSON.parse(save) ;

   
    ques.forEach((i,j) => {
        // console.log(`${i.savol}   ${j}`);
        // console.log(`${i.a}   ${j}`);
        // console.log(`${i.b}   ${j}`);
        // console.log(`${i.c}   ${j}`);
        // console.log(`${i.d}   ${j}`);
   let section = `
   
   <div class="sector ps-3 pb-2 p-3">
  <div onclick="delete_item(${j})" class="delete_me btn-outline-danger btn">
  <p>X</p> 
  </div>
  <div id="savolid${j}" class="savol mt-1 mb-1 pb-2"> ${j+1}.
  ${i.savol}
   </div>
  
  <div class="variant pt-2  d-flex">
   <input class="form-check-input" type="radio" name="${i.savol}${i.j}" id="${i.a+j}" value="option1">
    <label onclick="reactive(${j})" class="form-check-label " for="${i.a+j}">  ${i.a}</label>
  </div>


  <div class="variant pt-2  d-flex">
   <input class="form-check-input" type="radio" name="${i.savol}${i.j}" id="${i.b+j}" value="option1">
    <label onclick="reactive(${j})" class="form-check-label " for="${i.b+j}">${i.b}</label>
  </div>
  
  
  
  <div class="variant pt-2  d-flex">
   <input class="form-check-input" type="radio" name="${i.savol}${i.j}" id="${i.c+j}" value="option1">
    <label onclick="reactive(${j})" class="form-check-label " for="${i.c+j}">${i.c}</label>
  </div>


  <div class="variant pt-2 d-flex">
   <input class="form-check-input" type="radio" name="${i.savol}${i.j}" id="${i.d+j}" value="option1">
    <label onclick="reactive(${j})" class="form-check-label " for="${i.d+j}">${i.d}</label>
  </div>



  <div>

  </div>


</div>
   `
   parentsector.innerHTML += section;
      
   
   let ahref = `<a style=" text-decoration: none;"  href="#savolid${j}"> <li class="savolid${j}">${j+1}</li></a>`
   
ul.innerHTML += ahref;

    });
}

}




function delete_item(i){

    save = localStorage.getItem("save") ;

    let ques = JSON.parse(save) ;
  
  ques.splice(i,1);
   
    
    localStorage.setItem("save",JSON.stringify(ques));

    showtasks();
}

function reactive(a){
  checked = document.querySelector(`.savolid${a}`);
  checked.classList.add("checked") ;
}

function foralert(i){
  alert.classList.add("show")
  let warning = document.querySelector(".warning");
  
  warning.innerHTML = i ;

  setTimeout(() => {
    alert.classList.remove("show");
  }, 5000);
}

function foralertclose(){
  alert.classList.remove("show"); 
}

let action = document.querySelector(".action");

let yakunlash = document.querySelector(".yakunlash");
yakunlash.addEventListener("click",function(){
  let save = localStorage.getItem("save");
  
  if(save == null){
    foralert(`Ma'lumotlar kiritilmagan`);
    return ; 
    
}
  

  if( (action.value).length > 0)
  {let save = localStorage.getItem("save");
  const blob = new Blob([save], {type: action}, {path:'./ToDO List/Hemis.test  Creater'});
 const fileUrl =URL.createObjectURL(blob) ;  
 const link = document.createElement("a") ;
 link.download = `${action.value}.json` ;
 link.href = fileUrl;
 link.click();}
 else {foralert(`Mavzu nomini kiriting`);
  action.focus();
}

})


let clearme = document.querySelector(".clearme");
clearme.addEventListener("click",()=>{
 if( confirm("Kiritilgan ma'lumotlar tozalansinmi?") && confirm("Kiritilgan ma'lumotlar tozalansinmi?")){
  localStorage.clear();
  window.location = "index.html"
  showtasks();
 }

})


let pastedone = document.querySelector(".paste1");

pastedone.addEventListener("click",()=>{


  let answer = document.querySelector(".answer");



  navigator.clipboard
    .readText()
    .then((clipText) => (answer.value = clipText)
    );
})








let paste2 = document.querySelector(".paste2");

paste2.addEventListener("click",()=>{


  let avariant = document.querySelector(".avariant");



  navigator.clipboard
    .readText()
    .then((clipText) => (avariant.value = clipText)
    );
})





let paste3 = document.querySelector(".paste3");

paste3.addEventListener("click",()=>{


  let bvariant = document.querySelector(".bvariant");



  navigator.clipboard
    .readText()
    .then((clipText) => (bvariant.value = clipText)
    );
})





let paste4 = document.querySelector(".paste4");

paste4.addEventListener("click",()=>{


  let cvariant = document.querySelector(".cvariant");



  navigator.clipboard
    .readText()
    .then((clipText) => (cvariant.value = clipText)
    );
})


let paste5 = document.querySelector(".paste5");

paste5.addEventListener("click",()=>{


  let dvariant = document.querySelector(".dvariant");



  navigator.clipboard
    .readText()
    .then((clipText) => (dvariant.value = clipText)
    );
})

document.body.addEventListener("keyup",(e)=>{

if(e.key == "Enter"){
  console.log("enter");
  addme.click();
}
})

