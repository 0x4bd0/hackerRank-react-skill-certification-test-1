import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

    let [sortBy,setSortBy] = useState('upvotes')

    const  sortFun  = ( a, b )  => {
        if ( a[sortBy] > b[sortBy] ){
          return -1;
        }
        if ( a[sortBy] < b[sortBy] ){
          return 1;
        }
        return 0;
      }

      let[ data,setArticles] = useState(articles.sort(sortFun))

      const sortByUpvoted = () => {
        setSortBy('upvotes')
        setArticles(data.sort(sortFun))
      }

      const sortByRecent = () => {
        setSortBy('date')
        setArticles(data.sort(sortFun))
      }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={sortByUpvoted}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={sortByRecent}>Most Recent</button>
            </div>
            <Articles articles={articles}/>
        </div>
    );

}

export default App;
