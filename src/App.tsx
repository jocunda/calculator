import './App.css';
import Calculator from './component/calculator';
import { LightModeContext, LightModeProvider } from './component/lightModeContext';

export default function App() {
  return (
    <div className="App">
      <LightModeProvider>
        <Calculator />
      </LightModeProvider>
    </div>
  );
}
