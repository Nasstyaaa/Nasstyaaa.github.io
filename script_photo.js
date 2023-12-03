//эффект на фото
const boxes = document.querySelectorAll('.photo');

const CheckBoxes = () => {
    const trig = (window.innerHeight/5) * 3;
    for (const box of boxes){
        const topOfBox = box.getBoundingClientRect().top;
        if(topOfBox < trig){
            box.classList.add('active');
        }
    }
};

CheckBoxes();
window.addEventListener('scroll', CheckBoxes);


//кнопки
//сердечки
var btns = document.querySelectorAll('.btn')

for (let btn of btns){
    btn.onclick  = function() {
    if(btn.style.filter == `grayscale(1)` || btn.style.filter == ``){
        btn.style.filter = `hue-rotate(160deg) brightness(1.5)`;
    }
    else{
        btn.style.filter = `grayscale(1)`;
    }
}};


//подсчет
document.getElementById('cart_num').innerHTML = '0';
var product = new Object();
product.value = 0;

var btns = document.querySelectorAll('.btn')
for (let btn of btns){
  btn.addEventListener('click', function(e) {
    if(btn.style.filter == `hue-rotate(160deg) brightness(1.5)`){
        product.value = product.value + 1;
        document.getElementById('cart_num').innerHTML = product.value;
        if(product.value == 12)
            document.querySelector(".circle").classList.add('active');
    }
    else{
        document.querySelector(".circle").classList.remove('active');
        product.value = product.value - 1;
        document.getElementById('cart_num').innerHTML = product.value;
    }
  })
};





