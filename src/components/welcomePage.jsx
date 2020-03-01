import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
	return (
		<div id='welcome_note_index'>
			<div id='welcome_image'></div>
			<div id='welcom_content'>
				“ I think kids should have a mentor and a role model, but that they
				shouldn't take one person's opinion to be what we call final assessment
				or judgment about how life is supposed to be.{' '}
			</div>
			<div id='signup_main_button_wrap'>
				<div className='newUser'>
					Create an Account to become our Community Member{' '}
				</div>
				<Link to='/login'>
					<div id='signup_main'>Sign In</div>
				</Link>
			</div>
		</div>
	);
}
