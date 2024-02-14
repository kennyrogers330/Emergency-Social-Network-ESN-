import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes/Routes.js';
import { UserProvider } from './context/UserContext.js';

function App() {
  // useEffect(() => {
  //   const socket = io.connect('http://localhost:8000');
  //   socket.on('Data', (data) => {
  //     console.log('Message from server:', data);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <BrowserRouter>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
