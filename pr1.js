let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

// result... game over...
let result = document.querySelector("center");

// main game...
let turn = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        // first...X
        if (turn == true) {
            // box.innerHTML = "<p>X</p>";
            box.textContent = "X";
            // console.log);
            turn = false;
            let bx1 = document.querySelector("#bx1");
            let bxx1 = bx1.textContent;
            let bx2 = document.querySelector("#bx2");
            let bxx2 = bx2.textContent;
            let bx3 = document.querySelector("#bx3");
            let bxx3 = bx3.textContent;
            let bx4 = document.querySelector("#bx4");
            let bxx4 = bx4.textContent;
            let bx5 = document.querySelector("#bx5");
            let bxx5 = bx5.textContent;
            let bx6 = document.querySelector("#bx6");
            let bxx6 = bx6.textContent;
            let bx7 = document.querySelector("#bx7");
            let bxx7 = bx7.textContent;
            let bx8 = document.querySelector("#bx8");
            let bxx8 = bx8.textContent;
            let bx9 = document.querySelector("#bx9");
            let bxx9 = bx9.textContent;

            if(bxx1=="X" && bxx2=="X" && bxx3=="X"){
                result.innerHTML = "<br><div style='background-color: aqua; color: red; margin-top: 50px;'><h1>Gave Over</h1>"+"<h1>X -> Won the Match..</h1></div>";
            }
            else if(bxx4=="X" && bxx5=="X" && bxx6=="X"){
                result.innerHTML = "<br><div style='background-color: aqua; color: red; margin-top: 50px;'><h1>Gave Over</h1>"+"<h1>X -> Won the Match..</h1></div>";
            }
            else if(bxx7=="X" && bxx8=="X" && bxx9=="X"){
                result.innerHTML = "<br><div style='background-color: aqua; color: red; margin-top: 50px;'><h1>Gave Over</h1>"+"<h1>X -> Won the Match..</h1></div>";
            }
            else if(bxx1=="X" && bxx4=="X" && bxx7=="X"){
                result.innerHTML = "<br><div style='background-color: aqua; color: red; margin-top: 50px;'><h1>Gave Over</h1>"+"<h1>X -> Won the Match..</h1></div>";
            }
            else if(bxx2=="X" && bxx5=="X" && bxx8=="X"){
                result.innerHTML = "<br><div style='background-color: aqua; color: red; margin-top: 50px;'><h1>Gave Over</h1>"+"<h1>X -> Won the Match..</h1></div>";  
            }
            else if(bxx3=="X" && bxx6=="X" && bxx9=="X"){
                result.innerHTML = "<br><div style='background-color: aqua; color: red; margin-top: 50px;'><h1>Gave Over</h1>"+"<h1>X -> Won the Match..</h1></div>";
            }
            else if(bxx1=="X" && bxx5=="X" && bxx9=="X"){
                result.innerHTML = "<br><div style='background-color: aqua; color: red; margin-top: 50px;'><h1>Gave Over</h1>"+"<h1>X -> Won the Match..</h1></div>";
            }
            else if(bxx3=="X" && bxx5=="X" && bxx7=="X"){
                result.innerHTML = "<br><div style='background-color: aqua; color: red; margin-top: 50px;'><h1>Gave Over</h1>"+"<h1>X -> Won the Match..</h1></div>";
            }
        }
        // second.. O
        else if (turn == false) {
            // box.innerHTML = "<p>O</p>";
            // turn=true;
            box.textContent = "O";
            turn = true;

            let bx1 = document.querySelector("#bx1");
            let bxx1 = bx1.textContent;
            let bx2 = document.querySelector("#bx2");
            let bxx2 = bx2.textContent;
            let bx3 = document.querySelector("#bx3");
            let bxx3 = bx3.textContent;
            let bx4 = document.querySelector("#bx4");
            let bxx4 = bx4.textContent;
            let bx5 = document.querySelector("#bx5");
            let bxx5 = bx5.textContent;
            let bx6 = document.querySelector("#bx6");
            let bxx6 = bx6.textContent;
            let bx7 = document.querySelector("#bx7");
            let bxx7 = bx7.textContent;
            let bx8 = document.querySelector("#bx8");
            let bxx8 = bx8.textContent;
            let bx9 = document.querySelector("#bx9");
            let bxx9 = bx9.textContent;


            if(bxx1=="O" && bxx2=="O" && bxx3=="O"){
                result.innerHTML = "<br><div style='background-color: aqua; color: red; margin-top: 50px;'><h1>Gave Over</h1>"+"<h1>O -> Won the Match..</h1></div>";
            }
            else if(bxx4=="O" && bxx5=="O" && bxx6=="O"){
                result.innerHTML = "<br><div style='background-color: aqua; color: red; margin-top: 50px;'><h1>Gave Over</h1>"+"<h1>O -> Won the Match..</h1></div>";
            }
            else if(bxx7=="O" && bxx8=="O" && bxx9=="O"){
                result.innerHTML = "<br><div style='background-color: aqua; color: red; margin-top: 50px;'><h1>Gave Over</h1>"+"<h1>O -> Won the Match..</h1></div>";
            }
            else if(bxx1=="O" && bxx4=="O" && bxx7=="O"){
                result.innerHTML = "<br><div style='background-color: aqua; color: red; margin-top: 50px;'><h1>Gave Over</h1>"+"<h1>O -> Won the Match..</h1></div>";
            }
            else if(bxx2=="O" && bxx5=="O" && bxx8=="O"){
                result.innerHTML = "<br><div style='background-color: aqua; color: red; margin-top: 50px;'><h1>Gave Over</h1>"+"<h1>O -> Won the Match..</h1></div>";  
            }
            else if(bxx3=="O" && bxx6=="O" && bxx9=="O"){
                result.innerHTML = "<br><div style='background-color: aqua; color: red; margin-top: 50px;'><h1>Gave Over</h1>"+"<h1>O -> Won the Match..</h1></div>";
            }
            else if(bxx1=="O" && bxx5=="O" && bxx9=="O"){
                result.innerHTML = "<br><div style='background-color: aqua; color: red; margin-top: 50px;'><h1>Gave Over</h1>"+"<h1>O -> Won the Match..</h1></div>";
            }
            else if(bxx3=="O" && bxx5=="O" && bxx7=="O"){
                result.innerHTML = "<br><div style='background-color: aqua; color: red; margin-top: 50px;'><h1>Gave Over</h1>"+"<h1>O -> Won the Match..</h1></div>";
            }
            

        }


    })
})

// reset button..
resetBtn.addEventListener("click", () => {
    boxes.forEach((b1) => {
        b1.innerHTML = "<p></p>";

    })
})







