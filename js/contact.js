document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value;
        const inquiry = document.getElementById("inquiry").value;
        const details = document.getElementById("details").value.trim();

        if (!name || !email || !service || !inquiry) {
            alert("Please fill out all required fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const formData = {
            name,
            email,
            service,
            inquiry,
            details,
        };

        console.log("Form Submitted:", formData);
        alert("Thank you for reaching out! We will get back to you soon.");

        form.reset();
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});