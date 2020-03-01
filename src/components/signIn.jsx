import React, { Component } from 'react';
import { signin } from '../actions/signin';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
		PasswordError: '',
		EmailError: '',
		error: '',
		redirect: false,
	};

	signIn = () => {
		if (this.state.PasswordError || this.state.EmailError) {
			this.setState({ error: 'Validate your email or password' });
		} else {
			this.props.signin({
				email: this.state.email,
				password: this.state.password,
			});
		}
	};

	inputValidation(e) {
		if (e.target.name === 'password') {
			const PassWordRegEx = /^((?=.*[a-z])(?=.*[A-Z]))(?=.*[0-9])(?=.{8,})/;
			if (!PassWordRegEx.test(e.target.value)) {
				this.setState({
					PasswordError: 'Invalid password',
					error: '',
				});
			} else {
				this.setState({
					password: e.target.value,
					PasswordError: '',
					error: '',
				});
			}
		} else if (e.target.name === 'email') {
			const EmailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if (!EmailRegEx.test(e.target.value)) {
				this.setState({ EmailError: 'Invalid email', error: '' });
			} else {
				this.setState({
					email: e.target.value,
					EmailError: '',
					error: '',
				});
			}
		}
	}

	render() {
		if (this.props.userData.token) {
			const history = createBrowserHistory({
				forceRefresh: true,
			});
			localStorage.setItem(
				'firstName',
				`${this.props.userData.userData.firstname}`,
			);
			localStorage.setItem('lastName', this.props.userData.userData.lastname);
			history.push('/dash-board');
		}
		return (
			<div className='login_wrapper'>
				<div id='signin_welcom_title'></div>
				<div id='signin_welcome_note'>
					<div className='login_errorMessage'>
						{' '}
						{this.state.error || this.props.signin_error.errorMessage}
					</div>
					<form name='signUp_form'>
						<label>
							E-mail<span className='required_star'>*</span>
						</label>
						<br />
						<input
							data-name='email'
							className='signUpform'
							type='text'
							name='email'
							required
							placeholder=' E-mail'
							onChange={e => this.inputValidation(e)}
						/>
						<div className='errorMessage'> {this.state.EmailError}</div>
						<br />
						<label>
							Password<span className='required_star'>*</span>
						</label>
						<br />
						<input
							className='signUpform'
							type='password'
							name='password'
							placeholder='Password'
							onChange={e => this.inputValidation(e)}
						/>
						<div className='errorMessage'> {this.state.PasswordError}</div>
						<br />
					</form>
					<div onClick={() => this.signIn()} id='submit_button'>
						SignIn
					</div>
					<div id='login_notification'></div>
				</div>
			</div>
		);
	}
}

export const mapStateToProps = state => {
	return {
		userData: state.signinReducer.signin,
		signin_error: state.signinReducer.signin_error,
	};
};

const connected = connect(mapStateToProps, { signin })(SignIn);
export default connected;
