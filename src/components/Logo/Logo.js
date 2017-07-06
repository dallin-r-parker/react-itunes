import React from 'react'
import logo from  '../../assets/apple-music.svg'
import './Logo.css'


export default function Logo(){
	return(
		<div className="logo-wrap">
			<img src={logo}
			     alt="Apple Music Logo"
			     style={{height: '7vh'}}/>
		</div>
	)
}