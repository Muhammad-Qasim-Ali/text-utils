import React from 'react'

export default function PropsInJS(props) {

  return (
    <div>
      <h1>{props.text}</h1>
      <h1>Name: {props.data.name}</h1> 
      <h1>Date: {props.date}</h1>
      <h1>Chawala: {props.basAwainEe}</h1>
    </div>
  )
}
