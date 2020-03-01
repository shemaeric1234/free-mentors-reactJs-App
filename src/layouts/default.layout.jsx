import React, { PureComponent } from 'react';
import Footer from '../components/footer.jsx';
import WelcomePage from '../components/welcomePage.jsx';

class DefaultLayout extends PureComponent {
	render() {
		return (
			<div id='wrap'>
				<div id='banner'>
					<div id='logo'></div>
					<span id='banner_title'>Free Mentors</span>
					<div id='signInUp'>
						<a href='#'>
							<div className='signInUp' id='signup'>
								SignUp
							</div>
						</a>
						<div
							id='phone_menu_icon'
							// onClick={myFunction()}
						></div>
						<a href='#'>
							<div className='signInUp' id='signin'>
								SignIn
							</div>
						</a>
					</div>
				</div>
				<div id='phone_menu'>
					<div id='phone_title'>Menu</div>
					<a href='html/SignUp.html'>
						<div className='phone_menu_items'>SignUp</div>
					</a>
				</div>

				<div id='menu'>
					<a href='index.html'>
						<div className='submenu' id='home'>
							Home
						</div>
					</a>
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
				<div id='login_wrap'>
					<div id='login_title_index'>Login</div>

					<form name='form1'>
						<input
							className='login_input'
							type='email'
							name='email'
							placeholder='Email...'
							required
						/>
						<br />
						<input
							className='login_input'
							type='password'
							name='password'
							placeholder='password'
							required
						/>
						<br />
						<input className='login_button' type='submit' name='submit' />
					</form>
				</div>

				<div id='activities'>
					<div className='mentor_cotes'></div>
				</div>
				<div id='main_content'>
					<WelcomePage />
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

export default DefaultLayout;
