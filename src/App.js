import { useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

//todo: Inner Component
import { MainLayout } from './components';
import routes from './routes';

import "./App.css"

// import { Container } from 'react-bootstrap';

const App = () => {
  let router = useRoutes(routes) // routes is Array of objects
  
  return (
    <MainLayout>
      <div className="App">
      
        {router}

        <ToastContainer rtl={true} />
      </div>
    </MainLayout>

  );

}
export default App;
