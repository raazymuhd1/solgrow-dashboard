// import { nextStaticImage } from "next/image"
import { logo } from "@/assets"
import { StaticImageData } from "next/image";

export interface ICard {
    id: number;
    title: string;
    logo: StaticImageData;
    tokenAmount: string;
    valueInUsd: string;
    isMcCap: boolean;
}

const cards = [
    { id: 0, title: "$REFLECT Rewards", logo, tokenAmount: "142.323", valueInUsd: "$400,32", isMcCap: false },
    { id: 1, title: "$REFLECT Held", logo, tokenAmount: "12157.06", valueInUsd: "$5400,32", isMcCap: false },
]

export { cards }