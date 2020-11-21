import React from 'react'
import '../../App.css'

const Notifications = (props) => {
  let {projects, userEmail, userId} = props;
  // const myProjects = props.projects.filter(function(value){return value.authorId === props.userId;});
  // const myHelpers = [];
  // const otherProjects = props.projects.filter(function(value){return value.authorId !== props.userId;});
  // const iAmHelping=[];
  // const myProjects = projects.filter(function(value){return value.authorId === userId;});
  // const otherProjects = projects.filter(function(value){return value.authorId !== userId;});
  // console.log(myProjects)
  // console.log(otherProjects)

  let myProjects = [];
  let myHelpers = [];
  let otherProjects = [];
  let iAmHelping = [];

  if (projects && userEmail && userId) {
    myProjects = props.projects.filter(function(value){return value.authorId === props.userId;});
    otherProjects = props.projects.filter(function(value){return value.authorId !== props.userId;});
    // for (const project in myProjects) {
    //   for (const helper in project.helpers) {
    //     myHelpers = myHelpers.concat(helper)
    //   }
    // }
    // for (const project in otherProjects) {
    //   for (const helper in project.helpers) {
    //     console.log(helper)
    //     if (helper.email === userEmail) {
    //       iAmHelping = iAmHelping.concat(helper)
    //     }
    //   }
    // }
  }

  // console.log(iAmHelping)

  // const blah = otherProjects.helpers.filter(function(value){return value.email === props.userEmail;});
  // console.log(blah)

  const helpers = <ul className="online-users">
  { myProjects && myProjects.map(item =>{
    return <li key={item.id}>
      <span className="my-orange-text">{item.title} </span>
      <span>{item.content}</span>
    </li>
  })}
</ul>

  const meHelp = <ul className="online-users">
  { otherProjects && otherProjects.map(item =>{
    return <li key={item.id}>
      <span className="my-orange-text">{item.title} </span>
      <span>{item.content}</span>
    </li>
  })}
</ul>

  return (
    projects && userEmail && userId ? (
      <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Crewmates Helping You</span>
          {helpers}
          <span className="card-title">Crewmates You Are Helping</span>
          {meHelp}
        </div>
      </div>
    </div>
    ):(
      <div className="container"> Loading... </div>
    )
  )
}

export default Notifications