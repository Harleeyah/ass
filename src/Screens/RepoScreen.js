import React,{useState, useEffect} from 'react'
import Repos from '../Components/Repos'
import Pagination from "../Components/Pagination"
import axios from 'axios'

const RepoScreen = () => {
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
      <div>
        <Repos repos={currentRepos} loading={loading}/>
        <Pagination
          reposPerPage={reposPerPage} 
          totalRepos={repos.length} 
          paginate={paginate}
        />
      </div>
    )
  }
  
  export default RepoScreen;
