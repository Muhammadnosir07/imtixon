var elCar = document.querySelector('.car');
var elNon__text = document.querySelector('.non__text');
var elBox1 = document.querySelector('.box1');
var elBox2 = document.querySelector('.box2');
var elBox3 = document.querySelector('.box3');
var elSize = document.querySelector('size');
var elRaz = document.querySelector('.raz');
var elBr = document.querySelector('.br');
var elP1 = document.querySelector('.inp1');
var elP2 = document.querySelector('.inp2');
var elP3 = document.querySelector('.inp3');
var elP4 = document.querySelector('.inp4');
var elP5 = document.querySelector('.inp5');
var elP6 = document.querySelector('.inp6');
var elP7 = document.querySelector('.inp7');
var elP8 = document.querySelector('.inp8');
var elOm = document.querySelector('.om');
var elOm2 = document.querySelector('.om2');
var elOm3 = document.querySelector('.om3');
var elExt = document.querySelector('.ext');
var elExt1 = document.querySelector('.ext1');
var elInp1 = document.querySelector('.inp1');
var elInp2 = document.querySelector('.inp2');
var elCars = document.querySelector('#cars');
var elCar1 = document.querySelector('.car1');
var elCar2 = document.querySelector('.car2');
var elCar3= document.querySelector('.car3');
var elBtn = document.querySelector('.btn')



elCars.addEventListener("change", function () {
   elBr.textContent = elCars.value;
 }),
elBox1.addEventListener('click', function () {
      elRaz.textContent = 25+'cm';
}),
elBox2.addEventListener('click', function () {
      elRaz.textContent = 30+'cm';
}),
elBox3.addEventListener('click', function () {
      elRaz.textContent = 35+'cm';
})
elP1.addEventListener('click',function(){
elOm.textContent = '+Pomidor'
})
elP2.addEventListener('click',function(){
   elOm2.textContent = '+Kurka go`shti'
})
elP3.addEventListener('click',function(){
   elOm3.textContent = '+Zaytun'
})
elP4.addEventListener('click',function(){
   elOm.textContent = '+Tuzlangan bodring'
})
elP5.addEventListener('click',function(){
   elOm2.textContent = '+Qo`ziqorin'
})
elP6.addEventListener('click',function(){
   elOm3.textContent = '+Qazi'
})
elP7.addEventListener('click',function(){
   elExt.textContent = '+Achiq'
})
elP8.addEventListener('click',function(){
   elExt1.textContent = '+Pishloq'
})





elBtn.addEventListener('click',function(){
   elCars.value
})