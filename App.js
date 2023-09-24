
import AuthProvider from './src/services/auth/auth';
import Global from './src/services/global/global';
import BranchContainer from './src/layouts/mainBranches';
import Data from './src/services/data/data';
import BetProvider from './src/services/bet/bet';


export default function App() {
  return (
    <Global>
      <AuthProvider>
        <Data>
          <BetProvider>
            <BranchContainer />
          </BetProvider>
        </Data>
      </AuthProvider>
    </Global>
  );
};
