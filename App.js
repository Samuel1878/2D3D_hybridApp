
import AuthProvider from './src/services/auth/auth';
import Global from './src/services/global/global';
import BranchContainer from './src/layouts/mainBranches';
import Data from './src/services/data/data';


export default function App() {
  return (
    <Global>
      <AuthProvider>
        <Data>
          <BranchContainer />
        </Data>
      </AuthProvider>
    </Global>
  );
};
