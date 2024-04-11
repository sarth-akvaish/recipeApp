import React, { lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import Subheader from './components/Subheader'
import Home from './pages/Home'
import Footer from './components/Footer'
import Loader from './components/Loader'
import { Provider, useSelector } from 'react-redux'
import appStore from './store/store'
import SavedRecipe from './components/SavedRecipe'
const Auth = lazy(() => import('./components/Auth'));
const RecipePage = lazy(() => import('./pages/RecipePage'))

const App = () => {

  return (
    <Provider store={appStore}>
      <Suspense fallback={<Loader />}>
        <Router>
          <Header />
          <Subheader />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipe/:id' element={<RecipePage />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/saved-recipes' element={<SavedRecipe />} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </Provider>
  )
}

export default App
