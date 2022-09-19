import {Outlet, Navigate} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const PrivateRoutes = ({children, ...rest}) => {
    let auth = {'auth': false};
    const time = Date.now()
    const token = localStorage.getItem('authorization');
    if (token == null) {
        return (
            <Navigate to='/login' />
        )
    } else {
        const decoded = jwt_decode(token);
        // console.log(decoded);
        const decodedTime = decoded.exp*1000;
        const decodedExpire = new Date(decodedTime);
        console.log("expires at: "+decodedExpire);

        const currentTime = new Date().getTime();
        const currentDate = new Date(time);
        console.log("current time: " + currentDate.toString());
        
        if (decodedTime > currentTime) {
            return (
                <Outlet />
            )
        } else {
            return (
                <div>
                    Auth token expired. Click <a href="/login">here</a> to log in again.
                </div>
            )
        }
    }
}

export default PrivateRoutes;