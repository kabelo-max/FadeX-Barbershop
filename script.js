// FadeX Barbershop - Part 3
// JavaScript functionality, search, lightbox and form validation

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. SERVICE SEARCH
    // ==========================================

    const searchInput = document.getElementById("service-search");
    const serviceCards = document.querySelectorAll(".service-card");
    const searchMessage = document.getElementById("search-message");

    if (searchInput && serviceCards.length > 0) {

        searchInput.addEventListener("input", function () {

            const searchTerm = searchInput.value.toLowerCase().trim();
            let visibleCount = 0;

            serviceCards.forEach(function (card) {

                const serviceText = card.textContent.toLowerCase();

                if (serviceText.includes(searchTerm)) {
                    card.hidden = false;
                    visibleCount++;
                } else {
                    card.hidden = true;
                }

            });

            if (searchMessage) {

                if (visibleCount === 0) {
                    searchMessage.textContent =
                        "No services found. Please try another search.";
                } else {
                    searchMessage.textContent =
                        visibleCount + " service(s) found.";
                }

            }

        });

    }


    // ==========================================
    // 2. IMAGE LIGHTBOX
    // ==========================================

    const galleryImages = document.querySelectorAll(".gallery-image");

    if (galleryImages.length > 0) {

        const lightbox = document.createElement("div");

        lightbox.id = "lightbox";

        lightbox.innerHTML = `
            <button id="lightbox-close" aria-label="Close image">&times;</button>
            <img id="lightbox-image" alt="">
        `;

        document.body.appendChild(lightbox);

        const lightboxImage = document.getElementById("lightbox-image");
        const closeButton = document.getElementById("lightbox-close");

        galleryImages.forEach(function (image) {

            image.addEventListener("click", function () {

                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;

                lightbox.classList.add("active");

            });

        });

        closeButton.addEventListener("click", function () {
            lightbox.classList.remove("active");
        });

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {
                lightbox.classList.remove("active");
            }

        });

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {
                lightbox.classList.remove("active");
            }

        });

    }


    // ==========================================
    // 3. ENQUIRY FORM VALIDATION
    // ==========================================

    const enquiryForm = document.getElementById("enquiry-form");

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("enquiry-name").value.trim();
            const email = document.getElementById("enquiry-email").value.trim();
            const phone = document.getElementById("enquiry-phone").value.trim();
            const service = document.getElementById("enquiry-service").value;
            const date = document.getElementById("enquiry-date").value;
            const message = document.getElementById("enquiry-message").value.trim();

            const response = document.getElementById("enquiry-response");

            const phonePattern = /^[0-9+\s()-]{7,20}$/;

            if (name.length < 2) {
                response.textContent = "Please enter your full name.";
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                response.textContent = "Please enter a valid email address.";
                return;
            }

            if (!phonePattern.test(phone)) {
                response.textContent = "Please enter a valid phone number.";
                return;
            }

            if (service === "") {
                response.textContent = "Please select a service.";
                return;
            }

            if (date === "") {
                response.textContent = "Please select your preferred date.";
                return;
            }

            if (message.length < 5) {
                response.textContent =
                    "Please provide more information about your enquiry.";
                return;
            }

            response.textContent =
                "Thank you, " + name + "! Your enquiry for " +
                service + " has been checked. We will contact you to confirm availability and pricing.";

            enquiryForm.reset();

        });

    }


    // ==========================================
    // 4. CONTACT FORM VALIDATION
    // ==========================================

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const type = document.getElementById("contact-type").value;
            const message = document.getElementById("contact-message").value.trim();

            const response = document.getElementById("contact-response");

            if (name.length < 2) {
                response.textContent = "Please enter your name.";
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                response.textContent = "Please enter a valid email address.";
                return;
            }

            if (type === "") {
                response.textContent = "Please select a message type.";
                return;
            }

            if (message.length < 10) {
                response.textContent =
                    "Your message must contain at least 10 characters.";
                return;
            }

            const recipient = "info@fadexbarbershop.co.za";

            const subject = encodeURIComponent(
                "FadeX Barbershop - " + type
            );

            const body = encodeURIComponent(
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Message Type: " + type + "\n\n" +
                "Message:\n" + message
            );

            const mailtoLink =
                "mailto:" + recipient +
                "?subject=" + subject +
                "&body=" + body;

            response.textContent =
                "Your message has been validated. Your email application will now open.";

            window.location.href = mailtoLink;

        });

    }


    // ==========================================
    // 5. ACCORDION
    // ==========================================

    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const content = button.nextElementSibling;

            const isOpen = content.classList.contains("open");

            content.classList.toggle("open");

            button.setAttribute("aria-expanded", !isOpen);

        });

    });


    // ==========================================
    // 6. CONSOLE MESSAGE
    // ==========================================

    console.log("FadeX Barbershop Part 3 JavaScript loaded.");

});
