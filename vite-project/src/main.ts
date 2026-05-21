import { getTimeZone } from "./utils/time.ts";
import { updateUI } from "./ui/updateUI.ts";
import type { TimeZone } from "./types/TimeZone";

const hero = document.querySelector(".hero");
const title = document.querySelector("h1");

if (!(hero instanceof HTMLElement) || !(title instanceof HTMLElement)) {
  throw new Error("要素が見つかりません");
}

// 初期表示
updateUI(hero, title, getTimeZone());

// ボタン処理
const buttons = document.querySelectorAll<HTMLButtonElement>(".buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const time = button.dataset.time;

    if (!time) return;

    updateUI(hero, title, time as TimeZone);
  });
});
