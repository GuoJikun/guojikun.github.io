import { defineCustomElementIvyButton, defineCustomElementIvyInput } from "ivy-ui/dist/components/index.js";
// import "ivy-ui";

// defineCustomElements();
defineCustomElementIvyButton();
defineCustomElementIvyInput();

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
    const val = document.getElementById("inputEl").value;
    console.log(val);
    window.open(`https://www.baidu.com/s?wd=${val}`);
});
