import React from 'react';

const EventListItem = (props) => {
  return (
    <ul className="eachEvent">
      <li>
        {props.date} {props.description} {props.lang} {props.category1} {props.category2} {props.granularity}
      </li>
    </ul>
  )
  
}


export default EventListItem;