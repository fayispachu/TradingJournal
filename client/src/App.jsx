import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BottomNavbar from "./components/BottomNavbar";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { OtherContextProvider } from "./context/OtherStatesProvider";
import { UserContextProvider } from "./context/UserContextProvider";

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
