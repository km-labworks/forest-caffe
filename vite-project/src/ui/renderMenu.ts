// src/ui/renderMenu.ts
import { menus } from "../data/menu.ts";
import type  { TimeZone } from "../types/TimeZone";

export const renderMenu = (timeZone: TimeZone) => {
  const menuList = document.getElementById("menu-list");
  if (!menuList) return;

  menuList.innerHTML = "";

  menus[timeZone].forEach((item) => {
    const div = document.createElement("div");
    div.className = "menu-item";

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>¥${item.price}</p>
    `;

    menuList.appendChild(div);
  });
};