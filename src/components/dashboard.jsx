import React, { Component } from 'react';
import Footer from './footer.jsx';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
	render() {
		console.log(this.props.userData);

		return (
			<div id='wrap'>
				<div id='banner'>
					<div id='logo'></div>
					<span id='banner_title'>Free Mentors</span>
					<div id='user_profile'>
						<div id='user_profile_pc'></div>
						<div className='user_profile_name'>
							{localStorage.getItem('firstName')}
							{''} {localStorage.getItem('lastName')}
						</div>
						<a href='#'>
							<div className='user_profile_name' id='user_logOut'>
								LogOut
							</div>
						</a>
					</div>
					<div id='phone_menu_icon'></div>
				</div>
				<div id='phone_menu'>
					<div id='phone_title'>Menu</div>
					<a href='#'>
						<div className='phone_menu_items'>Menters</div>
					</a>
					<a href='all_User_sessions.html'>
						<div className='phone_menu_items'>Sessions</div>
					</a>
					<a href='#'>
						<div className='phone_menu_items'>LogOut</div>
					</a>
				</div>
				<div id='menu'>
					<Link to='/'>
						<div className='submenu' id='home'>
							Home
						</div>
					</Link>

					<a href='#'>
						<div className='submenu' id='aboutUs'>
							About Us
						</div>
					</a>
					<a href='#'>
						{' '}
						<div className='submenu' id='contactUs'>
							Contact Us
						</div>
					</a>
				</div>
				<div id='user_activities'>
					<a href='#'>
						{' '}
						<div className='link_and_icon'>
							<div className='view_pages_icon' id='all_mentors'></div>
							<div className='activities_links'>Mentors</div>
						</div>
					</a>
				</div>
				<div id='user_main_content'>
					<div id='user_welcom_title'>
						{' '}
						{localStorage.getItem('firstName')}
						{''} {localStorage.getItem('lastName')}
					</div>

					<div className='user_welcome_note'>
						<div id='user_welcome_image'></div>
					</div>
				</div>
				<div id='quotes'>
					<div id='mentorQuotes2'>
						“ A mentor is someone who sees more talent and ability within you,
						than you see in yourself,and helps bring it out of you.
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

export default Dashboard;
