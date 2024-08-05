const cards: Card[] = [
    { id: 1, name: "Lich king", image: "ICC_314.png" },
    { id: 2, name: "Deathwing", image: "CS3_036.png" },
    { id: 3, name: "Blood of G'uun", image: "DMF_053.png" },
    { id: 4, name: "Frostmourne", image: "ICC_314t1.png" },
    { id: 5, name: "Blood of The Ancient One", image: "OG_173.png" },
    { id: 6, name: "Golden Lich king", image: "ICC_314.gif" }
]
export function formatString(input: string): string {
    return `Formatted: ${input}`;
}

export function incrementNumber(value: number): number {
    return value + 1;
}

export function getCards(): Card[] {
    let draws: Card[] = []
    for (let i = 0; i < 5; i++) {
        draws.push(cards[Math.floor(Math.random() * (5 - 1 + 1)) + 1]);
        console.log(draws)
    }
    return draws
}
type Card = {
    id: number,
    name: string,
    image: string
}