import 'Styles/App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { FooterBar, MainRoute, NotFoundRoute } from 'Components/templates';

export default function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainRoute />} />
          <Route path='*' element={<NotFoundRoute />} />
        </Routes>
        <FooterBar />
      </BrowserRouter>
    </RecoilRoot>
  );
}
