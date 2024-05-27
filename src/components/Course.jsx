import React from 'react'

const Course = ({courseName,email,fees,}) => {
  return (

<div>
    <h1>{courseName}</h1>
<h1>{email}</h1>
<h1>{fees}</h1>

</div>

  )
}

export default Course