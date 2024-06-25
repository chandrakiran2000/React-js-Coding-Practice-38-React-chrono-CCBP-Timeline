// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {each} = props
  console.log('5', each)
  const {courseTitle, duration, description, tagsList} = each
  console.log(tagsList)
  return (
    <div className="course-card">
      <div className="course-heading-card">
        <h1 className="course-heading-card-courseTitle">{courseTitle}</h1>
        

        <p className="course-heading-card-duration"><AiFillClockCircle color="#171f46" /> {duration}</p>
      </div>
      <div className="course-para-card">
        <p className="course-para-card-description">{description}</p>
      </div>
      <div className="course-tags-card">
        {tagsList.map(eachtags => (
          <div className="tag-card">
            <p className="course-tags-card-tagsname">{eachtags.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
