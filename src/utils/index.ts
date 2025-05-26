export function formatSlug(slug?: string) {
    if(!slug) return slug;
    return slug
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}