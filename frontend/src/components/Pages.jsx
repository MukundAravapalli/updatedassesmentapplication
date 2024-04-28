import React from "react";
import details from '../details.js';

function Pages({setCurrentPage, currentPage}) {
    let page_numbers = [];

    for(let i=1; i<=details.length; i++){
        page_numbers.push(i)
    }

    return(
        <div className="pages">
           {page_numbers.map(function(page, index){
                return <button key={index} onClick={()=> setCurrentPage(page)} className={page === currentPage ? 'active': ''}>{page}</button>;
           })} 
        </div>
    );
}

export default Pages;