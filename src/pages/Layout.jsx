import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import AdminPanel from "./adminPanel/AdminPanel";
import AdminAuth from "./adminAuth/AdminAuth";


const Layout = () => {

	return (
		<div>
			<Routes>
				<Route element={ <PrivateRoute/> } >
					<Route path='/' element={<AdminPanel/>} />
					<Route path='*' element={<Navigate to='/'/>}/>
				</Route>
				<Route path='/auth' element={<AdminAuth/>} />
			</Routes>
		</div>
	);
};

export default Layout;
