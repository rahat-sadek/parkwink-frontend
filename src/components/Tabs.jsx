import { BrowserRouter, Route, Routes } from 'react-router-dom';
<BrowserRouter>
<Routes>
<Route path="/user" element={<UserPage />} />
<Route path="/admin" element={<AdminPage />} />
</Routes>
</BrowserRouter>