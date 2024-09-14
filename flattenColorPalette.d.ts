declare module 'tailwindcss/lib/util/flattenColorPalette' {
    function flattenColorPalette(colors: Record<string, string | Record<string, string>>): Record<string, string>;
    export default flattenColorPalette;
}