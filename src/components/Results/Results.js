import React from 'react'


export default function Results(props) {
	return (
		<table>
			<tbody>
			<tr>
				<th>Play</th>
				<th>Song</th>
				<th>Artist</th>
				<th>Collection</th>
				<th>Album Art</th>
				<th>Type</th>
				<th>Single Price</th>
				<th>Collection Price</th>
			</tr>
			<tr>
				<td><button><a href={props.play} target="_blank">Play</a></button></td>
				<td>{props.song}</td>
				<td>{props.artist}</td>
				<td>{props.collection}</td>
				<td><img src={props.albumArt} alt="Album Art Work"/></td>
				<td>{props.type}</td>
				<td>{props.singlePrice}</td>
				<td>{props.collectionPrice}</td>
			</tr>
			</tbody>
		</table>
	)
}