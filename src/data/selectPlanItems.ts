import arcadeImg from "../assets/images/icon-arcade.svg";
import advancedImg from "../assets/images/icon-advanced.svg";
import proImg from "../assets/images/icon-pro.svg";

export type SelectPlanItems = {
    name: string;
    monthly: number;
    yearly: number;
    img: string;
}

export const selectPlanItems : SelectPlanItems[] = [
    { name: "Arcade", monthly: 9, yearly: 90, img: arcadeImg },
    { name: "Advanced", monthly: 12, yearly: 120, img: advancedImg },
    { name: "Pro", monthly: 15, yearly: 150, img: proImg },
]