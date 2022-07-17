import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokemons from './screens/Pokemons';
import Pokemon from './screens/Pokemon';
import About from './screens/About';
import Contact from './screens/Contact';
import Blogs from './screens/Blogs';
import Blog from './screens/Blog';
import { Container } from '@mui/material';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Container maxWidth='lg'>
          <Routes>
            <Route path='/' element={<Pokemons />} />
            <Route path='/:id' element={<Pokemon />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blogs/:id' element={<Blog />} />
          </Routes>
        </Container>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
