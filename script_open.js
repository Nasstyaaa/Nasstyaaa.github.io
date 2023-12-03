var open = document.querySelector(".open");
open.onclick = function(){
    open.classList.add("active");
    open.style.display = "none";
}

var close = document.querySelector(".close");
close.onclick = function(){
    open.classList.remove("active");
    open.style.display = "block";
}

var add = document.querySelector(".close1");
add.onclick = function (){
    const add = document.querySelector(".add");

    var data = prompt("Введите дату события");
    const re = new RegExp('([0][1-9]|[10-31])[.]([0][1-9]|[10-12])');
    while(!re.test(data)){
        data = prompt("Дата введена некорректно, попробуйте ещё раз");
    }

    var dropdown = document.querySelector(".dropdown-content");
    let div = document.createElement("div");
    div.classList.add("events");
    let date = document.createElement("p");
    date.classList.add("data");
    date.textContent = data;
    div.appendChild(date);
    dropdown.removeChild(add);
    dropdown.appendChild(div);

    var tekst = prompt("Введите название события");
    var tek = "«" + tekst[0].toUpperCase() + tekst.substring(1, tekst.length) + "»";
    let event = document.createElement("p");
    event.classList.add("event");
    event.textContent = tek;
    dropdown.appendChild(add);
    div.appendChild(event);
}