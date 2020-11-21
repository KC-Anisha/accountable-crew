import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment';
import { addHelper, completeProject } from '../../store/actions/projectActions'

const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />

  function submitAddHelper() {
    props.addHelper(props.match.params.id, project);
    props.history.push('/');
  }

  function deleteProject() {
    props.completeProject(props.match.params.id);
    props.history.push('/');
  }

  if (project) {
    const endButton = project.authorId !== auth.uid ? (
      project.helpers.length && (project.helpers.find(x => x.email === auth.email)) !== undefined ? (
        <> </>
      ):(
        <a className="waves-effect waves-light btn-small my-orange" onClick={submitAddHelper}>Be Accountable</a>
      )
    ):(
      <a className="waves-effect waves-light btn-small my-orange" onClick={deleteProject}>Completed Goal</a>
    )

    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
          <div className="row">
            <div className="col s9">
              <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
              <div>{moment(project.createdAt.toDate()).calendar()}</div>
              <div># Crewmembers helping: {project.helpers.length}</div>
            </div>
            <div className="col s3">{endButton}</div>
          </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading Goal...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addHelper: (id, project) => dispatch(addHelper(id, project)),
    completeProject: (id) => dispatch(completeProject(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [
    { collection : "projects", doc: props.match.params.id }
  ])
)(ProjectDetails)