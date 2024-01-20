import './App.css'
import AppRouter from './routes/AppRouter'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {

  return (
    <>
    {/* Cargar header */}
    <Header />
    <AppRouter />
    {/* footer */}
    <Footer />
    </>
  )
}

export default App
