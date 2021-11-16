import './App.css';
import {Button, Badge} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Button variant="primary">
          Profile <Badge bg="secondary">9</Badge>
          <span className="visually-hidden">unread messages</span>
       </Button>
    </div>
  );
}

export default App;