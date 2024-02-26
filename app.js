let input = document.getElementById("inputBox");
let buttons =document.querySelectorAll
("button");

let string = ""
let arr = Array.from(buttons);
arr.forEach(button => {
     button.addEventListener("click", (e) =>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;

        }

        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;

        }

        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else{
        string += e.target.innerHTML;
        input.value = string;
        }

     })
})

// for x2 and x3 powers:
arr.forEach(button => {
    button.addEventListener("click", (e) => {
         if (e.target.innerHTML == "x²") {
            string = Math.pow(parseFloat(string), 2);
            input.value = string;
        }

        else if (e.target.innerHTML == "x³") {
            string = Math.pow(parseFloat(string), 3);
            input.value = string;
        }
    });
});

// for Sin,Cos,Tan, Square root and Cube root:
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "sin") {
            string = Math.sin(parseFloat(string));
            input.value = string;
        }

        else if (e.target.innerHTML == "cos") {
            string = Math.cos(parseFloat(string));
            input.value = string;
        }

        else if (e.target.innerHTML == "tan") {
            string = Math.tan(parseFloat(string));
            input.value = string;
        }

        else if (e.target.innerHTML == "√") {
            string = Math.sqrt(parseFloat(string));
            input.value = string;
        }

        else if (e.target.innerHTML == "∛") {
            string = Math.pow(parseFloat(string), 1 / 3);
            input.value = string;
        }
    });
});