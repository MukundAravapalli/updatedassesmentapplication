import React from "react";

function DetailOutputBox(props) {
  return (
    <div className="card">
      <div className="top">
        <h4 className="name"><span class="term"></span>PMID {props.PMID_display}</h4>
        <h6 className="name">Title: {props.title_display}</h6>
      </div>
      <div className="bottom">
        <p className="info"><span class="term">Journal</span>: {props.journal_display}</p>
        <p className="info"><span class="term">Year</span>: {props.publication_year_display}</p>
        <p className="info"><span class="term">Pagination</span>: {props.pagination_display}</p>
        <br></br>
        <p className="info"><span class="term">Abstract</span>: {props.abstract_display}</p>
        <br></br>
        <p className="info"><span class="term">Author List</span>: {props.author_list_display}</p>
        <br></br>
        <p className="info"><span class="term">External Link</span>:<a href={props.external_link_display} target="_blank" rel="noreferrer">{props.external_link_display}</a></p>
      </div>
    </div>
  );
}

export default DetailOutputBox;