import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MainRoutes } from './routes/MainRoutes';

function AppContent() {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return (
    <div>
      <MainRoutes />
    </div>
  );
}

function App(){
 return(
  <BrowserRouter>
     <AppContent />
  </BrowserRouter>
  
 )
}

export default App;
