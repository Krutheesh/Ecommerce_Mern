import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLoggedInUser } from '../authSlice';

function ProtectedPopular({ children }) {
  const user = useSelector(selectLoggedInUser);
 console.log(user)
  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
 
  return children;
}

export default ProtectedPopular;
