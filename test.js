function sum(number) {
  let total = number
  console.log(total)
  function func(arg) {
    if (arg) {
      total += arg
    }
    console.log(total)
    return func
  }
  return func
}

sum(1)
sum(1)(2)(3)
