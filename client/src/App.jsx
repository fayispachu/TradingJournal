import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BottomNavbar from "./components/BottomNavbar";
import Login from "./pages/Login";
import { OtherContextProvider } from "./context/OtherStates.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>
        <OtherContextProvider>
          <UserContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <BottomNavbar />
          </UserContextProvider>
        </OtherContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
