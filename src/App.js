import './App.css';
import Router from './Router/Routes';
import { SnackbarProvider } from 'notistack';
import AuthProvider from './context/authContext';
import DataProvider from './context/dataContext';

function App() {
  return (
    <DataProvider>
      <AuthProvider>
        <SnackbarProvider>
          <Router />
        </SnackbarProvider>
      </AuthProvider>
    </DataProvider>
  );
}

export default App;
