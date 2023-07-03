import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prenavbar from './components/Prenavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import data from './data/data.json';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js';
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"


function App() {
  return (
    <Router>
      
      <Prenavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Routes>
        <Route path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
        <Route path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
        <Route path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
        <Route path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
        <Route path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>

      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading  text="IN THE PRESS"/>
      <Banner  banner={data.banner}/>
      <Footer footer={data.footer} />
      <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

    </Router>
  );
}

export default App;
