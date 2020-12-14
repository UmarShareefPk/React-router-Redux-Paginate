import {React, useState} from 'react'

export default function Pages({TotalPages, PostsPerPage, setPageNumber }) {
    
    const [currentpage , SetCurrentPage] = useState(1);

    let pages = [];
    for(let i = 1; i <= Math.ceil(TotalPages / PostsPerPage) ; i++ )
    {
        pages.push(i);
    }

    const pageChanged = (page) =>{
        setPageNumber(page);
        SetCurrentPage(page);
    }

    pages = pages.map(p=>{
       
        if(p === currentpage)
            return  <button className={"page-" + p} style ={{backgroundColor:"blue" , color:"white"}} key={p} onClick={()=> pageChanged(p)}> {p}</button>
       if(p===1 || p===2 || p===3  || p===pages.length  || p===pages.length - 1 || p===pages.length - 2 
            || p +1 === currentpage  || p +2 === currentpage  || p +3 === currentpage  
            || p -1 === currentpage  || p -2 === currentpage  || p -3 === currentpage    
            )
              return  <button className={"page-" + p} key={p} onClick={()=> pageChanged(p)}> {p}</button>
        
    });
    
    return (
        <div>
            {pages}
        </div>
    )
}
