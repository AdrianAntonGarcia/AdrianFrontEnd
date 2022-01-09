import { Suspense } from 'react';
import { ThemeChangerProvider } from './context';
import { Navigation } from './routes';
import './scss/globalStyles.scss';
import { Grid } from './pages';
export default function App() {
  const tutorial = true;
  if (tutorial) {
    return (
      <Suspense fallback="loading">
        <ThemeChangerProvider>
          <Grid />
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
