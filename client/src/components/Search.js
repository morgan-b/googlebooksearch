import React from 'react'

export function Search(props) {
    return (
        
        <>
            <label for="bookOptions" className="form-label fw-bold">Search for a Book!</label>
            <input className="form-control" onChange={props.onChange} id="bookOptions" placeholder="Type to search..." {...props}/>
         
       
        </>
    )
}



export function FormBtn(props) {
    return(
<button type="submit" onClick={props.onClick} class="btn localBtn btn-dark btn-lg mb-3 mt-3">Search</button>   )
}
