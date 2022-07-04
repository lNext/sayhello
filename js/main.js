function nombreOnClick(){
    let name = document.getElementById("name").value;
    /* let message = 'Hi ' + name; */

    if (name == ''){
        alert('Please enter your name.')
    }else{
        document.getElementById("greetings").innerHTML = 'Hi ' + name + ', great to see you!';
    }
}