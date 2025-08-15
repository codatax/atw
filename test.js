const { Art1, Art2, Art4 }= require('./index')

example_art1 = new Art1({
  endDate:'2025-04-21',
  term: 3, 
})
example_art1.Art1Par1()
example_art1.Art1Par2()

// console.log('Na toepassing artikel 1', example_art1)

example_art2 = new Art2({
  endDate: example_art1.endDate, 
  term: example_art1.term, 
  termUnit: 'day',
  newEndDate: example_art1.newEndDate
})
example_art2.Art2()

// console.log('Na toepassing artikel 2', example_art2)

example_art4 = new Art4({
    endDate: example_art2.endDate, 
    term: example_art2.term, 
    termUnit: example_art2.termUnit,
    newEndDate: example_art2.newEndDate,
    dumParB: true,
    dumParC: false,
})
example_art4.Art4()
// console.log('Na toepassing artikel 4', example_art4)
console.log('Deadline', example_art4.newEndDate)