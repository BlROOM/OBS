const leftEl=document.querySelector('.inner.left');
const middleEl=document.querySelector('.inner.middle');
const rightEl=document.querySelector('.inner.right');

leftEl.addEventListener('click', function() {
  location.href='../left.html';
});
middleEl.addEventListener('click', function() {
  location.href='../middle.html';
});
rightEl.addEventListener('click', function() {
  location.href='../right.html';
});

// const innerEls=document.querySelectorAll('.inner');

// innerEls.forEach(function(innerEl){
//     innerEl.addEventListener('mouseover',function(){
//       innerEl.classList.add('hover');
//       innerEl.addEventListener('mouseout',function(){
//       innerEl.classList.remove('hover');
//       });
//   });
// });

$(document).ready(function(){
  $('.inner').on('mouseenter',function(){
    $('.inner').not(this).css('opacity','0.7');
  });
  $('.inner').on('mouseleave',function(){
    $('.inner').css('opacity','1');
  });
});


