
document.addEventListener("DOMContentLoaded", function () {
  var nombrePage = $(".slider-cards").length;

  showPage = function (pagination) {
    if (pagination < 0 || pagination >= nombrePage) return;

    $(".slider-cards").hide().eq(pagination).show();
    $("#pagin li").removeClass("active").eq(pagination).addClass("active");
  };

  $(".prev").click(function () {
    showPage($("#pagin ul .active").index() - 1);
  });

  $(".next").click(function () {
    showPage($("#pagin ul .active").index() + 1);
  });

  $("#pagin ul a").click(function (e) {
    e.preventDefault();
    showPage($(this).parent().index());
  });

  showPage(0);
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
});
