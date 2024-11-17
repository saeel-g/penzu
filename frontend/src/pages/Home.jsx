import { useDispatch, useSelector } from "react-redux";
import { logout, login } from "../redux/slices/auth";
import { useRef } from "react";

function Home() {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const signinUsername = useRef();

	return (
		<>
			{auth.isLoggedIn && <input type="button" value="Log out" onClick={() => dispatch(logout())} />}
			{!auth.isLoggedIn && (
				<>
					<form>
						<h2>Sign in</h2>
						<div>
							<label htmlFor="username">Username</label>
							<input type="text" name="username" id="signin-username" ref={signinUsername} />
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<input type="text" name="password" id="signin-password" />
						</div>
						<input
							type="button"
							value="Log in"
							onClick={() => {
								dispatch(login({ user: { name: signinUsername.current.value } }));
							}}
						/>
					</form>
					<form>
						<h2>Sign up</h2>
						<div>
							<label htmlFor="username">Username</label>
							<input type="text" name="username" id="signup-username" />
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<input type="text" name="password" id="signup-password" />
						</div>
						<div>
							<label htmlFor="confirmpassword">Confirm Password</label>
							<input type="text" name="confirmpassword" id="signup-confirmpassword" />
						</div>
						<input type="button" value="Sign up" />
					</form>
				</>
			)}
		</>
	);
}

export default Home;
