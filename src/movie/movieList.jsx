import React,{useState} from 'react'

export default function MovieList() {

    const [Search, setSearch] = useState('')

    
  return (
    <div>
      
      {/* search bar view*/}
      <div className='topBar'>
        <input type='search' value={Search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search movies...' />
      
        {Search.length>0&&<ul className='search-wrapper'>
            <li><a>
                <h4>Last Action shit</h4>
                <span>1993</span>
            </a></li>

            <li><a>
                <h4>Last Action shit</h4>
                <span>1993</span>
            </a></li>
            <li><a>
                <h4>Last Action shit</h4>
                <span>1993</span>
            </a></li>
            <li><a>
                <h4>Last Action shit</h4>
                <span>1993</span>
            </a></li><li><a>
                <h4>Last Action shit</h4>
                <span>1993</span>
            </a></li><li><a>
                <h4>Last Action shit</h4>
                <span>1993</span>
            </a></li><li><a>
                <h4>Last Action shit</h4>
                <span>1993</span>
            </a></li><li><a>
                <h4>Last Action shit</h4>
                <span>1993</span>
            </a></li>

        </ul>}
      </div>

      

    

      {/* Body */}
      <div className='movieBody'>
        {/* popular */}
        <div>
            <h3>Popular</h3>

        </div>

        {/* toprated */}
        <div>

        </div>
      </div>
    </div>
  )
}
