import React from 'react';
import styles from './styles.scss';
import Listing from '../../components/listing';

const propTypes = {
	data: React.PropTypes.object
};

export default class Listings extends React.PureComponent {
	render() {
		const listings = this.props.data.results.map(listing => <Listing listing={listing} key={listing.id} />);
		const savedListings = this.props.data.saved.map(listing => <Listing listing={listing} key={listing.id} />);

		return (
		  <div className={styles.root}>

		  	<div className={styles.results}>
		  		<h2>{listings.length} Results</h2>
		  		{listings}
		  	</div>

		  	<div className={styles.savedListings}>
		  		<h4>{savedListings.length} Saved Properties</h4>
		  		{savedListings}
		  	</div>

		  </div>
		)
	}
}

Listings.propTypes = propTypes;
