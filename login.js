const body = document.querySelector('body');
const form = document.querySelector('form');

const user = document.querySelector(`input[type='text']`);
const password = document.querySelector(`input[type='password']`);

const alert = document.querySelector('.alert');
const empt1 = document.querySelector('#empt1')
const empt2 = document.querySelector('#empt2')

const login = document.querySelector(`input[type='submit']`);
const register = document.querySelector('#register');


login.addEventListener('click', function(e){
    e.preventDefault();

        const content = document.createElement('h1')

        const pic = document.createElement('div');
        const image = document.createElement('img');
        image.setAttribute('src', 'wallpaper/road.jpg');
        image.setAttribute('alt', 'An image of a login');
        image.setAttribute('id', 'image');


        if(user.value.length < 8 && password.value.length < 4){
            empt1.innerHTML = 'Username should be 8 characters or more';
            empt2.innerHTML = 'Password should be 4 characters or more';
        }
        else if(user.value.length < 8){
            empt1.innerHTML = 'Username should be 8 characters or more';
            empt2.innerHTML =' '
        }
        else if(password.value.length < 4){
            empt1.innerHTML =' '
            empt2.innerHTML = 'Password should be 4 characters or more';
        }
        else{
            content.innerHTML = `Welcome ${user.value}, we appreciate your visit.`;
            pic.appendChild(image);
            body.replaceChild(content, form);
            content.appendChild(pic);        
        }
})