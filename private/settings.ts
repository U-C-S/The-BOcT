//Settings----------------------------------------------------------
//Terminal like UI
const stg_terminal = <HTMLInputElement> document.getElementById("stg_terminal");
const stg_terminal_cokie = localStorage.getItem('TerminalUI');

if (stg_terminal_cokie == 'yes'){
  stg_terminal.checked = true;
  document.getElementById("TerminalUI").style.display="block";
  document.getElementById("ChatUI").style.display="none";
}
else{
  stg_terminal.checked = false;
  document.getElementById("ChatUI").style.display="block";
  document.getElementById("TerminalUI").style.display="none";
}

stg_terminal.addEventListener('click',()=>{
  if(stg_terminal.checked == true){
    localStorage.setItem('TerminalUI', 'yes');
  }
  else{
    localStorage.setItem('TerminalUI','no');
  }
});

//1.open chatbox by default
const stg_chatbox = <HTMLInputElement> document.getElementById("stg_chat_open_default");
const stg_chatbox_cokie = localStorage.getItem('chatbox');

if (stg_chatbox_cokie == 'open'){
  stg_chatbox.checked = true;
  CLICK_BOT.style.animation = "none";
  document.getElementById("chatter").style.display="block";
}
else{
  stg_chatbox.checked = false;
  document.getElementById("chatter").style.display="none";
}

stg_chatbox.addEventListener('click',()=>{
  if(stg_chatbox.checked == true){
    CLICK_BOT.style.animation = "none";
    document.getElementById("chatter").style.display="block";
    localStorage.setItem('chatbox', 'open');
  }
  else{
    localStorage.setItem('chatbox','close');
  }
});

//2.Diable Loading Screen
const stg_load = <HTMLInputElement> document.getElementById("stg_disable_load");
const stg_load_cokie = localStorage.getItem('loading');

if (stg_load_cokie == 'no'){
  stg_load.checked = true;
  stopLoading();
}
else{
  stg_load.checked = false;
}

stg_load.addEventListener('click',()=>{
  stg_load.checked == true ? localStorage.setItem('loading', 'no') : localStorage.setItem('loading','yes');
});



//0. Clear LocalStorage
const stg_cokieClear = <HTMLButtonElement> document.getElementsByClassName("stg_btn")[0];
stg_cokieClear.addEventListener('click',()=>{
  localStorage.removeItem("theme");
  localStorage.removeItem("chatbox");
  localStorage.clear();
})

//0a. Clear all the conversation
const stg_clearChat = document.getElementsByClassName("stg_btn")[1];
stg_clearChat.addEventListener('click',()=>{
  document.getElementById("chatspace").innerHTML = '';
  setTimeout(()=>{talk_div_boct('Hoi')},1372);
})