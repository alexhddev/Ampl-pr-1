import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import outputs from '../amplify_outputs.json';
import { Amplify } from 'aws-amplify';
import TodoList from './TodoList';
import { Hub } from 'aws-amplify/utils';

Amplify.configure(outputs);
Hub.listen('auth', (data) => {
  console.log(data)
});
function App() {

  return (
    <>
      <h2>Hello</h2>
      <TodoList />
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </>
  )
}

export default App
