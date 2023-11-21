
import AuthProvider from './src/services/auth/auth';
import Global from './src/services/global/global';
import BranchContainer from './src/layouts/mainBranches';
import Data from './src/services/data/data';
import BetProvider from './src/services/bet/bet';
import SocketProvider from './src/services/socket/socket';
import Local from './src/services/localization/local';
// import {ViewPropTypes} from "deprecated-react-native-prop-types";


export default function App() {
  return (
    <Local>
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
    </Local>
  );
};
