import React from 'react'

export default function Logo ({ dataHeader }) {
  return (
    <a className='page-header__link-Logo' href='http://0.0.0.0:1312/'>
      <img className='page-header__logo-image' src={dataHeader.logo.link} />
    </a>
  )
}
