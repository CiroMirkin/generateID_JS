# Generate ID

Generate ID with vanilla javascript.

## Genereta a ramdom ID

```javascript
    const generateId = () =>{
      const part1 = Date.now().toString(35)
      const part2 = Math.random().toString(36).slice(2)

      return part1 + part2
  }

  console.log(generateId())
```

### Date.now

```javascript
  console.log(Date.now()) // Number out
  console.log(Date.now().toString(35)) // Convert number to 35B
```
![Base 36 - Wiki](https://en.wikipedia.org/wiki/Base35)

### Math.random

```javascript
  console.log(Math.random()) // Number out
  console.log(Math.random().toString(36)) // Convert number to 36B 
  console.log(Math.random().toString(36).slice(2)) // Delete 0.
```
![Base 36 - Wiki](https://en.wikipedia.org/wiki/Base36)

## Generate an incremental ID

This function uses a [generator function](https://javascript.info/generators).

```javascript
    function* getId(lastID) {
    let ID = lastID || 0
  
    while(true) {
        ID++
        yield ID
        }
    }
```

Outpus: 

```javascript
    const Id = getId()

    Id.next().value // 1
    Id.next().value // 2
    Id.next().value // 3
```

```javascript
    const Id = getId(7)

    Id.next().value // 8
    Id.next().value // 9
    Id.next().value // 10
```
