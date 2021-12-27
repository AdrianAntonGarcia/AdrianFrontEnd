import { ThemeChangerProvider } from './context';
import { Navigation } from './routes';
export default function App() {
  return (
    <>
      <ThemeChangerProvider>
        <Navigation />
      </ThemeChangerProvider>
    </>
  );
}
