import React from 'react';
import styles from './styles.scss';

const propTypes = {
	listing: React.PropTypes.object
};

export default class Listing extends React.PureComponent {

	render() {
		const headingStyle = {
			backgroundColor: this.props.listing.agency.brandingColors.primary
		};

		return (
		  <article className={styles.root}>
		  	<div className={styles.heading} style={headingStyle}>
		  		<img src={this.props.listing.agency.logo} />
		  	</div>
		  	<div className={styles.body}>
		  		<img src={this.props.listing.mainImage} />
		  	</div>
		  	<div className={styles.footer}>
		  		<span>{this.props.listing.price}</span>
		  	</div>
		  </article>
		)
	}

	onClick(e){
		alert('hello');
	}
}

Listing.propTypes = propTypes;
