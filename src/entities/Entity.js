// sr/entities/Entity.js

/**
 * @class
 * Represents an entity, object existing in the game.
 */
export class Entity {
  static id = 0;
  x;
  y;

  /**
   * Create an entity.
   */
  constructor() {
    this.id = Entity.id;
    Entity.id++;
  }
}
