document.addEventListener("DOMContentLoaded", () => {

    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    // Cargar datos guardados
    checkboxes.forEach(cb => {
        const id = cb.dataset.id;
        const saved = localStorage.getItem(id);

        if (saved === "true") {
            cb.checked = true;
        }
    });

    // Guardar cambios
    checkboxes.forEach(cb => {
        cb.addEventListener("change", () => {
            const id = cb.dataset.id;
            localStorage.setItem(id, cb.checked);
        });
    });
});
