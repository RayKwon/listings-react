import React from 'react';
import styles from './styles.scss';

export default class Listing extends React.PureComponent {
	static propTypes = {
		listing: React.PropTypes.object,
		onSaveClick: React.PropTypes.func,
		onRemoveClick: React.PropTypes.func
	}

	saveButtonClickHandler() {
		this.props.onSaveClick(this.props.listing);
	}

	removeButtonClickHandler() {
		this.props.onRemoveClick(this.props.listing);
	}

	render() {
		const headingStyle = {
			backgroundColor: this.props.listing.agency.brandingColors.primary
		};

		let actionButton = null;
		if (this.props.listing.isSaved) {
			actionButton = <button onClick={this.removeButtonClickHandler.bind(this)} className={styles.removeButton}>Remove property</button>;
		}else{
			actionButton = <button onClick={this.saveButtonClickHandler.bind(this)} className={styles.saveButton}>Save property</button>;
		}

		return (
		  <article className={styles.root}>
		  	<div className={styles.heading} style={headingStyle}>
		  		<img src={this.props.listing.agency.logo} />
		  	</div>
		  	<div className={styles.body}>
		  		<img src={this.props.listing.mainImage} />
		  		<div className={styles.actions}>
		  		  {actionButton}
		  		</div>
		  	</div>
		  	<div className={styles.footer}>
		  		<span>{this.props.listing.price}</span>
		  	</div>
		  </article>
		)
	}
}
