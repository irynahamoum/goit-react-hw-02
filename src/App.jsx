import Description from './components/Description/Description';
import description from './assets/Description.json';

function App() {
  const handleClick = () => {
    alert('I am button');
  };
  return (
    <div>
      <Description title={description.title} text={description.text} />
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
