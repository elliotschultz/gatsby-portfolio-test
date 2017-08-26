import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import * as theme from '../theme'
import { GridProvider, Grid, Row, Col } from 'zooper-grid'

class IndexPage extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(
      <SiteWrapper>
        <Grid>
          <TitleRow>
            <Col xs={12}>
              <Title>Artist Name</Title>
            </Col>
          </TitleRow>
          <Row>
            {this.props.data.allMarkdownRemark.edges.map(({ node }) =>
              <Col xs={12} md={6} lg={4} key={node.fields.slug}>
                <ProjectExcerpt to={node.fields.slug}>
                  <ProjectThumbnail src={node.frontmatter.featuredImage.childImageSharp.responsiveSizes.src}/>
                  <ProjectExcerptTitle>{node.frontmatter.title}</ProjectExcerptTitle>
                </ProjectExcerpt>
              </Col>
            )}
          </Row>
        </Grid>
      </SiteWrapper>
    )
  }
}

const SiteWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  position: absolute;
  background-color: ${theme.secondaryColour};
`

const TitleRow = styled(Row)`
  text-align: center;
  padding: 12rem 0 10rem;
`

const Title = styled.h1`
  ${theme.title}
  color: ${theme.primaryColour};
  margin: 0;
`

const ProjectExcerpt = styled(Link)`
  width: 100%;
  display: block;
  transition: opacity 300ms ease-in-out,
              transform 200ms ease-in-out;

  &:hover {
    transform: scale(0.98);
    opacity: 0.8;
  }
`
const ProjectThumbnail = styled.img`
  width: 100%;
  margin: 0;
`
const ProjectExcerptTitle = styled.h3`
  ${theme.defaultCopy}
  color: ${theme.primaryColour};
  padding-top: 1rem;
  margin-bottom: 3rem;
`

export const query = graphql`
  query HomeQuery {
    allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }){
  		edges {
        node {
        	frontmatter {
        	  title
            featuredImage {
              childImageSharp {
                responsiveSizes {
                  src
                }
              }
            }
        	}
          fields {
            slug
          }
        }
      }
    },
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
