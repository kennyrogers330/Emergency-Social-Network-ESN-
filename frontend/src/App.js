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
    <>
      <BrowserRouter>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          className: 'text-base max-w-md py-4 px-6 bg-gray-50 text-gray-700',
        }}
      />
    </>
  );
}

export default App;
