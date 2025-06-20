import EventEmitter from "events";

class Order extends EventEmitter {
  constructor() {
    super();
    this.count = 0
  }

  order() {
    this.count++
    this.emit("order", 'XL', 500)
  }

  display() {
    return this.count;
  }
}

export default Order;