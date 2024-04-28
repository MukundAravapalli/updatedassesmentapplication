import React, {useState, useEffect} from 'react';
import '../App.css';
import ListIDInput from './ListIDInput.jsx';
import DetailsInput from './DetailsInput.jsx';
import DetailOutputBox from './DetailOutputBox.jsx';
import details from '../details.js';
import Pages from './Pages.jsx';

  
function createDetailOutputBox(detail){
    return(
      <DetailOutputBox
      key = {detail.id}
      otherkey = {detail.id}
      PMID_display = {detail.PMID}
      title_display = {detail.Title}
      abstract_display = {detail.Abstract}
      author_list_display = {detail.AuthorList}
      journal_display = {detail.Journal}
      publication_year_display = {detail.PublicationYear}
      mesh_terms_display = {detail.MeSHTerms}
      pagination_display = {detail.Pagination}
      external_link_display = {detail.ExternalLink}
      />
    );
    
  }


function App() {
  // const[data, setData] = useState([{}])

  // useEffect(()=>{
  //   fetch("/members").then(
  //     res => res.json()
  //   ).then( 
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // }, [])

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(1);
  

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentOutput = (details.map(createDetailOutputBox)).slice(firstPostIndex, lastPostIndex)

  return (
    <div className="App">

      <ListIDInput/>
      <br></br>
      <br></br>
      <DetailsInput/>

      <br></br>
      <br></br>
      <h2>Output</h2>
      {/* {details.map(createDetailOutputBox)} */}
      {currentOutput}
      <Pages 
        setCurrentPage = {setCurrentPage}
        currentPage = {currentPage}
      />
      

    </div>
  );
}


export default App;
