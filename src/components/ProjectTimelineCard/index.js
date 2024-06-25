// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {each} = props
  console.log('6', each)
  const {imageUrl, projectTitle, duration, description, projectUrl} = each
  console.log(projectUrl)
  return (
    <div className="project-card">
      <img className="project-img" src={imageUrl} alt="project" />
      <div className="project-heading-card">
        <h1 className="project-heading-card-courseTitle">{projectTitle}</h1>

        <p className="project-heading-card-duration">
          <AiFillCalendar color="#171f46" /> {duration}
        </p>
      </div>
      <div className="project-para-card">
        <p className="project-para-card-description">{description}</p>
        <a className="visit-text" href={projectUrl} target="_blank">
          Visit
        </a>
      </div>
      <div className="project-tags-card"></div>
    </div>
  )
}

export default ProjectTimelineCard
