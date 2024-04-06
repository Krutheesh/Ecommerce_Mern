import NavBar from '../features/navbar/Navbar';
import UserOrders from '../features/user/components/UserOrders';

function UserOrdersPage() {
  return (
    <div>
      <NavBar>
      </NavBar>
        <h1 className='md:mx-[4rem] mx-[2rem] font-bold text-2xl'>My Orders</h1>
        <UserOrders></UserOrders>
      
    </div>
  );
}

export default UserOrdersPage;
