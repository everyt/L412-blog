import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FooterBar } from 'Components/templates';
import { MainPage } from 'Components/templates';
import { NotFoundPage } from 'Components/templates';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <FooterBar />
    </BrowserRouter>
  );
}
