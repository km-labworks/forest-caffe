// src/utils/time.ts
import type { TimeZone } from "../types/TimeZone";

export const getTimeZone = (): TimeZone => {
    const hour = new Date().getHours();

    if (hour < 11) return "morning";
    if (hour < 17) return "day";
    return "night";
};