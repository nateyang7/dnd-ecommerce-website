// src/entities/Player.js

import { Entity } from "./Entity.js";

/**
 * @class
 * Represents a player.
 */
export class Player extends Entity {
  /**
   * Create a player.
   */
  constructor(x, y, name, hp, mp) {
    super(x, y);
    this.name = name;
    this.hp = hp;
    this.maxHp = hp;
    this.mp = mp;
  }
}
