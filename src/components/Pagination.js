import React from 'react'

const Pagination = ({reposPerPage, totalRepos, paginate}) => {
  const pageNumbers = [];
  
  for(let i=1; i <= Math.ceil(totalRepos / reposPerPage); i++)  {
    pageNumbers.push(i);
  }
  return(
    <nav>
      <div className='Pagination'>
        {pageNumbers.map(number => (
          <i key={number} className='page-item'>
           <button className='counter' ><a onClick={() => paginate(number)} className='page-link'>
              {number}
            </a></button>
          </i>
        ))}
      </div>
    </nav>
  );
};

export default Pagination

