import './App.css';
import ProfileDetailPage from './modules/RenterModule/ProfileDetail';
import RenterPage from './modules/RenterModule/RenterPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Monitor from './modules/Monitor';
import Layout from './Layout';
import RoomPage from './modules/RoomModule/RoomPage';
import NotFound from './modules/components/notfound';
import SettingPage from './modules/SettingModule/SettingPage';
import RenterRelativeComponent from './modules/RenterModule/RRList';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index path='/' element={<Monitor />} />
            <Route path='/renter' element={<RenterPage />} />
            <Route path='/renter/:id' element={<ProfileDetailPage />} />
            <Route path='/room/' element={<RoomPage />} />
            <Route path='/userSetting/' element={<RenterRelativeComponent />} />
            <Route path='/setting/' element={<SettingPage />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
