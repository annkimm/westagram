let id=document.querySelector(".loginId");
let btn=document.querySelector(".loginBtn");
let pwd=document.querySelector(".loginPassword");
let idValue="";
let pwdValue="";

let keyFnc = (e) =>{
  idValue=id.value;
  pwdValue=pwd.value;

  if( idValue.length>0 && pwdValue.length>0 ){
    btn.classList.add("cursorOn")
  }else{
    btn.classList.remove("cursorOn")
  }
}


id.addEventListener("keypress",keyFnc);

id.addEventListener("keyup",keyFnc);

pwd.addEventListener("keypress",keyFnc);

pwd.addEventListener("keyup",keyFnc);
