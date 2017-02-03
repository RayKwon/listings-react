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
		onRemoveClick: React.PropTypes.func,
		loadListings: React.PropTypes.func
	}

	constructor(props) {
		super(props);
		this.props.loadListings();
	}

	render() {

		const results = this.props.data && this.props.data.results ? this.props.data.results.map(listing => {
			return (<Listing key={listing.id} listing={listing} onSaveClick={this.props.onSaveClick} />);
		}) : null;

		const totalResults = results ? results.length : 0;

		const savedListings = this.props.data && this.props.data.saved ? this.props.data.saved.map(listing => {
			return (<Listing key={listing.id} listing={listing} onRemoveClick={this.props.onRemoveClick} />);
		}) : null;

		const totalSavedListings = savedListings ? savedListings.length : 0;

		return (
		  <div className={styles.root}>

		  	<div className={styles.results}>
		  		<h2>{totalResults} Results</h2>
		  		{results}
		  	</div>

		  	<div className={styles.savedListings}>
		  		<h4>{totalSavedListings} Saved properties</h4>
		  		{savedListings}
		  	</div>

		  </div>
		)
	}
}

const mapStateToProps = state => ({
	data: state.listingsxx
});

const mapDispatchToProps = dispatch => ({
	onSaveClick: listing => dispatch(saveProperty(listing)),
	onRemoveClick: listing => dispatch(removeProperty(listing)),
	loadListings: () => dispatch(loadListings(mockedListings))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsPage);
