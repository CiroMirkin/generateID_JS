const generateId = () =>{
    const head = Date.now().toString(35)
    const footer = Math.random().toString(36).slice(2)

    return head + footer
}

console.log(generateId())

// Date.now

console.log(Date.now()) // Number output
console.log(Date.now().toString(35)) // Convert number to 35 base

// Math.random

console.log(Math.random()) // Number output
console.log(Math.random().toString(36)) // Convert number to 36 base 
console.log(Math.random().toString(36).slice(2)) // Delete 0.
