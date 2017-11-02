import React from 'react'
import DATA from './DATA'

const AllNames = ({names}) => {
  console.log(names)

  const filteredNames = names.filter((name) => {
    return name.length === 4
  })

  console.log(filteredNames)

  const mappedNames = filteredNames.map((name) => {
    return <li>{name}</li>
  })
  return (
    <div>
      <ul>
        {
          mappedNames
          // names.filter((name) => {
          //   return name.length === 4
          // }).map((name) => {
          //   return <li>{name}</li>
          // })
        }
      </ul>
    </div>
  )
}

const NumbersComponent = ({numbers}) => {
  const filteredNumbers = numbers.filter((number) => {
    return number > 30 && number < 70
  })
const mappedNumbers = filteredNumbers.map((number) => {
  return <p> {number} </p>
})

  return (
    <div>
      {
        mappedNumbers
      }
    </div>
  )
}

const DisplayBooks = ({books}) => {
  const allBookInfo = books.map((item) => {
    return (
      <div>
        <h3>{item.title}</h3>
        <h3>{item.author}</h3>
      </div>
    )
  })

  return (
    <div>
      <p>{allBookInfo}</p>
    </div>
  )
}

const MappingAndFiltering = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <AllNames names={DATA.names} />
      <NumbersComponent numbers = {DATA.numbers} />
      <DisplayBooks books={DATA.books} />
    </div>
  )
}

export default MappingAndFiltering