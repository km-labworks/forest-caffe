import type { TimeZone } from "../types/TimeZone";

export const isTimeZone = (value: string): value is TimeZone => {
    return value === "morning" || value === "day" || value === "night";
};