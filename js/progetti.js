document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn");
    const groups = document.querySelectorAll(".project-group");
    const cards = document.querySelectorAll(".project-card");

    groups.forEach(function (group) {
        group.style.display = "block";
    });

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const filter = button.getAttribute("data-filter");

            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            groups.forEach(function (group) {
                if (filter === "all" || group.classList.contains(filter)) {
                    group.style.display = "block";
                    group.style.opacity = "1";
                    group.style.transform = "translateY(0)";
                } else {
                    group.style.display = "none";
                }
            });
        });
    });

    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            const title = card.querySelector("h3").innerText;
            const description = card.querySelector("p").innerText;
            const year = card.getAttribute("data-year");

            openModal(title, description, year);
        });
    });
});

function openModal(title, description, year) {
    const oldModal = document.querySelector(".modal-overlay");

    if (oldModal) {
        oldModal.remove();
    }

    const modal = document.createElement("div");
    modal.className = "modal-overlay";

    modal.innerHTML = `
        <div class="modal-box">
            <button class="modal-close" type="button">&times;</button>
            <span class="modal-year">${year}</span>
            <h2>${title}</h2>
            <p>${description}</p>
            <div class="modal-extra">
                <h3>Competenze sviluppate</h3>
                <ul>
                    <li>Organizzazione del lavoro</li>
                    <li>Capacità di collaborazione</li>
                    <li>Uso della tecnologia</li>
                    <li>Collegamento tra scuola e realtà</li>
                    <li>Crescita personale e scolastica</li>
                </ul>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector(".modal-close").addEventListener("click", function () {
        modal.remove();
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.remove();
        }
    });

    document.addEventListener("keydown", function closeWithEsc(e) {
        if (e.key === "Escape") {
            modal.remove();
            document.removeEventListener("keydown", closeWithEsc);
        }
    });
}
