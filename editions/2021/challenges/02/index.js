export default function listGifts(letter) {
    const gifts = {};
    letter.trim()
        .replace(/\s{2,}/g, ' ')
        .split(" ")
        .filter(gift => gift[0] !== "_")
        .forEach(gift => gifts[gift] = gifts[gift] ? gifts[gift] + 1 : 1);
    return gifts;
}