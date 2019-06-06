import React from 'react'

export default function MiniCar ({ dataHeader }) {
  return (
    <a className='page-header__link-MiniCar' href='http://0.0.0.0:1312/'>
      <img className='page-header__Minicar' src={dataHeader.miniCar.link} />
    </a>
  )
}
