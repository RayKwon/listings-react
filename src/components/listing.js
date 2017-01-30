import React from 'react';
import styles from './styles.scss';

export default class Listing extends React.Component {
	render() {
		return (
		  <article className={styles.root}>
		    <h2>Hello, Jay Kwon</h2>
		    <button onClick={this.onClick}>Ok</button>
		  </article>
		)
	}

	onClick(e){
		alert('hello');
	}
}
