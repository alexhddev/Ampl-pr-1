import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import outputs from '../amplify_outputs.json';
import { Amplify } from 'aws-amplify';

Amplify.configure(outputs);
function App() {

  return (
    <>
      <h2>Hello</h2>
      <Authenticator />
    </>
  )
}

export default App
