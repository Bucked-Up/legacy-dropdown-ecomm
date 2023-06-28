import toggleButton from "./modules/toggleButton.js";
import handleAllProducts from "./modules/handleProduct/handleProduct.js";
import buy from "./modules/buy.js";
import noThanks from "./modules/noThanks.js";

buyButton.forEach((btnArray) => {
  toggleButton(btnArray);
});

let globalData = [];

document.onload = async () => {
  await handleAllProducts(globalData);
  if (!hasStock) window.location.href = noThanksRedirect;
  watchSelects();
  buyButton.forEach((btnArray) => {
    btnArray.forEach((btn) => {
      btn.addEventListener(
        "click",
        () => {
          buy(globalData[buyButton.indexOf(btnArray)]);
        },
        { once: true }
      );
    });
  });
};

dataLayerStart();

if (noThanksButton[0])
  noThanksButton.forEach((btn) => {
    btn.addEventListener("click", noThanks, { once: true });
  });
