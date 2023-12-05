import React, { Component } from 'react';
import { FaPhone, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// import Stack from 'react-bootstrap/Stack';

import { BsFillEnvelopeFill } from 'react-icons/bs';

export default class TopComponent extends Component {
	render() {
		return (
			<>
				{/* <Stack gap={3}> */}
				<div className='p-2'>
					<FaPhone size={20} />
					<a className='topText' href='tel:714.848.9698'>
						714.848.9698
					</a>
				</div>
				<div className='p-2'>
					<BsFillEnvelopeFill size={20} />
					<a className='topText' href='mailto:hello@wowevents.com'>
						hello@wowevents.com
					</a>
				</div>
				<div className='p-2'>
					<a href='https://www.facebook.com/popuppicnicsbywow'>
						{' '}
						<FaFacebook size={25} />
					</a>
				</div>
				<div className='p-2'>
					<a href='https://www.instagram.com/popuppicnicsbywow/'>
						<FaInstagram size={25} />
					</a>
				</div>
				<div className='p-2'>
					<a href='https://twitter.com/WowPopUpPicnics'>
						<FaTwitter size={25} />
					</a>
				</div>
				{/* </Stack> */}
			</>
		);
	}
}
