import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { CommonLayout } from './components/CommonLayout/CommonLayout';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CampersPage = lazy(() => import('./pages/CampersPage/CampersPage'));
const DetailsPage = lazy(() => import('./pages/DetailsPage/DetailsPage'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage/FeaturesPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage/ReviewsPage'));
const ReservePage = lazy(() => import('./pages/ReservePage/ReservePage'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<CommonLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CampersPage />} />
            <Route path="/catalog/:id" element={<DetailsPage />}>
              <Route index element={<FeaturesPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
              <Route path="*" element={<Navigate to="/catalog" />} />
            </Route>
            <Route path="/reserve" element={<ReservePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
