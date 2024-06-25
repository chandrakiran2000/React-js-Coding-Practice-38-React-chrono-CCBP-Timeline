// Write your code here
import {Component} from 'react'

import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  render() {
    console.log(this.props)
    const {timelineItemsList} = this.props

    return (
      <div className="bg-card">
        <div className="main-heading-card">
          <h1 className="my-journey-heading">
            MY JOURNEY OF <br />
            <span className="ccbp-4o-heading-span"> {'    '} CCBP 4.0</span>
          </h1>
          <h1 className="ccbp-4o-heading">CCBP 4.0</h1>
        </div>
        <div className="chrono-main">
          <div className="chrono-hw">
            <Chrono
              theme={{secondary: 'white'}}
              items={timelineItemsList}
              mode="VERTICAL_ALTERNATING"
            >
              {timelineItemsList.map(each => {
                console.log(each.categoryId)
                if (each.categoryId === 'COURSE') {
                  return <CourseTimelineCard each={each} />
                }
                return <ProjectTimelineCard each={each} />
              })}
            </Chrono>
          </div>
        </div>
      </div>
    )
  }
}

export default TimelineView
