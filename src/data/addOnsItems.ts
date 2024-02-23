export type AddOnsItem = {
    name: string;
    desc: string;
    monthly: number;
    yearly: number;
}

export const addOnsItems : AddOnsItem[] = [
    { name: "Online service", desc: "Access to multiplayer games", monthly: 1, yearly: 10 },
    { name: "Larger storage", desc: "Extra 1TB of cloud save", monthly: 2, yearly: 20 },
    { name: "Customizable profile", desc: "Custom theme on your profile", monthly: 2, yearly: 20 },
]