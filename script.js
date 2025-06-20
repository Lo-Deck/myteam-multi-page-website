


const btnMenu = document.querySelector('.button-menu');

let isMenuClicked = false;

btnMenu.addEventListener('click', () => {//open menu

    isMenuClicked = !isMenuClicked;

    if(isMenuClicked){
        document.querySelector('.menu').style.display = 'block';
        document.querySelector('.background').style.display = 'block';
        btnMenu.querySelector('img').src = './assets/icon-close.svg';
    }
    else{

        document.querySelector('.menu').style.display = 'none';
        document.querySelector('.background').style.display = 'none';
        btnMenu.querySelector('img').src = './assets/icon-hamburger.svg';
    }

});



const btnInfo = document.querySelectorAll('.button-info');
const member = document.querySelectorAll('.member');

btnInfo.forEach( (item, index) => {

    item.addEventListener('click', () => {//open info avatar about page

        if(window.getComputedStyle(member[index].querySelector('.container-member-avatar')).getPropertyValue('display') === 'block'){
            member[index].querySelector('.container-member-avatar').style.display = 'none';
            member[index].querySelector('.container-member-text').style.display = 'block';
        }
        else{
            member[index].querySelector('.container-member-avatar').style.display = 'block';
            member[index].querySelector('.container-member-text').style.display = 'none';
        }

    });

} );



/* FORM */


if(document.querySelector('.contact')){

    const myForm = document.querySelector('#myForm');
    const formInputs = myForm.querySelectorAll('input, textarea'); 

    formInputs.forEach( (input, index) => {

        input.addEventListener('input', () => {
            input.classList.remove('error-input');
            document.querySelectorAll('.container-input span.error')[index].textContent = '';

        });

    });


    function validateInput(input, index){

        if (input.validity.valueMissing) {
            input.classList.add('error-input');
            document.querySelectorAll('.container-input span.error')[index].textContent = `This field is required`;
            return false;
        }

        if (input.type === 'email' && input.validity.typeMismatch) {
            input.classList.add('error-input');
            document.querySelectorAll('.container-input span.error')[index].textContent = `Please enter a valid email address`;
            return false;
        }

        if (input.validity.tooShort) {
            input.classList.add('error-input');
            document.querySelectorAll('.container-input span.error')[index].textContent = `Input too short, minimum ${input.minLength} characters needed.`;
            return false;
        }

        if (input.validity.tooLong) {
            input.classList.add('error-input');
            document.querySelectorAll('.container-input span.error')[index].textContent = `Input too long, maximum ${input.maxLength} characters allowed.`;
            return false;
        }

        input.classList.remove('error-input');
        document.querySelectorAll('.container-input span.error')[index].textContent = '';
        return true;

    }            


    myForm.addEventListener('submit', (event) => {

        formInputs.forEach( (input, index) => {

            if (!validateInput(input, index)) {
                event.preventDefault(); 
            }
            else{
                console.log('form submit');
            }

        });

    });
    
}


