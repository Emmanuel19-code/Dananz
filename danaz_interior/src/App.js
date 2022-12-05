import Home from "./screen/Home";
import {Routes,Route } from 'react-router-dom';
import ContactUs from "./screen/ContactUs";
import Header from "./components/Header";
import OurTeams from "./screen/OurTeams";
import Service from "./screen/Service"
import About from "./screen/About"


function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/ourTeam" element={<OurTeams/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact-us" element={<ContactUs/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
