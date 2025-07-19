let display=document.getElementById('display')
function showInDisplay(x){
    display.value+=x
}
function clearDisplay(){
    display.value=''
}
function calculate(){
    if(display.value==''){
       alert('Expression is empty.')
    }
    else{
        display.value=eval(display.value)
    }
}