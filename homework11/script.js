// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//

// let form = document.createElement('form');
// let inputName = document.createElement('input');
// let inputAge = document.createElement('input');
// let button = document.createElement('button');
//
// form.setAttribute('name', 'user');
// inputName.setAttribute('name', 'username');
// inputAge.setAttribute('name', 'age');
// button.innerText = 'Add user';
//
// form.append(inputName, inputAge, button);
// document.body.append(form);
//
// button.addEventListener('click', function () {
//     if (user.username.value && user.age.value) {
//         let newUser = `${user.username.value} - ${user.age.value}`
//         localStorage.setItem('user', JSON.stringify(newUser));
//     }
// });

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let form2 = document.createElement('form');
let inputModel = document.createElement('input');
let inputType = document.createElement('input');
let inputVolume = document.createElement('input');
let button2 = document.createElement('button');

form2.setAttribute('name', 'form2');
inputModel.setAttribute('name', 'model');
inputType.setAttribute('name', 'type');
inputVolume.setAttribute('name', 'volume');

button2.innerText = 'Add new car';

form2.append(inputModel, inputType, inputVolume, button2);
document.body.append(form2);

button2.addEventListener('click', function (e) {
    e.preventDefault();
    let cars = JSON.parse(localStorage.getItem('cars')) || [];
    let car = {
        'model' : `${inputModel.value}`,
        'type' : `${inputType.value}`,
        'volume' :`${inputVolume.value}`
    }
    cars.push(car)
    localStorage.setItem('cars', JSON.stringify(cars));
})



