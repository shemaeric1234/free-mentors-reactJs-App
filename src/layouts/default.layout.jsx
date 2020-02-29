import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Footer from '../components/footer.jsx';
import WelcomePage from '../components/welcomePage.jsx';
import SignIn from '../components/signIn.jsx';

class DefaultLayout extends PureComponent {
	render() {
		return (
			<Router>
				<div id='wrap'>
					<div id='banner'>
						<div id='logo'></div>
						<span id='banner_title'>Free Mentors</span>
						<div id='signInUp'>
							<div className='signInUp' id='signup'>
								SignUp
							</div>
							<div id='phone_menu_icon'></div>
							<Link to='/login'>
								<div className='signInUp' id='signin'>
									SignIn
								</div>
							</Link>
						</div>
					</div>
					<div id='phone_menu'>
						<div id='phone_title'>Menu</div>
						<div className='phone_menu_items'>SignUp</div>
					</div>

					<div id='menu'>
						<Link to='/'>
							<div className='submenu' id='home'>
								Home
							</div>
						</Link>
						<div className='submenu' id='aboutUs'>
							About Us
						</div>
						<div className='submenu' id='contactUs'>
							Contact Us
						</div>
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
						<Switch>
							<Route path='/' exact component={WelcomePage} />
							<Route path='/login' component={SignIn} />
						</Switch>
					</div>
					<div id='quotes'>
						<div id='mentorQuotes2'>
							“ A mentor is someone who sees more talent and ability within you,
							than you see in yourself,and helps bring it out of you.
						</div>
					</div>

					<Footer />
				</div>
			</Router>
		);
	}
}

export default DefaultLayout;
