
import './App.css';
import Header from './components/Header';
import { Footer } from "./components/Footer";
import { Medias } from "./components/Medias";
import { AddMedia } from "./components/AddMedia";
import { Search } from "./components/Search";
import React, { useState } from 'react';

function App() {

  const onDelete = (song) => {
    setMedias(medias.filter((e) => {
      return e !== song;
    }))
  }
  const search = (query) => {
    let results = medias.filter(media => {
      return media.title.toLowerCase().includes(query.toLowerCase());
    })
    setMedias([...results]);
  }
  const addMedia = (title, subtitle) => {
    let sno;
    if(medias.length!==0){
    sno = medias[medias.length - 1].sno + 1;
    }
    else{
      sno = 0;
    }
    const newMedia = {
      sno: sno,
      like:0,
      title: title,
      desc: subtitle,
    }
    setMedias([...medias, newMedia]);
  }
  const [medias, setMedias] = useState([
    {
      sno: 1,
      like:3,
      title: "Com Truise-flightwave",
      desc: "Reed"
    },
    {
      sno: 2,
      like:3,
      title: "Claude Debussy-clair de lune",
      desc: "Reed"
    },
    {
      sno: 3,
      like:2,
      title: "Culture shock - Troglodyte",
      desc: "Doug"
    },
  ]);
  return (

    <>
      <Header title=" ReactTracks" />
      <Search search={search} />
      <Medias medias={medias} onDelete={onDelete} />
      <AddMedia addMedia={addMedia} />
      <Footer />
    </>
  );
}

export default App;
