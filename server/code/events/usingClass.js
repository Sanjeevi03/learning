import Order from "./event.js";

const emitter = new Order()


emitter.on('order', () => {
  console.log("Sending email")
})

emitter.on('order', (size, price) => {
  console.log("Update inventory ", size, price)
})

emitter.on('order', (size, price) => {
  console.log("Delivery", size, price)
})


emitter.order()
console.log(emitter.display())
