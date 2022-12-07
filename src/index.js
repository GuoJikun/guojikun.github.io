import { defineCustomElementIvyButton, defineCustomElementIvyInput } from "ivy-ui/dist/components/index.js";
// import("ivy-ui/loader").then(ui => {
//     console.log(ui);
//     const { defineCustomElements } = ui;
//     defineCustomElements();
// });
// defineCustomElements();
defineCustomElementIvyButton();
defineCustomElementIvyInput();

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
    const val = document.getElementById("inputEl").value;
    window.open(`https://www.baidu.com/s?wd=${val}`);
});
