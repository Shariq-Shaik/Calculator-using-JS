let display = document.getElementById('display');
function input(value){
    if(display.value == '0' && display.value !=='.'){
        display.value = value;
    }else{
        display.value+=value;
    }
}
function clearDisplay(){
    display.value = '0';
}
function deleteLast(){
    if(display.value.lenngth>1){
        display.value = display.value.slice(0,-1);
    }else{
        display.value = '0';
    }
}
function calculate(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = 'Error';
    }
}