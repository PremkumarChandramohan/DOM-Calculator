document.body.innerHTML=`<div class="container">
    <h1 style="color:red">Js Calculator!!</h1>
    <label for="Num1">Number 1</label>
    <input type="text" id="num1" placeholder="Enter the number"></br>
    </br>
    <label for="Num1">Number 2</label>
    <input type="text" id="num2" placeholder="Enter the number"></br>
    </br>

    <button id="btn1">+</button>
    <button id="btn2">-</button>
    <button id="btn3">*</button>
    <button id="btn4">/</button>


    <h2 id="result" style="color:green"> </h2>

</div>`

btn1 = document.getElementById('btn1')
plusOperation = function (){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    alert("the plus button is clicked")

    sum = parseInt(num1) + parseInt(num2);

    result = document.getElementById("result");
    result.innerHTML = sum;

}
btn1.addEventListener('click', plusOperation)

//minus operation is done here
btn1 = document.getElementById('btn2')
minusOperation = function (){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    alert("the minus button is clicked")

    difference = parseInt(num1) - parseInt(num2);

    result = document.getElementById("result");
    result.innerHTML = difference;

}
btn1.addEventListener('click', minusOperation)

//multiplication is done here
btn1 = document.getElementById('btn3')
multiplyOperation = function (){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    alert("the multiply button is clicked")

    multiply = parseInt(num1) * parseInt(num2);

    result = document.getElementById("result");
    result.innerHTML = multiply;

}
btn1.addEventListener('click', multiplyOperation)

//division is done here
btn1 = document.getElementById('btn4')
divisionOperation = function (){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    alert("the division button is clicked")

    divide = parseInt(num1) / parseInt(num2);

    result = document.getElementById("result");
    result.innerHTML = divide;

}
btn1.addEventListener('click', divisionOperation)

