import { Suspense } from 'react';
import { ThemeChangerProvider } from './context';
import { Navigation } from './routes';
import { Dashboard } from './pages';
import './scss/globalStyles.scss';
export default function App() {
  const tutorial = true;
  if (tutorial) {
    return <Dashboard />;
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
