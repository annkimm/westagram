let replyInput=document.querySelector(".sectionIput_input");
let replyButton=document.querySelector(".sectionIput_button");
let replyList=document.querySelector(".sectionReply_list");

let replyObj=[{
  id:"neceosecius",
  text:"우리 백호 졸귀!",
  num:1
}]

replyInput.addEventListener("keydown",function(e){
  let li=document.createElement("li");
  let div=document.createElement("div");
  let a=document.createElement("a");
  let br=document.createElement("br");
  let p=document.createElement("p");
  let button=document.createElement("button");

  let profile_id=document.querySelector(".sectionRight .sectionProfile_text>dt");

  div.classList.add("sectionReply_text");
  button.classList.add("sectionReply_heart");

  let inputValue=replyInput.value;

  if(replyInput.value.length>0){
    replyButton.classList.add("on");
  }else{
    replyButton.classList.remove("on");
  }

  if(e.keyCode === 13){

    a.setAttribute("href","");
    a.innerHTML=profile_id.innerText;
    p.innerHTML=inputValue;
    button.innerHTML="하트"

    li.appendChild(a);
    li.appendChild(p);
    li.appendChild(button);

    replyList.appendChild(li);
    replyInput.value="";
    replyButton.classList.remove("on");

  }
});

replyButton.addEventListener("click",function(e){

});

replyList.addEventListener("click",function(e){

  let target=e.target;

  if(target.nodeName === "P"){

    console.dir(target.parentNode);
    target.parentNode.parentNode.removeChild(target.parentNode)
  }

})
