import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
// import { Navbar, NavbarText, NavbarButton } from './styles';
// import Home from './pages/FeedPage';
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./NavBar";
// import About from './pages/Home';
// import Contact from './pages/Home';
import Pages from "./Pages.json";
import FeedPage from "./pages/FeedPage";
import RoutinesPage from "./pages/RoutinesPage";
import CreateRoutine from "./pages/CreateRoutine";
import RoutineViewPage from "./pages/RoutineViewPage";
import ExercisePage from "./pages/ExercisePage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import LogPage from "./pages/LogPage";
import LoggingPage from "./pages/LoggingPage";

function App() {

  return (
    <ChakraProvider>
      <HashRouter>
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
          <Route path="/hevy-clone" element={<FeedPage/>}/>
          <Route path="/hevy-clone/routines" element={<RoutinesPage/>}/>
          <Route path="/hevy-clone/create-routine" element={<CreateRoutine editMode={false}/>}/>
          <Route path="/hevy-clone/routine-view" element={<RoutineViewPage/>}/>
          <Route path="/hevy-clone/edit-routine/:id" element={<CreateRoutine editMode={true}/>} />
          <Route path="/hevy-clone/exercises" element={<ExercisePage/>}/>
          <Route path="/hevy-clone/exercises/:id" element={<ExercisePage/>}/>
          <Route path="/hevy-clone/profile" element={<ProfilePage/>}/>

          <Route path="/hevy-clone/settings" element={<SettingsPage/>}/>
          
          <Route path="/hevy-clone/settings?profile" element={<SettingsPage/>}/>
          <Route path="/hevy-clone/settings?accounts" element={<SettingsPage/>}/>
          <Route path="/hevy-clone/settings?subscription" element={<SettingsPage/>}/>
          <Route path="/hevy-clone/settings?units" element={<SettingsPage/>}/>
          <Route path="/hevy-clone/settings?theme" element={<SettingsPage/>}/>
          <Route path="/hevy-clone/settings?export" element={<SettingsPage/>}/>


          <Route path="/hevy-clone/log" element={<LogPage />} />
          {/* TODO: set up better path logic */}
          <Route path="/hevy-clone/logging/routine-id/id" element={<LoggingPage />} />
          <Route path="/hevy-clone/logging/new-routine" element={<LoggingPage />} />
          <Route path="/hevy-clone/*" element={<NotFoundPage></NotFoundPage>}/>
        </Routes>

      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
