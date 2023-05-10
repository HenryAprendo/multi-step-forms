
export interface Plan {
  id: number;
  title: string;
  cost: number;
  promotions: string;
  image: string;
}

export const plans:Plan[] = [
  {
    id: 1,
    title: 'Arcade',
    cost: 9,
    promotions: '2 months free',
    image: './../../assets/images/icon-arcade.svg'
  },
  {
    id: 2,
    title: 'Advanced',
    cost: 12,
    promotions: '2 months free',
    image: './../../assets/images/icon-advanced.svg'
  },
  {
    id: 3,
    title: 'Pro',
    cost: 15,
    promotions: '2 months free',
    image: './../../assets/images/icon-pro.svg'
  },
];
