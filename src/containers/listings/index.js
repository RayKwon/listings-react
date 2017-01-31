import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';
import Listing from '../../components/listing';
import listingsReducer from './reducer';
import { loadListings } from './actions';
import { mockedListings } from '../../mocked-listings';

const propTypes = {
	data: React.PropTypes.object
};

export class ListingsPage extends React.PureComponent {
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

ListingsPage.propTypes = propTypes;

const mapStateToProps = state => ({
	data: listingsReducer(state, loadListings(mockedListings))
});

export default connect(mapStateToProps)(ListingsPage);







