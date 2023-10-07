let screen=document.getElementById("screen1"); 
let operator;
let screenValue;
let tempValue;

function setScreen(value){   
    if (value == "." && screen.value.includes(".")){
    return;
    }

    if(Number(screen.value))
    {
        if( operator && tempValue==screen.value )
            {
                screen.value=value;
                tempValue=null;
            }else{
                screen.value+=value;}
    } 
    else if((screen.value).includes(".") || value=="." )
    {screen.value+=value;}
    else{
    screen.value=value;
        }}

function setOperator(value)
{
    operator=value;
    screenValue=screen.value;
    tempValue=screen.value;
}
    
function calculation()
{
    switch(operator)
    {
        case "+":
            screen.value=Number(screenValue)+Number(screen.value);
            break;
        case "-":
            screen.value=Number(screenValue)-Number(screen.value);
            break;
        case "*":
            screen.value=Number(screenValue)*Number(screen.value);
            break;
        case "÷":
            screen.value=Number(screenValue)/Number(screen.value);
            break;
    }operator=null;
}

function currentEntry()
{  if((screen.value).length>1){
    screen.value=screen.value.slice(0,-1);
    }
    else
    {
    screen.value="0";
    }
}

function negative()
{
    screen.value = -1 * screen.value;
}