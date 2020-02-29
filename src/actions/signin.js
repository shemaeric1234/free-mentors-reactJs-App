import React from 'react';
import axios from 'axios';
import { loadPartialConfig } from '@babel/core';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

export const signin = data => async dispatch => {
	await axios
		.post('https://free-mentor-adc.herokuapp.com/API/v1/auth/signin', data)
		.then(async res => {
			const data = {
				token: res.data.token,
				userData: res.data.data,
			};
			dispatch({
				type: SIGN_IN,
				payLoad: data,
			});
		})
		.catch(error => {
			const errorData = {
				errorMessage: 'Invalid email or password',
			};
			dispatch({
				type: SIGN_IN_ERROR,
				payLoad: errorData,
			});
		});
};
