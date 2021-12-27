import { Suspense } from 'react';
import { ThemeChangerProvider } from './context';
import { Navigation } from './routes';
export default function App() {
  return (
    <Suspense fallback="loading">
      <ThemeChangerProvider>
        <Navigation />
      </ThemeChangerProvider>
    </Suspense>
  );
}
