import './App.css';
import ProfileDetailPage from './modules/RenterModule/ProfileDetail';
import RenterPage from './modules/RenterModule/RenterPage';
import { Outlet, Route, Routes, BrowserRouter } from 'react-router-dom';
import AddRenterPage from './modules/RenterModule/addRenterPage';
import Monitor from './modules/Monitor';
import HeaderComponent from './modules/components/header';
import Layout from './Layout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Monitor />} />
            <Route path='/renter' element={<RenterPage />} />
            <Route path='/renter/addRenter' element={<AddRenterPage />} />
            <Route path='renter/:id' element={<ProfileDetailPage />} />
            <Route path='renter/:id/addrelative' element={<AddRenterPage />} />
          </Route>

        </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;
