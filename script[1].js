const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".animal-card");

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;

    cards.forEach(card => {
      card.style.display =
        filter === "all" || card.dataset.status === filter ? "" : "none";
    });
  });
});
