export function toTitleCase(str: string) {
    if (!str) return "";

    const result = str.split(" ").map(el => el[0]?.toUpperCase() + el.slice(1).toLowerCase()).join(" ");

    return result;
}