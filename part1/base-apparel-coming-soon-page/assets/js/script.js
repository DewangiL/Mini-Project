const form = document.getElementById("email-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      validateEmail();
    });

    function validateEmail() {
        const inputField = document.getElementById("email");
        const value = inputField.value;
        const pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
        const icon = document.querySelector(".error");
        const errorMsg = document.querySelector(".error-msg");

        if (!pattern.test(value)) {
            inputField.classList.add("input-error");
            icon.classList.remove("invisible");
            errorMsg.classList.remove("invisible");
        } else {
            inputField.classList.remove("input-error");
            icon.classList.add("invisible");
            errorMsg.classList.add("invisible");
            form.submit();
            form.reset();
        }
    }