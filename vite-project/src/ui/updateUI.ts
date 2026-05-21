import type { TimeZone } from "../types/TimeZone";

import { renderMenu } from "./renderMenu.ts";

export const updateUI = (
    hero: HTMLElement,
    title: HTMLElement,
    timeZone: TimeZone
    ) => {
        hero.classList.remove("morning", "day", "night");
        hero.classList.add(timeZone);

const messages = {
    morning: "光が差し込む、目覚めの森へ",
    day: "生命が息づく、活気あふれる森へ",
    night: "幻想に包まれる、静寂の森へ",
};

    title.textContent = messages[timeZone];

    renderMenu(timeZone);
};