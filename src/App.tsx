import { BrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <MainPage></MainPage>
    </BrowserRouter>
    </>
  )
}

export default App
