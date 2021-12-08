// creates and positions button
const btn = document.createElement('button')
btn.innerText = 'Generate Random Numbers'
btn.style.display = 'block'
btn.style.margin = '0 auto'
document.body.appendChild(btn)

// creates and positions table of numbers
const table = document.createElement('div')
table.style.width = '100%'
table.style.display = 'flex'
table.style.justifyContent = 'space-around'
document.body.appendChild(table)

// creates a odd numbers column
const oddColumn = document.createElement('div')
const oddTitle = document.createElement('p')
oddColumn.appendChild(oddTitle)
oddTitle.innerText = 'Odd Column'
table.appendChild(oddColumn)

// creates a even numbers column
const evenColumn = document.createElement('div')
const evenTitle = document.createElement('p')
evenColumn.appendChild(evenTitle)
evenTitle.innerText = 'Even Column'
table.appendChild(evenColumn)

// compares numbers passed to function as a parameters
const compareNumbers = (num1, num2) => {
  return num1 - num2
}

// generates amount of random numbers, sorts into odd and even and passes them to the proper columns
const generateRandomNumbers = () => {
  const min = 1
  const max = 100
  const amount = 20
  const oddArr = []
  const evenArr = []

  oddColumn.innerHTML = '<p>Odd Column</p>'
  evenColumn.innerHTML = '<p>Even Column</p>'

  // loop that generates random numbers and sorts them
  for (let i = 0; i < amount; i++) {
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)

    if (!(randomNum % 2 === 0)) {
      oddArr.push(randomNum)
      oddArr.sort(compareNumbers)
    } else {
      evenArr.push(randomNum)
      evenArr.sort(compareNumbers)
    }
  }

  // passes sorted numbers to proper column
  oddArr.forEach(el => {
    const oddNum = document.createElement('p')
    oddNum.style.textAlign = 'center'
    oddColumn.appendChild(oddNum)
    oddNum.innerText = el
  })

  // passes sorted numbers to proper column
  evenArr.forEach(el => {
    const evenNum = document.createElement('p')
    evenNum.style.textAlign = 'center'
    evenColumn.appendChild(evenNum)
    evenNum.innerText = el
  })
}

btn.addEventListener('click', generateRandomNumbers)
