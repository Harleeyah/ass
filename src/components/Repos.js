import React from "react";

const Repos = ({ repos, loading}) => {

    if(loading) {
        return <h2>Loading....</h2>;
    }

    return <ul className='list-group'>
        {repos.map(repo => (
            <li key={repo.id} className='list-group-item'>
                <a href = {repo.html_url}>{repo.name}</a>
            </li>
        ))}
    </ul>
        
}

export default Repos