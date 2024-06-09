const input_frm = document.querySelector(".input-container form");

input_frm.addEventListener("submit", (e) => {
    event.preventDefault()
    let user_input = document.querySelector("form input");
    console.log(user_input.value);
    user_input.value = "";
});