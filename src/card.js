import React from 'react';
import './card.css';

function card(props) {
    return(
        <div className="card">
               <button
        type='button'
        onClick={() => props.onClickDelete(props.id)}
      >delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
     )
}

card.propTypes = {
  onClickDelete: () => {}
}
export default card;