// This function accepts values which you type ... 
function display(val){
    document.getElementById('result').value += val
    return val

}

// This function will solve the given expression in input
function solve(){
    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y
    return y

}

// This function will clear the input screen
function clearScreen(){
    document.getElementById('result').value = ''
}




