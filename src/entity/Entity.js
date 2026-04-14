// sr/entity/Entity.js

let id = 0;

/**
 * @class
 * Represents an entity, object existing in the game.
 */
export class Entity {
  position; // { x: number, y: number }
  name;
  constructor(position) {
    this.id = id;
    id++;
  }
}

let e = new Entity();
let e1 = new Entity();

console.log(e.id, e1.id);
