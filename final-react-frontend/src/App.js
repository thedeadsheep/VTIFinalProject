import './App.css';
import ProfileDetailPage from './modules/RenterModule/ProfileDetail';
import RenterPage from './modules/RenterModule/RenterPage';
import { Outlet, Route, Routes, BrowserRouter } from 'react-router-dom';
import AddRenterPage from './modules/RenterModule/addRenterPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/renter' element={<RenterPage />} />
          <Route path='/renter/addRenter' element={<AddRenterPage />} />
          <Route path='renter/:id' element={<ProfileDetailPage />} />


        </Routes>
      </BrowserRouter>

      <Outlet>

      </Outlet>
    </>
  );
}

export default App;
