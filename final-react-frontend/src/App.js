import './App.css';
import ProfileDetailPage from './modules/RenterModule/ProfileDetail';
import RenterPage from './modules/RenterModule/RenterPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AddRenterPage from './modules/RenterModule/addRenterPage';
import Monitor from './modules/Monitor';
import Layout from './Layout';
import CreateAndUpdateProfileComponent from './modules/RenterModule/cuProfile';
import RoomPage from './modules/RoomModule/RoomPage';
import NotFound from './modules/components/notfound';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index path='/' element={<Monitor />} />
            <Route path='/renter' element={<RenterPage />} />
            <Route path='/renter/addRenter' element={<AddRenterPage />} />
            <Route path='/renter/:id' element={<ProfileDetailPage />} />
            <Route path='/renter/:id/update' element={<CreateAndUpdateProfileComponent state={{ MODE: "update" }} />} />
            <Route path='/renter/:id/addrelative' element={<AddRenterPage />} />
            <Route path='/room/' element={<RoomPage />} />
            <Route path='/room/:id' />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
