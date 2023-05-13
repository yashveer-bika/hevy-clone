import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Navbar, NavbarText, NavbarButton } from './styles';
// import Home from './pages/FeedPage';
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./NavBar";
// import About from './pages/Home';
// import Contact from './pages/Home';
import Pages from "./Pages.json";
import FeedPage from "./pages/FeedPage";
import RoutinesPage from "./pages/RoutinesPage";

function App() {
  return (
    <ChakraProvider>
      <Router>
        {/* <Navbar>
          <NavbarText fontSize="xl" fontWeight="bold">My Website</NavbarText>
          <Spacer />
          <NavbarButton as={Link} to="/">Home</NavbarButton>
          <NavbarButton as={Link} to="/about">About</NavbarButton>
          <NavbarButton as={Link} to="/contact">Contact</NavbarButton>
        </Navbar> */}

        <NavBar pages={ Pages } />

        <Routes>
          {/* <Route path="/" element={<Home></Home>}> </Route> */}
          <Route path="/" element={<FeedPage/>}/>
          <Route path="/routines" element={<RoutinesPage/>}/>
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<NotFoundPage></NotFoundPage>}/>
        </Routes>

      </Router>
    </ChakraProvider>
  );
}

export default App;