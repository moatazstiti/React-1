import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './components/Name';
import Price from './components/Price';
import Image from './components/Image';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
       <Card style={{ width: '18rem' }}>
      <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
         <Description/>
        </Card.Text>
        <Card.Title><Price/></Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     
    </div>
  );
}

export default App;
