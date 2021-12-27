import { ThemeChanger } from './components';
import { Navigation } from './routes';
export default function App() {
  return (
    <>
      <ThemeChanger>
        <Navigation />
      </ThemeChanger>
    </>
  );
}
