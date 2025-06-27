import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';
export const Sidebar = () => {
  return (
    <Stack gap={1}>
      <div className="p-2">
        <Link className='nav-link'  to='/user'>Dashboard</Link >
      </div>
      <div className="p-2">
        <Link className='nav-link'  to='/user/books'>Books</Link >
         </div>
      <div className="p-2">
        <Link className='nav-link'  to='/user/all'>All Users</Link >
         </div>
      <div className="p-2">
        <Link className='nav-link'  to='/user/borrow-books'>Borrow History</Link >
         </div>
      <div className="p-2">
        <Link className='nav-link'  to='/user/profile'>Profile</Link>

      </div>
       <div className="p-2">
        <Link className='nav-link'  to='/user/reviews'>Reviews</Link >
         </div>
    </Stack>
  );
}

