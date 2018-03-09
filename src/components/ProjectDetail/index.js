import React from "react"

class ProjectDetail extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {
      name,
      subhead,
    } = this.props.project

    return (
      <div>
        <h2>{name}</h2>
        <h3>{subhead}</h3>
      </div>
    )
  }
}

export default ProjectDetail

export const projectDetailFragment = graphql`
  fragment Project_detail on ProjectsJson {
    name
    subhead
  }
`