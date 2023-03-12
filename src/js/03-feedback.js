const formData = document.querySelector(".feedback-form");

import throttle from "lodash.throttle";

const feedbackFormValues = localStorage.getItem("feedback-form-state");

if (feedbackFormValues) {
    try {
        const storedValues = JSON.parse(feedbackFormValues);
        formData.elements.email.value = storedValues.email;
        formData.elements.message.value = storedValues.message;
    } catch (error) {
        console.error("Get state error: ", error.message);
    }
}

function handleInput(event) {
    const { email, message } = event.currentTarget.elements;
    localStorage.setItem("feedback-form-state", JSON.stringify({ email: email.value, message: message.value }));
}

function handleSubmit(event) {
    event.preventDefault();

    const { email, message } = event.currentTarget.elements;

    console.log({ email: email.value, message: message.value });
    
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}

formData.addEventListener("input", throttle(handleInput, 1500));

formData.addEventListener("submit", handleSubmit);
