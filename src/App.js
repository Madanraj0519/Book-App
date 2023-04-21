import './App.css';
import { Routes ,Route } from 'react-router';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Favorites from './components/Favorites';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';



function App() {
  return (
  <div className="App">
    
    <Navbar />
      <Routes>

       <Route exact path="/Book-App/" element={<BookList />} />
       <Route path="/Books/:id" element={<BookDetails />} />
       <Route path="/Book/Favorite" element={<Favorites />} />
       <Route path="/Book/Cart" element={<Cart />} />

      </Routes>
    < Footer />

  </div>


  );
}

export default App;
