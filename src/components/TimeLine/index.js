import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

export default function TimeLine (props) {
  return (
    <Timeline lineColor={'#ddd'}>
      {props.activity.map((item) => {
        return (
          <TimelineItem
            dateText={item.date}
            dateInnerStyle={{ background: '#474747', color: '#fff' }}
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