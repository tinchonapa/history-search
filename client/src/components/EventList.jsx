import React from 'react';
import EventListItem from './EventListItem.jsx';

const EventList = (props) => {

  const EventListComponents = props.historicalEvents.map((item) => {
    console.log('This are props', props)
    return (
      <EventListItem 
        date={item.date} 
        description={item.description}
        lang={item.lang}
        category1={item.category1}
        category2={item.category2}
        granularity={item.granularity}
      />)
  })

  return (
    <ul className="events">
      {EventListComponents}
    </ul>
  );
};

export default EventList;