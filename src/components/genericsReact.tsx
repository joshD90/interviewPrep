import React, { FC } from 'react'

type Props = {x:number}

const genericsReact:FC<Props> = ({x}) => {
  return (
    <div>genericsReact</div>
  )
}

export default genericsReact