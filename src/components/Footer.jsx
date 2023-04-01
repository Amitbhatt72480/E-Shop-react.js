import React from 'react'

const Footer = () => {
	const today = new Date();
  const year = today.getFullYear();
  return (
	<div className="flex">
	<div className="mx-auto p-7 tracking-widest text-sm font-f3"><h1 className="">Copyright	&copy; E-Shop {year} all rights reserved</h1></div>
	</div>
  )
}

export default Footer