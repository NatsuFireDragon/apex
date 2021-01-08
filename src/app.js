const accBtn = document.querySelectorAll(".acc-btn");
const accItem = document.querySelectorAll(".accordion-item");


// FAQ Accordion
accBtn.forEach((ele) => {
  ele.addEventListener("click", () => {
    let content = ele.nextElementSibling;
    let icon = ele.firstChild.nextElementSibling;
    let active = document.querySelector(".accordion-item.active");
    let iconActive = document.querySelector(".icon.active");
    if (active) {
      if (ele.parentElement.classList.contains("active")) {
        ele.parentElement.classList.remove("active");
        // remove active from icon
        icon.classList.remove("active");
        active.lastElementChild.style.maxHeight = "0";
      } else {
        active.classList.remove("active");
        active.lastElementChild.style.maxHeight = "0";
        // remove icon active
        iconActive.classList.remove("active");
        ele.parentElement.classList.add("active");
        // add active to icon
        icon.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    } else {
      ele.parentElement.classList.add("active");
      // add active to icon
      icon.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
