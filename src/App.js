import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurProjects from './pages/OurProjects'
import OurProducts from './pages/OurProducts'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Contact from './pages/Contact'
import Pricelist from './pages/Pricelist'
import BestSellingGoods from './pages/BestSellingGoods'
import LastProjects from './pages/LastProjects'
import { useEffect } from 'react'

function App() {
    useEffect(() => {
        let ibg = document.querySelectorAll('.ibg')
        console.log(ibg)
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img')) {
                ibg[i].style.backgroundImage =
                    'url(' + ibg[i].querySelector('img').getAttribute('src') + ')'
            }
        }
    })

    return (
        <div className='wrapper'>
            <main className='page'>
                <Router>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/about-us' component={AboutUs} />
                        <Route path='/our-projects'>
                            <OurProjects />
                        </Route>
                        <Route path='/our-products'>
                            <OurProducts />
                        </Route>
                        <Route path='/contact'>
                            <Contact />
                        </Route>
                        <Route path='/pricelist'>
                            <Pricelist />
                        </Route>
                        <Route path='/bestsellinggoods'>
                            <BestSellingGoods />
                        </Route>
                        <Route path='/lastprojects'>
                            <LastProjects />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </main>
        </div>
    )
}

export default App
