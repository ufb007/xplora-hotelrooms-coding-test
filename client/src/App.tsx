import { Routes, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './libs/graphql'
import Header from './components/Header'
import Home from './views/Home'
import Rooms from './views/Rooms'
import './App.css'

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className='flex justify-center fixed w-full'>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/hotel/:id' element={<Rooms />} />
            </Routes>
          </main>
        </div>
      </ApolloProvider>
    </>
  )
}

export default App
