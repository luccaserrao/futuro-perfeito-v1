import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { AppRoutes } from './types';

// Loading Component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
  </div>
);

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const QuizHome = lazy(() => import('./pages/QuizHome').then(module => ({ default: module.QuizHome })));
const QuizQuestions = lazy(() => import('./pages/QuizQuestions').then(module => ({ default: module.QuizQuestions })));
const Result = lazy(() => import('./pages/Result').then(module => ({ default: module.Result })));
const ReportSales = lazy(() => import('./pages/ReportSales').then(module => ({ default: module.ReportSales })));
const Blog = lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost').then(module => ({ default: module.BlogPost })));
const Checkout = lazy(() => import('./pages/Checkout').then(module => ({ default: module.Checkout })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Terms = lazy(() => import('./pages/Terms').then(module => ({ default: module.Terms })));
const Privacy = lazy(() => import('./pages/Privacy').then(module => ({ default: module.Privacy })));
const ThankYou = lazy(() => import('./pages/ThankYou').then(module => ({ default: module.ThankYou })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Support = lazy(() => import('./pages/Support').then(module => ({ default: module.Support })));
const MyReport = lazy(() => import('./pages/MyReport').then(module => ({ default: module.MyReport })));

const App: React.FC = () => {
  return (
    <QuizProvider>
      <HashRouter>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path={AppRoutes.HOME} element={<Home />} />
              
              {/* Quiz Flow */}
              <Route path={AppRoutes.QUIZ_INTRO} element={<QuizHome />} />
              <Route path={AppRoutes.QUIZ_QUESTIONS} element={<QuizQuestions />} />
              <Route path={AppRoutes.RESULT} element={<Result />} />
              <Route path={AppRoutes.CHECKOUT} element={<Checkout />} />
              <Route path={AppRoutes.THANK_YOU} element={<ThankYou />} />
              
              {/* Sales & Blog */}
              <Route path={AppRoutes.REPORT} element={<ReportSales />} />
              <Route path={AppRoutes.BLOG} element={<Blog />} />
              <Route path={`${AppRoutes.BLOG}/:slug`} element={<BlogPost />} />
              <Route path="/meu-relatorio" element={<MyReport />} />
              
              {/* Institutional */}
              <Route path={AppRoutes.ABOUT} element={<About />} />
              <Route path={AppRoutes.SUPPORT} element={<Support />} />
              <Route path={AppRoutes.CONTACT} element={<Contact />} />
              <Route path={AppRoutes.TERMS} element={<Terms />} />
              <Route path={AppRoutes.PRIVACY} element={<Privacy />} />
            </Routes>
          </Suspense>
        </Layout>
      </HashRouter>
    </QuizProvider>
  );
};

export default App;
