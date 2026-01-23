const faqItemsEL = document.querySelectorAll(".faq-item");
// console.log(faqItemsEL);

faqItemsEL.forEach((item) => {
  item.querySelector(".question").addEventListener("click", () => {
    // console.log(item);

    faqItemsEL.forEach((faq) => {
      // console.log(faq);
      faq.querySelector(".answer").classList.add("hidden");
      faq.querySelector(".icon").textContent = "+";
    });

    item.querySelector(".answer").classList.toggle("hidden");
    item.querySelector(".icon").textContent = "−";
    // console.log(item)
  });
});
