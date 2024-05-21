import React from 'react'

// function greet(){
//     return <h1>HELLO</h1>
// }

// const greet = () => <h1>HELLOHI!!</h1>
const greet= props =>{
    console.log(props)
    return(
        <div>
            <strong>HEYYY{props.name} listen!!{props.motivate}</strong>
        </div>
    )
    }

export default greet;