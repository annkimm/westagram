let replyInput = document.querySelector(".sectionIput_input");
let replyButton = document.querySelector(".sectionIput_button");
let replyList = document.querySelector(".sectionReply_list");
let replyListP=document.querySelector(".sectionReply_list li>p");

let replyObj=[{
  id: "neceosecius",
  text: "우리 백호 졸귀!",
  num: 1
}]

replyInput.addEventListener("keydown",inputFunc);

function inputFunc(e){
  let li = document.createElement("li");
  let div = document.createElement("div");
  let a = document.createElement("a");
  let p = document.createElement("p");
  let button = document.createElement("button");

  let profile_id = document.querySelector(".sectionRight .sectionProfile_text>dt");

  div.classList.add("sectionReply_text");
  button.classList.add("sectionReply_heart");

  let inputValue = replyInput.value;

  if(replyInput.value.length > 0){
    replyButton.classList.add("on");
  }else{
    replyButton.classList.remove("on");
  }

  if(e.keyCode === 13){

    a.setAttribute("href", profile_id.childNodes[0].getAttribute('href'));
    a.innerHTML = profile_id.innerText;
    p.innerHTML = inputValue;
    button.innerHTML = "하트";

    li.appendChild(a);
    li.appendChild(p);
    li.appendChild(button);

    replyList.appendChild(li);
    replyInput.value = "";
    replyButton.classList.remove("on");
    replyListP=document.querySelectorAll(".sectionReply_list li>p");
    p.addEventListener("click",function(e){
      this.parentElement.remove();
    });

  }
}

replyButton.addEventListener("click", function(e){

});

replyListP.addEventListener("click", function(e){

    this.parentElement.remove();
  
  })
