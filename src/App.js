import React,{useState, useEffect} from 'react';
import Repos from './components/Repos';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage ] = useState(5);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      const res = await axios.get('https://api.github.com/users/Harleeyah/repos');
      setRepos(res.data);
      setLoading(false);
    }

    fetchRepos();
  },[]);

  console.log(repos)

  //Get Current Repos
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);


  //change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
 
  return (
    <div className='App'>
      <nav className='navbar'>
        <a className='home-link' href='https://web-platform-bgexer.stackblitz.io'><h5>Home</h5></a>
        <h1 className='github-repos'>My Github Repos</h1>
        <a href='https://assignment-omega-nine.vercel.app/'><h4>Error</h4></a>
      </nav>
      <Repos repos={currentRepos} loading={loading}/>
      <Pagination
        reposPerPage={reposPerPage} 
        totalRepos={repos.length} 
        paginate={paginate}
      />
    </div>
  );
}

export default App;
