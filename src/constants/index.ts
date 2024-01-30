// import { nextStaticImage } from "next/image"
import { logo } from "@/assets"
import { StaticImageData } from "next/image";

export interface ICard {
    id: number;
    title: string;
    logo: StaticImageData;
    tokenAmount: string;
    valueInUsd: string;
}

const cards = [
    { id: 0, title: "$REFLECT Rewards", logo, tokenAmount: "142.323", valueInUsd: "$400,32" },
    { id: 1, title: "$REFLECT Hold", logo, tokenAmount: "12157.06", valueInUsd: "$5400,32" },
    { id: 2, title: "$REFLECT Marketcap", logo, tokenAmount: "", valueInUsd: "$29M" },
]

export { cards }