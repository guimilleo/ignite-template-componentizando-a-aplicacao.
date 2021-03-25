import { useState } from 'react';

import './styles/content.scss';
import './styles/button.scss';
import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/movie-card.scss';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';


export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar setGenreId={handleClickButton} genreId={selectedGenreId}/>
      <Content genreId={selectedGenreId}/>

    </div>
  )
}