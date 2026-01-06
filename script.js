document.addEventListener("DOMContentLoaded", () => {

  const rows = Array.from(document.querySelectorAll("tbody tr"));
  const prevArrow = document.querySelector(".prev-arrow");
  const nextArrow = document.querySelector(".next-arrow");
  const paginationContainer = document.getElementById("custom-pagination");
  const pageNumbers = document.getElementById("page-numbers");

  const form = document.querySelector(".card-form");
  const list = document.querySelector(".card-select-option");
  const text = document.querySelector(".card-select span");
  const options = document.querySelectorAll(".card-option");

  let rowsPerPage = rows.length;
  let currentPage = 1;
  console.log(rowsPerPage);

  form.addEventListener("click", (e) => {
    e.stopPropagation();
    list.classList.toggle("active");
  });

  options.forEach(opt => {
    opt.addEventListener("click", (e) => {
      e.stopPropagation();
      rowsPerPage = Number(opt.textContent);
      text.textContent = opt.textContent;
      currentPage = 1;
      list.classList.remove("active");
      console.log("hii");
      renderTable();
    });
  });

  document.addEventListener("click", () => {
    list.classList.remove("active");
  });

  function renderTable() {
    const totalPages = Math.ceil(rows.length / rowsPerPage);

    rows.forEach((row, index) => {
      row.style.display =
        index >= (currentPage - 1) * rowsPerPage &&
          index - 1< currentPage * rowsPerPage
          ? ""
          : "none";
    });

    renderPagination(totalPages);
    updateArrows(totalPages);
  }

  function renderPagination(totalPages) {
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("a");
      btn.href = "javascript:void(0)";
      btn.textContent = i;
      btn.classList.add("page-link");

      if (i === currentPage) btn.classList.add("active");

      btn.addEventListener("click", () => {
        currentPage = i;
        renderTable();
      });

      paginationContainer.appendChild(btn);
    }

    pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`;
  }

  function updateArrows(totalPages) {
    prevArrow.disabled = currentPage === 1;
    nextArrow.disabled = currentPage === totalPages;
  }

  prevArrow.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderTable();
    }
  });

  nextArrow.addEventListener("click", () => {
    const totalPages = Math.ceil(rows.length / rowsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderTable();
    }
  });
  
  renderTable();
});
