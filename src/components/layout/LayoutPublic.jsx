import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

const LayoutPublic = () => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default LayoutPublic;
