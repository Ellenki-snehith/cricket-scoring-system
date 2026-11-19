
document.addEventListener("DOMContentLoaded", function () {

    // Add player form validation

    const addForm = document.getElementById("addPlayerForm");

    if (addForm) {

        addForm.addEventListener("submit", function (event) {

            const name = document.querySelector(
                '[name="playerName"]'
            ).value.trim();

            const age = Number(document.querySelector(
                '[name="age"]'
            ).value);

            if (name.length < 2) {
                alert("Player name must contain at least 2 characters");
                event.preventDefault();
                return;
            }

            if (age < 15 || age > 60) {
                alert("Enter a valid player age");
                event.preventDefault();
                return;
            }

        });
    }


    // Delete player confirmation

    const deleteForm = document.getElementById("deletePlayerForm");

    if (deleteForm) {

        deleteForm.addEventListener("submit", function (event) {

            const confirmDelete = confirm(
                "Are you sure you want to delete this player?"
            );

            if (!confirmDelete) {
                event.preventDefault();
            }

        });
    }


    // Match configuration validation

    const matchForm = document.getElementById("matchConfigForm");

    if (matchForm) {

        matchForm.addEventListener("submit", function (event) {

            const overs = document.querySelector(
                '[name="overs"]'
            ).value;

            const allowedOvers = ["2", "5", "15"];

            if (!allowedOvers.includes(overs)) {
                alert("Please select 2, 5 or 15 overs");
                event.preventDefault();
            }

        });
    }

});
