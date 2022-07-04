function nombreOnClick(){
    let name = document.getElementById("name").value;
    if (name == ''){
        alert('Please enter your name.')
    }else{
        document.getElementById("greetings").innerHTML = 'Hi ' + name + ', great to see you!';
        document.getElementById("name").value = '';
    }
}
