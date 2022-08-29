import {Outlet, Navigate} from 'react-router-dom';

const PrivateRoutes = ({children, ...rest}) => {
    let auth = {'token':localStorage.getItem('authorization')};
    console.log(auth);
    return(
        auth.token ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoutes;