import React from 'react'

const ChildComponent = React.memo(
     ({name, handleClick}) => {
       console.log("this is child component function...");
    
  return (
    <div>
      <button onClick={handleClick}>{name}</button>
    </div>
  )
}
)

export default ChildComponent
