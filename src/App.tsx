import ClickCounterComponent from './components/ClickCounterComponent';
import MouseHoverCounter from './components/MouseHoverCounter';

const App = () => {
  return (
    <div>
      <h1>Custom Hooks Example</h1>
      <ClickCounterComponent />
      <MouseHoverCounter />
    </div>
  );
};

export default App;
