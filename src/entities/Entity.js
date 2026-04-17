// sr/entities/Entity.js

/**
 * @class
 * Represents an entity, object existing in the game.
 */
export class Entity {
  static id = 0;

  /**
   * Create an entity.
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.id = Entity.id;
    Entity.id++;
  }
}
