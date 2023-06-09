import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import Search from './Pages/Search';
import Contact from './Pages/Contact';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Category from './Pages/Category';
import Recipe from './Pages/Recipe';
import Categories from './Pages/Categories';

function App() {
  return (
    <>
      <Header />
      <main className='container content'>
        <Routes>
          <Route exact path='/' element={ <Search /> }/>
          <Route path='/about' element={ <About /> }/>
          <Route path='/contact' element={ <Contact /> }/>
          <Route path='/categories' element={ <Categories />  } />
          <Route path='/category/:name' element={ <Category /> } />
          <Route path='/meal/:id' element={ <Recipe /> } />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
