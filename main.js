// // Sélection de la div à faire apparaître
   const myPop = document.querySelector('.show');
   const contaiN = document.querySelector('.more');
   let closePip = document.getElementById('close-btn');


   myPop.addEventListener('click',() => {
       contaiN.classList.add('active');
 });

  closePip.addEventListener('click', () => {
     contaiN.classList.remove('active');
  });

  const myPop1 = document.querySelector('.show1');
  const contaiNp = document.querySelector('.more1');
  let closeP = document.getElementById('close-btn1');


  myPop1.addEventListener('click',() => {
      contaiNp.classList.add('active1');
});

 closeP.addEventListener('click', () => {
    contaiNp.classList.remove('active1');
 });
 
 const myPop2 = document.querySelector('.show2');
 const contaiNp1 = document.querySelector('.more2');
 let closeP1 = document.getElementById('close-btn2');


 myPop2.addEventListener('click',() => {
     contaiNp1.classList.add('active2');
});

closeP1.addEventListener('click', () => {
   contaiNp1.classList.remove('active2');
});
const myPop3 = document.querySelector('.show3');
 const contaiNp2 = document.querySelector('.more3');
 let closeP2 = document.getElementById('close-btn3');


 myPop3.addEventListener('click',() => {
     contaiNp2.classList.add('active3');
});

closeP2.addEventListener('click', () => {
   contaiNp2.classList.remove('active3');
});




