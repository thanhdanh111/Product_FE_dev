import React, { useEffect } from 'react';
import Create_Product from '../createProduct/createProduct';
import './header.css';
import {Modal} from '@material-ui/core'
import { getDataThunkUser } from '../../page/login/logic/login_reducer';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logOutUser } from '../../page/login/logic/login_action';
export default function Header() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const history = useHistory()
	const dispatch = useDispatch();
	const handleClose = () => setOpen(false);
	useEffect(() => {
		dispatch(getDataThunkUser())
	}, [])
	const logout = () =>{
		localStorage.removeItem('access_token')
		dispatch(logOutUser())
		history.push('/login')
	}
	return (
		<nav style={{ position: 'sticky', top: '0', zIndex: '10' }}>
			<ul class="nav-list">
				<li class="nav-item">
					<a href="#">
						<svg width="24" height="24" viewBox="0 0 24 24">
							<path d="M18.6,6.62C17.16,6.62 15.8,7.18 14.83,8.15L7.8,14.39C7.16,15.03 6.31,15.38 5.4,15.38C3.53,15.38 2,13.87 2,12C2,10.13 3.53,8.62 5.4,8.62C6.31,8.62 7.16,8.97 7.84,9.65L8.97,10.65L10.5,9.31L9.22,8.2C8.2,7.18 6.84,6.62 5.4,6.62C2.42,6.62 0,9.04 0,12C0,14.96 2.42,17.38 5.4,17.38C6.84,17.38 8.2,16.82 9.17,15.85L16.2,9.61C16.84,8.97 17.69,8.62 18.6,8.62C20.47,8.62 22,10.13 22,12C22,13.87 20.47,15.38 18.6,15.38C17.7,15.38 16.84,15.03 16.16,14.35L15,13.34L13.5,14.68L14.78,15.8C15.8,16.81 17.15,17.37 18.6,17.37C21.58,17.37 24,14.96 24,12C24,9 21.58,6.62 18.6,6.62Z" />{' '}
						</svg>
					</a>
				</li>
				<li class="nav-item">
					<a href="/home">Home</a>
				</li>
				<li class="nav-item">
					<a href="/product">Product</a>
				</li>
				<li class="nav-item">
					<a href="#">Contact</a>
				</li>
				<li class="nav-item">
					<button class="btn-primary" onClick={handleOpen}>
						Create Product
					</button>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Create_Product  />
					</Modal>
				</li>
				<li class="nav-item">
					<button class="btn-primary" onClick={logout}>Log out</button>
				</li>
			</ul>
		</nav>
	);
}