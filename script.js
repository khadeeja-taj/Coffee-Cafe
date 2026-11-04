/* =========================================================
   Fern and Petal Cafe - Assignment JavaScript
   ---------------------------------------------------------
   Each numbered block below matches one task from the
   assignment sheet. Read the comments to understand each one.
   ========================================================= */


/* Wait for the HTML to finish loading before running any code,
   so every element we look for already exists on the page. */
document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       TASK 8: DYNAMIC OPENING STATUS
       new Date().getHours() gives the current hour (0 - 23).
       We open at 8 AM and close at 8 PM (20).
       ===================================================== */
    const statusBanner = document.getElementById("status-banner");
    const currentHour = new Date().getHours();

    if (currentHour >= 8 && currentHour < 20) {
        statusBanner.textContent = "We are Open!";
        statusBanner.style.color = "#9bf0a4";   // green
    } else {
        statusBanner.textContent = "Closed - Open at 8 AM";
        statusBanner.style.color = "#ff9d9d";    // red
    }


    /* =====================================================
       TASK 3: THEME / STYLE SWITCHER (Light / Dark Mode)
       classList.toggle adds the class if missing, removes it
       if present. The "dark-mode" styles live in styles.css.
       ===================================================== */
    const themeToggle = document.getElementById("theme-toggle");

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });


    /* =====================================================
       TASK 2: TABLE ROW HIGHLIGHTING (Order Menu table)
       mouseover = pointer enters the row.
       mouseout  = pointer leaves the row.
       ===================================================== */
    const menuRows = document.querySelectorAll("#menu-table tbody tr");

    menuRows.forEach(function (row) {
        row.addEventListener("mouseover", function () {
            row.style.backgroundColor = "#d9ead3";   // highlight
        });
        row.addEventListener("mouseout", function () {
            row.style.backgroundColor = "";           // back to normal
        });
    });


    /* =====================================================
       TASK 4: INTERACTIVE ORDER TOTAL CALCULATOR
       Every checkbox carries its price in data-price.
       The "change" event fires whenever one is ticked/unticked.
       ===================================================== */
    const orderItems = document.querySelectorAll(".order-item");
    const totalTag = document.getElementById("total");

    function updateTotal() {
        let total = 0;
        orderItems.forEach(function (item) {
            if (item.checked) {
                total += Number(item.dataset.price);  // data-price -> number
            }
        });
        totalTag.textContent = "Total: $" + total;
    }

    orderItems.forEach(function (item) {
        item.addEventListener("change", updateTotal);
    });


    /* =====================================================
       TASK 7: LIVE CATEGORY FILTER
       Each button has data-filter ("all"/"drinks"/"pastries").
       Each row has data-category. We hide rows that don't match.
       ===================================================== */
    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const filter = button.dataset.filter;

            menuRows.forEach(function (row) {
                if (filter === "all" || row.dataset.category === filter) {
                    row.style.display = "";          // show
                } else {
                    row.style.display = "none";      // hide
                }
            });
        });
    });


    /* =====================================================
       TASK 6: "READ MORE" TOGGLE (About Us article)
       We show/hide the extra paragraph and flip the button text.
       ===================================================== */
    const readMoreBtn = document.getElementById("read-more-btn");
    const moreText = document.getElementById("more-text");

    readMoreBtn.addEventListener("click", function () {
        moreText.classList.toggle("hidden");

        if (moreText.classList.contains("hidden")) {
            readMoreBtn.textContent = "Read More";
        } else {
            readMoreBtn.textContent = "Read Less";
        }
    });


    /* =====================================================
       TASK 9: CHARACTER COUNTER (Special requests textarea)
       The "input" event fires on every keystroke.
       remaining = 100 - how many characters typed so far.
       ===================================================== */
    const notes = document.getElementById("special-notes");
    const charCount = document.getElementById("char-count");

    notes.addEventListener("input", function () {
        const remaining = 100 - notes.value.length;
        charCount.textContent = remaining + " characters remaining";
    });


    /* =====================================================
       TASK 1 + TASK 5: FORM SUBMIT + AGE DISCOUNT
       ===================================================== */
    const form = document.querySelector("#book form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const birthYearInput = document.getElementById("birth-year");
    const formMessage = document.getElementById("form-message");
    const discountMessage = document.getElementById("discount-message");

    form.addEventListener("submit", function (e) {

        /* TASK 1: stop the page from refreshing on submit. */
        e.preventDefault();

        const username = nameInput.value.trim();
        const email = emailInput.value.trim();

        /* TASK 1: only show the thank-you message if BOTH are filled. */
        if (username !== "" && email !== "") {
            formMessage.textContent =
                "Thank you for visiting, " + username +
                "! We will contact you at " + email + ".";
            formMessage.style.color = "#315c45";
        } else {
            formMessage.textContent =
                "Please fill in both your name and email.";
            formMessage.style.color = "#c0392b";
            return; // stop here if something is missing
        }

        /* TASK 5: convert birth year text to a number with parseInt,
           calculate age, and show a discount message. */
        const birthYear = parseInt(birthYearInput.value); // "2002" -> 2002
        const currentYear = new Date().getFullYear();       // 2026

        if (!isNaN(birthYear)) {
            const age = currentYear - birthYear;

            if (age <= 25) {
                discountMessage.textContent =
                    "You are " + age + " - you qualify for the STUDENT discount!";
                discountMessage.style.color = "#315c45";
            } else if (age >= 60) {
                discountMessage.textContent =
                    "You are " + age + " - you qualify for the SENIOR discount!";
                discountMessage.style.color = "#315c45";
            } else {
                discountMessage.textContent =
                    "You are " + age + " - no special discount, but welcome!";
                discountMessage.style.color = "#555";
            }
        } else {
            discountMessage.textContent = ""; // no valid year entered
        }
    });

});
