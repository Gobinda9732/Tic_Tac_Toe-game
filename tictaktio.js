let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let msgconttainer = document.querySelector(".msg-container");
let restbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let strike = document.querySelector("#strike");
let player = true;
let winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]


function winner(win){
    let count1 = 0;
    for(let win of winpattern){
        let pos1=boxes[win[0]].innerText;
        let pos2=boxes[win[1]].innerText;
        let pos3=boxes[win[2]].innerText;  
        if(pos1 !=="" && pos2 !=="" && pos3 !==""){
            if(pos1===pos2 && pos2 ===pos3){
                msgconttainer.classList.remove("hide");
                msg.innerText = (`Winner is ${pos1}`);
                for(btn of boxes){
                    btn.disabled = true;
                    count1 += 1;
                    strike.classList.remove("hide")
                    //strike.classList.add("strike-row-1");
                    //console.log(winpattern[1]);
                    if(win == winpattern[0]){
                        strike.classList.add("strike-row-1");
                    }
                    else if(win == winpattern[1]){
                        strike.classList.add("strike-row-2");   
                    }
                    else if(win == winpattern[2]){
                        strike.classList.add("strike-row-3");
                    }
                    else if(win == winpattern[3]){
                        strike.classList.add("strike-col-1");
                    }
                    else if(win == winpattern[4]){
                        strike.classList.add("strike-col-2");
                    }
                    else if(win == winpattern[5]){
                        strike.classList.add("strike-col-3");
                    }
                    
                    else if(win == winpattern[6]){
                        strike.classList.add("strike-digonal-2");
                    }
                    else{
                        strike.classList.add("strike-digonal-1");
                    }
                }
            }

        }
    }
    let count=0;
    for(btn of boxes){
        if(btn.innerText === ""){
            count += 1;
        }
    }
    if(count === 0 && count1 ===0 ){
        msg.innerText = `Match is tie`;
        msgconttainer.classList.remove("hide");
    }
    // for(win of winpattern){
    //     console.log(win[1]);
    // }
}


for(let btn of boxes){
    btn.addEventListener("click",()=>{
        if(player){
            btn.innerText = "O";
            btn.disabled = true;
            player = false;
        }
        else{
            btn.innerText = "X";
            btn.disabled = true;
            player = true;
        }
        winner();
        // count++;
        // if(count===9 && !success){
        //     msg.innerText = `Match is tie`;
        //     msgconttainer.classList.remove("hide");

        // }
    })
}




function btnimplement(){
        for(btn of boxes){
            btn.innerText = "";
            btn.disabled = false;
            strike.classList.add("hide");
        }
        msgconttainer.classList.add("hide")
}
restbtn.addEventListener("click",()=>{
    btnimplement();
})

newbtn.addEventListener("click",btnimplement)