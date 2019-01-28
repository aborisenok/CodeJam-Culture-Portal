import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import uuidv1 from  'uuid/v1';

const style = {
  date: { background: '#474747', color: '#fff' }
}

function BiographyTimeLine(props) {
  return (
    <Timeline lineColor={'#ddd'}>
      {props.data.activity.map((item) => {
        return (
          <TimelineItem
            key={uuidv1()}
            dateText={item.date}
            dateInnerStyle={style.date}
          >
            <h3>{item.place}</h3>
            <p>{item.description}</p>
          </TimelineItem>
        )
      }
      )}
    </Timeline>
  )
}

export default BiographyTimeLine;