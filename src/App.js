
import './App.scss';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from "./component/Home/Home"
import ScrollToTop from "./component/scrolltotop.jsx"
function App() {
  return (
    <>
        <Router>
        <ScrollToTop />
         <Routes>
         <Route exact path='/' element={<Home />}></Route>
         </Routes>
         </Router>
    </>
  );
}

export default App;
