import React from 'react';
import wowlogo from '../../Images/WowEvents_Logo_Orange_RGB.png';

export default function Footer() {
	return (
		<section className='footer'>
			<div className='footer_logo'>
				<img src={wowlogo} className='w-50' alt='logo' />
			</div>
			<div className='wow_address'>
				<p>419 Main St Suite 433 Huntington Beach, CA 92648</p>
				<a href='tel:714.848.9698'>714.848.9698</a>
				<a href='mailto:hello@wowevents.com'>hello@wowevents.com</a>
			</div>
			<div className='footer_links'>
				<a className='linkforpage' href='/'>
					Home
				</a>
				<a className='linkforpage' href='/packages'>
					Pop Up Picnics
				</a>
				<a className='linkforpage' href='/backyardmovies'>
					Movie Night
				</a>
				<a className='linkforpage' href='/charcuterie'>
					Charcuterie Services
				</a>
			</div>

			<p>© 2021 Copyright Wow! Events</p>
		</section>
	);
}
