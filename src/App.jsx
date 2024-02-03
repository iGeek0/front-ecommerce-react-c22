import './App.css'
import AppRouter from './routes/AppRouter'
import Header from './components/Header'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <>
    {/* Cargar header */}
    <Header />
    <AppRouter />
    {/* footer */}
    <Footer />
    <Toaster />
    </>
  )
}

export default App
