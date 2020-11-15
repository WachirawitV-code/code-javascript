//DOM Element
//   let messages = document.getElementById('message-2')
//   messages.innerHTML = "Hello Master"
//   let messages = document.getElementsByClassName('message');
//   for(let i =0;i<messages.length;i++){
//       messages[i].innerHTML = 'GG';
//   }
// let messages = document.querySelectorAll('.message');
// for(let i =0;i<messages.length;i++){
//     messages[i].innerHTML = 'GG';
// }
// messages.forEach((message) => {
//     message.innerHTML = 'TT'
// }) 
// let message = document.querySelector('#message-3');
// message.innerHTML = "TT";

//DOM style
// let message = document.querySelector('.message');
// message.style.color = 'green';
// message.style.backgroundColor = 'black';
// message.style.fontSize = '20px';

// let message = document.querySelector('.message');
// let spoilButton = document.querySelector('.spoil-button');
// spoilButton.addEventListener('click', () => {
//   // Show/Hide message
//   if (message.style.display === 'none') {
//     message.style.display = 'block';
//   }
//   else {
//     message.style.display = 'none';
//   }
// });

//DOM class
// let message = document.querySelector('.message');
// message.classList.add('orange-box');
// message.classList.remove('green-box');
// message.classList.replace('orange-box', 'green-box');
// let body = document.body;
// let themeButton = document.querySelector('.theme-button');

// themeButton.addEventListener('click', () => {
//   // Change theme
//   body.classList.toggle('dark-theme');
// });

//DOM mouse event
// let thumbnailImages = document.querySelectorAll('.thumbnail-image');
// let bigImage = document.querySelector('.big-image');

// function changeImage(event) {
//   bigImage.src = event.target.src;
// }

// function removeImage() {
//   bigImage.src = '';
// }
// //click mouseover mouseout
// thumbnailImages.forEach((thumbnail) => {
//   thumbnail.addEventListener('mouseout', removeImage);
//   thumbnail.addEventListener('mouseover', changeImage);
// });

//DOM Form Event Input
// let answers = document.querySelectorAll('.answer');
// let errorMessage = document.querySelector('.error-message');
// let answerForm = document.querySelector('.answer-form')
// function checkAnswers(event){
//     let toolong = false;
//     answers.forEach((answer) => {
//         if(answer.value.length > 10){
//             toolong = true;
//         }
//     });
//     if(toolong){
//         errorMessage.style.display = 'block';
//         event.preventDefault();
//     }
//     // else{
//     //     errorMessage.style.display = 'none';
//     // }
// }
// // answers.forEach((answer) => {
// //     answer.addEventListener('input',checkAnswers);
// // })
// //ส่งข้อมูล
// answerForm.addEventListener('submit',checkAnswers);

//DOM keyboard event
// let imageIndex = 0;
// let imageLinks = ['test1.jpg', 'test2.jpg', 'test3.jpg'];
// let image = document.querySelector('.image');

// function prevImage() {
//     if (imageIndex > 0) {
//       imageIndex--;
//       image.src = imageLinks[imageIndex];
//     }
//   }
  
//   function nextImage() {
//     if (imageIndex < imageLinks.length - 1) {
//       imageIndex++;
//       image.src = imageLinks[imageIndex];
//     }
//   }
  
//   function keyup(event) {
//     console.log(event.key)
//     if (event.key === 'ArrowLeft') {
//       prevImage();
//     }
//     else if (event.key === 'ArrowRight') {
//       nextImage();
//     }
//   }
  
//   document.addEventListener('keyup', keyup);

//DOM scroll event
// let topHeader = document.querySelector('.top-header');
// let lastScrollY = 0;
// let scrollInfo = document.querySelector('.scroll-info');
// // window.addEventListener('scroll', () => {
// //     let infoText = 'x ='+window.scrollX;
// //     infoText += 'Y ='+window.scrollY;
// //     scrollInfo.innerHTML = infoText;
// //   });
// window.addEventListener('scroll', () => {
//   if (window.scrollY > lastScrollY) {
//     topHeader.classList.add('hide');
//   }
//   else {
//     topHeader.classList.remove('hide');
//   }
//   lastScrollY = window.scrollY;
// });

//DOM drag drop
// const weapons = document.querySelectorAll('.weapon');
// const equipSlot = document.querySelector('.equip-slot');
// const equipWeapon = document.querySelector('.equip-weapon');
// // 1. Drag
// function dragWeapon(event) {
//     event.dataTransfer.setData('text/plain', event.target.id);
//     console.log(event.target.id);
// }
// weapons.forEach((weapon) => {
//     weapon.addEventListener('dragstart', dragWeapon);
// });
// // 2. Drop
// function dragOverWeapon(event) {
//     event.preventDefault();
// }
// function dropWeapon(event) {
//     event.preventDefault();
//     const id = event.dataTransfer.getData('text/plain');
//     const image = document.querySelector('#' + id);
//     equipWeapon.src = image.src;
// }
// equipSlot.addEventListener('dragover', dragOverWeapon);
// equipSlot.addEventListener('drop', dropWeapon);

//DOM Attribute
//ดึงข้อมูลมาใช้
// const Img = document.querySelector('.Img');
// const Link = document.querySelector('.Link');
// const Textinput = document.querySelector('.Textinput');
// console.log(Img.src);
// console.log(Link.href);
// console.log(Textinput.value);
//if input value+ in Textinput do different(custom attribute)
//classic
// console.log(textInput.getAttribute('value2'));
// textInput.setAttribute('attributeที่ต้องการเปลี่ยน','เนื้อหาที่ต้องการเปลี่ยน');
//modern
//ใน html ต้องใส่ data-นำหน้าattributeใหม่
//console.log(textInput.dataset.value2);
//textInput.dataset.value2 = 'เนื้อหาที่ต้องการเปลี่ยน';
// const spoilButtons = document.querySelectorAll('.spoil-button');
// function spoilClick(event) {
//   const messageId = event.target.dataset.messageId;
//   const message = document.querySelector('#' + messageId);
//   message.classList.toggle('show');
// }

// spoilButtons.forEach((button) => {
//   button.addEventListener('click', spoilClick);
// });

//DOM Modify
const todoTitle = document.querySelector('.todo-title');
const addTodoButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');

function removeTodo(event) {
  event.target.parentNode.remove();
}
function addTodo() {
  // todo
  const todo = document.createElement('div');
  todo.classList.add('todo');

  // text
  const text = document.createElement('h3');
  text.innerHTML = todoTitle.value;

  // button
  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add('remove-todo');
  button.innerHTML = 'ลบ';
  button.addEventListener('click', removeTodo);

  // text, button => todo
  todo.append(text, button);

  // todo => todo list
//   todoList.append(todo);
  todoList.prepend(todo);
}
addTodoButton.addEventListener('click', addTodo);