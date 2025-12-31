document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".card-form");
  const list = document.querySelector(".card-select-option");
  const text = document.querySelector(".card-select span");
  const options = document.querySelectorAll(".card-option");
  const rows = document.querySelectorAll("tbody tr");

  form?.addEventListener("click", (e) => {
    e.stopPropagation();
    list.classList.toggle("active");
  });

  options.forEach((opt) => {
    opt.addEventListener("click", (e) => {
      e.stopPropagation();

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

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tab").forEach(initTabs);

  function initTabs(tab) {
    const tabs = tab.querySelectorAll(":scope > .tab-list .tab-item");
    const contents = tab.querySelectorAll(
      ":scope > .tab-content > .tab-content-item"
    );

    tabs.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        contents.forEach((c) => c.classList.remove("active"));

        btn.classList.add("active");
        contents[index].classList.add("active");
      });
    });

    tabs[0]?.click();
  }
});
