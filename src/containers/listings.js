import React from 'react';
import styles from './styles.scss';
import Listing from '../components/listing';

export default class Listings extends React.Component {
	render() {
		return (
		  <div className={styles.root}>
		    <Listing />
		    <Listing />
		  </div>
		)
	}
}
