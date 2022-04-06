// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'

import SignUp from '../../components/sing-up-form/SignUp';
import SignIn from '../../components/sign-in-form/SignIn.jsx';

import { AuthenticationContainer } from './authentication.styles.jsx'


const Authentication = () => {
  // useEffect(() => {
  //   async function redirectMem() {
  //     const response = await getRedirectResult(auth);
  //     if(response){
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   redirectMem();
  // }, [])



  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>

  )
}

export default Authentication