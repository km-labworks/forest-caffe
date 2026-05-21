import type { TimeZone } from "../types/TimeZone";

type MenuItem = {
    name: string;
    price: number;
}

export const menus = {
    morning: [
        { name: "朝露のコーヒー", price: 500 },
        { name: "光のトースト", price: 600 },
    ],
    day: [
        { name: "森の恵みパスタ", price: 900 },
        { name: "グリーンサラダ", price: 400 },
    ],
    night: [
        { name: "星空チーズケーキ", price: 600 },
        { name: "ムーンラテ", price: 500 },
    ],
};