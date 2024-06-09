const input_frm = document.querySelector(".input-container form");

input_frm.addEventListener("submit", (e) => {
    event.preventDefault()
    
    // Create element
    function create_element(html) {
        const template = document.createElement("template");
        template.innerHTML = html.trim();
        return template.content.firstElementChild;
    };

    

    // Ceate element with user input
    let user_input = document.querySelector("form input");
    
    const user_output = create_element(`
        <div class="output">
            <p>${user_input.value}</p>
            <button class="delete-btn">Delete</button>
        </div>
    `);

    

    // Inject to DOM
    const output_container = document.querySelector(".output-container");
    
    output_container.appendChild(user_output);
    
    // Reset input field
    user_input.value = "";
});