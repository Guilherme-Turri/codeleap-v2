import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { NotFound } from "./pages/notfound";
import { Profile } from "./pages/profile";
import { ProtectedRoute } from './routes/ProtectedRoute';
import { Footer } from './templates/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<ProtectedRoute />} />
        <Route path="/user/:id" element={<Profile />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  );
}
export default App;
