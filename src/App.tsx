import ClickCounterComponent from './components/ClickCounterComponent';
import MouseHoverCounter from './components/MouseHoverCounter';
import ExampleComponent from './components/ExampleComponent'
const App = () => {
  return (
    <div>
      <h1>Custom Hooks Example</h1>
      <ClickCounterComponent />
      <MouseHoverCounter />
      <ExampleComponent/>
    </div>
  );
};

export default App;
