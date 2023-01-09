
import { useContext } from 'react';
import { AuthContext } from './auth/context/AuthContext';
import { AuthProvider } from './auth/context/AuthProvider';
import { AppRouters } from './routes';
import { AppTheme } from './theme/AppTheme';

function App() {



  return (
    <>
      <AppTheme>
        <AuthProvider>
          <AppRouters />
        </AuthProvider>
      </AppTheme>
    </>
  );
}

export default App;
