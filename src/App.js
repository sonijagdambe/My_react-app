import logo from './logo.svg';
import './App.css';
import ProductComponent from './components/ProductComponent';

function App() {
  return (
    <div className="App">
      <ProductComponent Name={'NikeCasuals'} Price={4600} Photo={'https://media.istockphoto.com/id/1451567024/photo/picture-of-blue-canvas-sneaker.jpg?s=1024x1024&w=is&k=20&c=neNv4QX1AbfutdZzXuKwPS6QeV6U5CMt46_EF1G5m3Q='} />
    </div>
  );
}

export default App;
