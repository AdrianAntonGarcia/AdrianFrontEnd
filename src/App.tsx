import { Suspense } from 'react';
import { ModalProvider, ThemeChangerProvider } from './context';
import { Navigation } from './routes';
import './scss/globalStyles.scss';
import { AagDashboard } from './routes';
// import { Grid } from './pages';

export default function App() {
  const tutorial = true;
  if (tutorial) {
    return (
      <Suspense fallback="loading">
        <ThemeChangerProvider>
          <ModalProvider>
            <AagDashboard />
          </ModalProvider>
        </ThemeChangerProvider>
      </Suspense>
    );
  } else {
    return (
      <Suspense fallback="loading">
        <ThemeChangerProvider>
          <Navigation />
        </ThemeChangerProvider>
      </Suspense>
    );
  }
}
