
import AuthProvider from './src/services/auth/auth';
import Global from './src/services/global/global';
import BranchContainer from './src/layouts/mainBranches';
import Data from './src/services/data/data';
import BetProvider from './src/services/bet/bet';
import SocketProvider from './src/services/socket/socket';


export default function App() {
  return (
    
      <AuthProvider>
        <Global>
        <Data>
          <SocketProvider>
            <BetProvider>
              <BranchContainer />
            </BetProvider>
          </SocketProvider>
        </Data>
        </Global>
      </AuthProvider>
  );
};
