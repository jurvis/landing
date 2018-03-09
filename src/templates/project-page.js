import * as PropTypes from "prop-types"
import React from "react"
import ProjectDetail from "../components/ProjectDetail"

class ProjectTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      projectsJson: PropTypes.object.isRequired,
    }),
  }

  render() {
    return (
      <ProjectDetail project={this.props.data.projectsJson} />
    )
  }
}

export default ProjectTemplate


export const pageQuery = graphql`
  query ProjectPage($id: String!) {
    # Select the post which equals this id.
    projectsJson(id: { eq: $id }) {
      ...Project_detail
    }
  }
`
