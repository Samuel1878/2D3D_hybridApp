
import AuthProvider from './src/services/auth/auth';
import Global from './src/services/global/global';
import BranchContainer from './src/layouts/mainBranches';

export default function App() {
  return (
    <Global>
      <AuthProvider>
        <BranchContainer />
      </AuthProvider>
    </Global>
  );
};
