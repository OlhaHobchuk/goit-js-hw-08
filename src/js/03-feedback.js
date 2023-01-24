import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}

const {form, input, textarea} = refs;
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFieldInput, 500));

 
function onFormSubmit(event) {
    const object = {
        mail: event.currentTarget.elements.email.value,
        message: event.currentTarget.elements.message.value,
    };

    console.log(object);

    event.preventDefault();
    localStorage.removeItem("feedback-form-state")
    form.reset();
}

function onFieldInput(event) {

formData[event.target.name] = event.target.value

const valueToSave = JSON.stringify(formData);
localStorage.setItem("feedback-form-state", valueToSave);
   
}

function formRenew() {
    const savedFields = localStorage.getItem("feedback-form-state");
    if (savedFields) {
        const objectData = JSON.parse(savedFields);
        input.value = objectData.email;
        textarea.value = objectData.message;
    }
}

formRenew()