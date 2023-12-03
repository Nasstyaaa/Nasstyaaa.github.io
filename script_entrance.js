function randomLetter(){
    var result = '';
    var words = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    var max_position = words.length - 1;
            for(i = 0; i < 5; i++) {
                position = Math.floor( Math.random() * max_position );
                result = result + words.substring(position, position + 1);
            }
    return result;
}
var letter = randomLetter();
document.getElementById('antispam').innerHTML = letter;

function randomNumber(m,n){
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor( Math.random() * (n - m + 1) ) + m;
};
var aspmA = randomNumber(1,23);
var aspmB = randomNumber(1,23);

const input = document.getElementById("repeat");
const button = document.getElementById("entrance");
button.disabled = true;
var counter = 0;

function isEmpty(obj){
    if (obj.trim() == '') 
        return true;
  return false;
}

input.addEventListener("blur", function() {
    if(isEmpty(input.value))
        alert("Вы ничего не ввели");
    else if((input.value == letter) || (input.value == aspmA+aspmB))
     button.disabled = !this.value.length;
    else if(counter == 0){
        document.getElementById('antispam').innerHTML = aspmA + ' + ' + aspmB + ' = ' + '?';
        input.placeholder = "Посчитайте";
        counter++;
    }
    else
        alert("Ошибка");
})

form.onsubmit = function(){
    alert("Вы успешно зарегистрированы");
}