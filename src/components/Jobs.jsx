import React from 'react'

const Jobs = ({salary,position,company}) => {
  return (
    <div>
        <h1>{salary}</h1>
        <h1>{position}</h1>
        <h1>{company}</h1>
    </div>
  )
}

export default Jobs