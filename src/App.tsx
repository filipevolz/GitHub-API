import { Repositories } from './pages/Repositories';
import { UserSearch } from './pages/UserSearch';
import { BrowserRouter, Routes, Route } from "react-router";

import './styles/global.css';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path='/userSearch'
          element={<UserSearch />}
        />
        <Route
          path='/repositories'
          element={<Repositories/>}
        />
      </Routes>
    </BrowserRouter>
  )
}
