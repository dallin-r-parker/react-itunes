import React from 'react'
import logo from '../../assets/apple-music.svg'

export default function Logo(){
	return(
		<div className="logo-wrap">
			<img src={logo}
			     style={{height: '7vh'}}
			     alt="Apple Music Logo"/>
		</div>
	)
}