import React from "react"
import styled from 'tachyons-components';

const ProjectContainer = styled('article')`
  fl w-100 w-50-m w-third-ns pa2-ns
`

const ImageContainer = styled('div')`
  aspect-ratio aspect-ratio--1x1
`

const Image = styled('img')`
  db bg-center cover aspect-ratio--object
`

const LinkContainer = styled('a')`
  ph2 ph0-ns pb3 link db
`

const Title = styled('h3')`
  f5 f4-ns mb0 black-90
`

const SubTitle = styled('h3')`
  f6 f5 fw4 mt2 black-60
`

class ProjectDetail extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {
      name,
      skills,
      image_dir,
    } = this.props.project

    return (
      <ProjectContainer>
        <ImageContainer>
          <Image style={{backgroundImage: `url(${image_dir})`}}/>
        </ImageContainer>
        <LinkContainer>
          <Title>{name}</Title>
          <SubTitle>{skills}</SubTitle>
        </LinkContainer>
      </ProjectContainer>
    )
  }
}

export default ProjectDetail

export const projectDetailFragment = graphql`
  fragment Project_detail on ProjectsJson {
    name
    skills
    image_dir
  }
`