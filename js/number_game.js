const answer = "일이삼";

const field = document.querySelector(".field");
const message = document.querySelector(".message-bar");
const fieldnum = document.querySelector(".fieldnum");
const numberPad = document.querySelector(".numberPad");
const loading = document.querySelector(".loading");
const btndelete = document.querySelector(".delete");
const correcticon = document.querySelector(".check");
const robotext = document.querySelector(".robotext");
const robobtn = document.querySelector(".robobtn");
const clickSFX = new Audio('https://amplify-education.github.io/design-sandbox/audio/gsfx_click_btn.mp3');
const deleteSFX = new Audio('https://amplify-education.github.io/design-sandbox/audio/button_03.mp3');
const wrongSFX = new Audio('https://amplify-education.github.io/design-sandbox/audio/Q06_S3_in_progress_sfx_v1.mp3');
const correctSFX = new Audio('https://amplify-education.github.io/design-sandbox/audio/Effort_sfx_v2.mp3');

var inputs = [];


talkify.config.remoteService.host = 'https://talkify.net';
talkify.config.remoteService.apiKey = '46b32f4e-6b73-40ee-8ae1-4a17cb1b18f6';
var player = new talkify.Html5Player().enableTextHighlighting().setRate(.8);
var isplaying = false;

document.addEventListener(
  "click",
  function(btn) {
    //btn = btn || window.event;
    var target = btn.target || btn.srcElement,
        text = target.textContent || target.innerText;
    
    if (message.classList.contains("active")) {
        message.classList.remove("active");
    }

    if (target.classList.contains("number")) {
      
      clickSFX.play();
      var fieldP = document.createElement("p");
        fieldP.innerHTML = text;
      inputs.push(text);

      if (fieldnum.childElementCount < 2) {
        field.classList.remove("wrong");
        fieldnum.appendChild(fieldP); 
        btndelete.classList.add("show");
        
      } else if (fieldnum.childElementCount == 2) {
        
        fieldnum.appendChild(fieldP); 
        btndelete.classList.remove("show");
        
        checkAnswer(inputs.join(""));

        //timed for number pop animation
        setTimeout(function(){ 
          numberPad.classList.add("disabled");
          loading.classList.add("show");
                  
        }, 200);
        
        checkAnswer(inputs.join(""));

      } else {
        numberPad.classList.add("disabled");
      }
      
    } else if (target.classList.contains("delete")) {
       deleteSFX.play();
       fieldnum.removeChild(fieldnum.childNodes[fieldnum.childElementCount-1]);
       inputs.pop();

       if (fieldnum.childElementCount <= 0){
           btndelete.classList.remove("show");
       }
    } else if (target.classList.contains("robobtn")) {
        // if(isplaying == false) {
          player.playText(robotext.innerText);
          isplaying = true;
          robobtn.addClass('isreading');
         // } else {
         //    robobtn.removeClass('isreading');
         // }

    }
    
    //avoid focus stay on btn
    target.blur();
    
  }
);


function checkAnswer(userinput) {
  
  //time for loading
  setTimeout(function(){ 

    if (userinput === answer) {
      
      correctSFX.play();
      loading.classList.remove("show");
      correcticon.classList.add("show");
      correcticon.setAttribute("role", "alert");
      
    } else {
      
      wrongSFX.play();
      loading.classList.remove("show");
      field.classList.add("wrong");
      message.classList.add("active");
      message.setAttribute("role", "alert");
      
      //auto-dismiss message
      setTimeout(function(){ 
          message.classList.remove("active");
          message.removeAttribute("role");

      },3000);
      
      fieldnum.innerHTML = "";
      inputs = [];
      numberPad.classList.remove("disabled");
      
    }
              
  }, 3000);

}