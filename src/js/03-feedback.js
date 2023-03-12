const formData = document.querySelector(".feedback-form");

import throttle from "lodash.throttle";

const KEYNAME = "feedback-form-state";
const feedbackFormValues = localStorage.getItem(KEYNAME);

if (feedbackFormValues) {
    try {
        const storedValues = JSON.parse(feedbackFormValues);
        formData.elements.email.value = storedValues.email;
        formData.elements.message.value = storedValues.message;
    } catch (error) {
        console.error("Get state error: ", error.message);
    }
}

function handleInput() {
    const { email, message } = formData.elements;
    localStorage.setItem(KEYNAME, JSON.stringify({ email: email.value, message: message.value }));
}

function handleSubmit(ev) {
    ev.preventDefault();
    const { email, message } = formData.elements;
    console.log({ email: email.value, message: message.value });
    formData.reset();
    localStorage.removeItem(KEYNAME);
}

formData.addEventListener("input", throttle(handleInput, 500));

formData.addEventListener("submit", handleSubmit);
