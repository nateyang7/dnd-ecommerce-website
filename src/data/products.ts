import { ProductType, type Product } from "../types/product";

import playerBook from "../assets/products/player-book.jpg";
import dungeonMasterBook from "../assets/products/dm-book.jpg";
import monsterBook from "../assets/products/monster-book.jpg";
import fighterDices from "../assets/products/fighter-dices.jpg";
import rangerDices from "../assets/products/ranger-dice.jpg";
import wizardDices from "../assets/products/wizard-dice.jpg";
import monsterFigurines from "../assets/products/monsters-figurines.jpg";
import adventurerFigurines from "../assets/products/adventurers-figurines.jpg";
import npcFigurines from "../assets/products/npcs-figurines.jpg";

/** Array of products (EXPORT TO JSON LATER FOR BACK-END) */
export const products: Product[] = [
  {
    id: 1,
    name: "Manuel des joueurs (2024)",
    img: playerBook,
    type: ProductType.Book,
    price: 31.99,
  },
  {
    id: 2,
    name: "Guide du maître (2024)",
    img: dungeonMasterBook,
    type: ProductType.Book,
    price: 31.99,
  },
  {
    id: 3,
    name: "Manuel des monstres (2024)",
    img: monsterBook,
    type: ProductType.Book,
    price: 31.99,
  },
  {
    id: 4,
    name: "Set de dés polyédriques version guerrier",
    img: fighterDices,
    type: ProductType.Dice,
    price: 53.26,
  },
  {
    id: 5,
    name: "Set de dés polyédriques version rôdeur",
    img: rangerDices,
    type: ProductType.Dice,
    price: 54.72,
  },
  {
    id: 6,
    name: "Set de dés polyédriques version mage",
    img: wizardDices,
    type: ProductType.Dice,
    price: 56.28,
  },
  {
    id: 7,
    name: "Pack figurines : Monstres",
    img: monsterFigurines,
    type: ProductType.Figurine,
    price: 80.22,
  },
  {
    id: 8,
    name: "Pack figurines : Aventuriers",
    img: adventurerFigurines,
    type: ProductType.Figurine,
    price: 39.51,
  },
  {
    id: 9,
    name: "Pack figurines : NPCs",
    img: npcFigurines,
    type: ProductType.Figurine,
    price: 21.07,
  },
];
