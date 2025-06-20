import EventEmitter from "events";
import Updated from "./Update.js";

const emitter = new EventEmitter();
const other = new Updated()

emitter.on('order', () => {
  console.log("Sending email")
})

emitter.on('order', (order) => {
  console.log("Update inventory "+ order.id)
  other.updateInven('sa')
})

emitter.on('order', (order) => {
  console.log("Delivery", order.name)
})

createOrder()

function createOrder() {
  const k = { name:"shirt", id: 123}
  emitter.emit('order', k)
}
