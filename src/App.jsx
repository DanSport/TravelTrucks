import { Navigate, Route, Routes } from 'react-router';
import { CommonLayout } from './components/CommonLayout/CommonLayout';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CampersPage = lazy(() => import('./pages/CampersPage/CampersPage'));
const DetailsPage = lazy(() => import('./pages/DetailsPage/DetailsPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage/ReviewsPage'));
const ReservePage = lazy(() => import('./pages/ReservePage/ReservePage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<CommonLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/campers' element={<CampersPage />}>
            <Route path=':id' element={<DetailsPage />} />
            <Route path=':id/reviews' element={<ReviewsPage />} />
          </Route>
          <Route path='/reserve' element={<ReservePage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
