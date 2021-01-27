import './App.css';
import { HeaderComponent } from './components/header/header.component'
import { TasksComponent } from './components/tasks/tasks.component.jsx'
import Container from 'react-bootstrap/Container'

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <Container>
        <TasksComponent />
      </Container>
    </div>
  );
}

export default App;
