import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';
import Listing from '../../components/listing';
import listingsReducer from './reducer';
import { loadListings, saveProperty, removeProperty } from './actions';
import { mockedListings } from '../../mocked-listings';

export class ListingsPage extends React.PureComponent {

	static propTypes = {
		data: React.PropTypes.object,
		onSaveClick: React.PropTypes.func,
		onRemoveClick: React.PropTypes.func
	}

	render() {

		const results = this.props.data && this.props.data.results ? this.props.data.results.map(listing => {
			return (<Listing key={listing.id} listing={listing} onSaveClick={this.props.onSaveClick} />);
		}) : null;

		const savedListings = this.props.data && this.props.data.saved ? this.props.data.saved.map(listing => {
			return (<Listing key={listing.id} listing={listing} onRemoveClick={this.props.onRemoveClick} />);
		}) : null;

		return (
		  <div className={styles.root}>

		  	<div className={styles.results}>
		  		<h2>{results.length} Results</h2>
		  		{results}
		  	</div>

		  	<div className={styles.savedListings}>
		  		<h4>{savedListings.length} Saved properties</h4>
		  		{savedListings}
		  	</div>

		  </div>
		)
	}
}

const mapStateToProps = state => ({
	data: state.listings
});

const mapDispatchToProps = dispatch => ({
	onSaveClick: listing => dispatch(saveProperty(listing)),
	onRemoveClick: listing => dispatch(removeProperty(listing))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsPage);
