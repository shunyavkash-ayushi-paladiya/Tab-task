document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: 10,
    autoplay: false,
    pagination: true,
    breakpoints: {
      991: {
        perPage: 2,
      },
      575: {
        perPage: 1,
      },
    },
  }).mount();

  splide.on("pagination:mounted", function (data) {
    data.list.classList.add("splide__pagination--custom");
    data.items.forEach(function (item) {
      item.button.textContent = String(item.page + 1);
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
const tabs = document.querySelectorAll(".tab");

function tabify(tab) {
  const tabList = tab.querySelector(".tab-list");

  if (tabList) {
    const tabItems = [...tabList.children];
    const tabContent = tab.querySelector(".tab-content");
    const tabContentItems = [...tabContent.children];
    let tabIndex = 0;

    tabIndex = tabItems.findIndex((item, index) => {
      return [...item.classList].indexOf("is-active") > -1;
    });

    tabIndex > -1 ? (tabIndex = tabIndex) : (tabIndex = 0); 

    function setTab(index) {
      tabItems.forEach((x, index) => x.classList.remove("is-active"));
      tabContentItems.forEach((x, index) => x.classList.remove("is-active"));

      tabItems[index].classList.add("is-active");
      tabContentItems[index].classList.add("is-active");
    }

    tabItems.forEach((x, index) =>
      x.addEventListener("click", () => setTab(index))
    );
    setTab(tabIndex);
    tab.querySelectorAll(".tab").forEach((tabContent) => tabify(tabContent));
  }
}

tabs.forEach(tabify);
})
