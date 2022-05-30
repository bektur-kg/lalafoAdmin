import {Outlet, Navigate} from "react-router-dom";


const privateRoute = () => {
	const adminToken = !!localStorage.getItem('adminToken')

	return adminToken ? <Outlet/> : <Navigate to='/auth'/>
}

export default privateRoute