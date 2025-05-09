import sum from "../sum"

test("adding two number", () => {
  const res = sum(4,5)

  expect(res).toBe(9)
})
