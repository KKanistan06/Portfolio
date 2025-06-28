import React, { Suspense } from 'react';
import { ThemeProvider } from './hooks/useTheme';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import { 
  LazyHome, 
  LazyAbout, 
  LazyProjects, 
  LazySkills, 
  LazyContact,
  LazyModernBackground 
} from './utils/lazyComponents';
import './styles/globals.scss';

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="App">
          <Suspense fallback={<LoadingSpinner />}>
            <LazyModernBackground />
          </Suspense>
          <Layout>
            <Suspense fallback={<LoadingSpinner />}>
              <LazyHome />
              <LazyAbout />
              <LazyProjects />
              <LazySkills />
              <LazyContact />
            </Suspense>
          </Layout>
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
