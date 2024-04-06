import NavBar from '../features/navbar/Navbar';
import UserProfile from '../features/user/components/UserProfile';

function UserProfilePage() {
  return (
    <div>
      <NavBar></NavBar>
        <h1 className='md:mx-[4rem] mx-[2rem] text-2xl'>My Profile</h1>
        <UserProfile></UserProfile>
      
    </div>
  );
}

export default UserProfilePage;