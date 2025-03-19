document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const projectContent = this.parentElement.nextElementSibling;
            const isVisible = projectContent.style.display === "block";

            // Hide all project
            document.querySelectorAll(".project-content").forEach(content => {
                content.style.display = "none";
            });
            
            // Initialize all buttons to "+"
            document.querySelectorAll(".toggle-btn").forEach(btn => {
                btn.textContent = "+";
            });

            // Change the status of the currently clicked element
            if (!isVisible) {
                projectContent.style.display = "block";
                this.textContent = "−";
            }
        });
    });
});
