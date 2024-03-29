import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AppRoutes from './routes/Routes.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { ExistingUsersProvider } from './context/ExistingUsersContext.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <ExistingUsersProvider>
          <UserProvider>
            <AppRoutes />
          </UserProvider>
        </ExistingUsersProvider>
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
  )
}

export default App
