import './App.css';
import Actor from './data-models/Actor';
import Actors from './components/ActorsView';


function App() {
  const actorsData = [];
  actorsData.push(new Actor('Meryl', 'Streep', 1949, 'https://m.media-amazon.com/images/M/MV5BMTU4Mjk5MDExOF5BMl5BanBnXkFtZTcwOTU1MTMyMw@@._V1_UY317_CR6,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000658/?ref_=nm_mv_close'));
  actorsData.push(new Actor('Anne', 'Hathaway', 1982, 'https://m.media-amazon.com/images/M/MV5BMTRhNzQ3NGMtZmQ1Mi00ZTViLTk3OTgtOTk0YzE2YTgwMmFjXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_UY317_CR20,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0004266/?ref_=tt_cl_t2'));
  actorsData.push(new Actor('Rowan', 'Atkinson', 1955, 'https://m.media-amazon.com/images/M/MV5BMTg3NDUzOTc3MV5BMl5BanBnXkFtZTcwNjcxMDkxNw@@._V1_UY317_CR0,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000100/?ref_=tt_cl_t1'));
  actorsData.push(new Actor('Ryan', 'Gosling', 1980, 'https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_UY317_CR18,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0331516/'));
  actorsData.push(new Actor('Regé-Jean', 'Page', 1990, 'https://m.media-amazon.com/images/M/MV5BMTU1NDA2NmYtMmE5NS00NmU2LThkNmYtZjlhMzAzODRjNTVlXkEyXkFqcGdeQXVyNTU4MjE0ODI@._V1_UY317_CR11,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm2074546/'));

  

  return (
    <div>
      <Actors actors={actorsData}/>
    </div>
  );
}

export default App;


