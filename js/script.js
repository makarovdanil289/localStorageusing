window.addEventListener('DOMContentLoaded', function() {

    let checkbox = document.getElementById('rememberMe');
        

    if(localStorage.getItem('isChecked') === 'true') {
        checkbox.checked = true;
    }
    
    checkbox.addEventListener('click', function(){
        localStorage.setItem('isChecked', true);
    })

    let person = {
        name: 'Alex',
        age: 25,
        tech: ['mobile', 'notebook']
    }

    let serializesPerson = JSON.stringify(person);
    localStorage.setItem('Alex', serializesPerson);

    console.log(JSON.parse(localStorage.getItem('Alex')));
});