import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import PrivateRoute from './components/Routing/PrivateRoute';
import './App.css';
import AddStory from './components/StoryScreens/AddStory';
import DetailStory from './components/StoryScreens/DetailStory';
import Header from './components/GeneralScreens/Header';
import Footer from './components/GeneralScreens/Footer';
import NotFound from './components/GeneralScreens/NotFound';
import EditStory from './components/StoryScreens/EditStory';
import Sc1 from './components/GeneralScreens/sc1';
import AllGuns from './components/GeneralScreens/AllGuns';
import Login from './components/GeneralScreens/Login';
import GunDetails from './components/GeneralScreens/GunDetails';
import PrivacyPolicy from './components/GeneralScreens/Privacy';
import About from './components/GeneralScreens/About';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LayoutsWithHeader />}>
            <Route index element={<Sc1 />} />
            <Route path="story/:slug" element={<DetailStory />} />
            <Route path="create-post" element={<PrivateRoute><AddStory /></PrivateRoute>} />
            <Route path="story/:slug/like" element={<PrivateRoute><DetailStory /></PrivateRoute>} />
            <Route path="story/:slug/edit" element={<PrivateRoute><EditStory /></PrivateRoute>} />
            <Route path="story/:slug/delete" element={<PrivateRoute><DetailStory /></PrivateRoute>} />
            <Route path="story/:slug/addComment" element={<PrivateRoute><DetailStory /></PrivateRoute>} />
            <Route path="all-guns" element={<AllGuns />} />
            <Route path="gun/:name" element={<GunDetails />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

const LayoutsWithHeader = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
