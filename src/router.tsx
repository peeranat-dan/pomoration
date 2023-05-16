import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BaseLayout from './layouts/base';
import CenteredLayout from './layouts/centered';
import Home from './pages/home';
import Login from './pages/login';
import NotFound from './pages/not-found/NotFound';
// import Profile from './pages/profile';
import Signup from './pages/signup';
import AdminAuthGuard from './providers/auth/AuthGuard';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CenteredLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>

        <Route element={<BaseLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Routes>
        <Route
          element={
            <AdminAuthGuard>
              <BaseLayout />
            </AdminAuthGuard>
          }
        >
          {/* <Route path='/profile' element={<Profile />} /> */}
        </Route>
        <Route
          path='*'
          element={
            <CenteredLayout>
              <NotFound />
            </CenteredLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
