// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'

import SignUp from '../../components/sing-up-form/SignUp';
import SignIn from '../../components/sign-in-form/SignIn.jsx';

import './authentication.styles.scss'


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
    <div className='authentication-container'>     
      <SignIn />
      <SignUp/>
    </div>

  )
}

export default Authentication