"use client"
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Layout = ({ children }) => {
	const [parentToggle, setHandleToggle] =useState(false)

	const handleToggle = (data) => {
		setHandleToggle(data)
	}
	return (
		<div className=" flex ">
			<Sidebar sendDataToParent={handleToggle} />
			<div className={` ${parentToggle?'md:ml-24':'md:ml-56'} w-full`}>
				<Navbar parentToggle={parentToggle}/>
				<main className="flex-1  pt-0  lg:pt-32">{children}</main>
			</div>
		</div>
	)
}

export default Layout