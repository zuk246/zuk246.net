export default function shortURL(url: string): string {
    const urlObj = new URL(url);
    return urlObj.hostname;
}
