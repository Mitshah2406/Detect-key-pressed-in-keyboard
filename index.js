let container = document.querySelector('.container');
let content = document.querySelector('.content');
let key_Code = document.querySelector('.key-Code');
let keyName = document.querySelector('.keyName');
let key = document.querySelector('.key-span');
let code = document.querySelector('.code-span');
let details = document.querySelector('.details')
console.log(container,content,key_Code,keyName,key,code);
document.addEventListener('keydown', (e)=>{
   console.log(e);
    key_Code.innerHTML = e.keyCode;
    keyName.innerHTML = e.key;
    key.innerHTML = e.key;
    code.innerHTML = e.code;
   content.classList.add('active')
   key_Code.classList.add('active')
   details.classList.add('active')
})
