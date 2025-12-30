document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".card-form");
  const list = document.querySelector(".card-select-option");
  const text = document.querySelector(".card-select span");
  const options = document.querySelectorAll(".card-option");
  const rows = document.querySelectorAll("tbody tr");

  form.addEventListener("click", (data) => {
    data.stopPropagation();
    list.classList.toggle("active");
  });

  options.forEach((opt) => {
    opt.addEventListener("click", (data) => {
      data.stopPropagation();

      const count = Number(opt.textContent);
      text.textContent = opt.textContent;
      list.classList.remove("active");

      rows.forEach((row, i) => {
        if (i === 0) return;
        row.style.display = i <= count ? "" : "none";
      });
    });
  });
});



