import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import * as theme from '../theme'
import { Grid, Row, Col } from 'zooper-grid'

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(post)
  const featuredImage = post.frontmatter.featuredImage.childImageSharp.responsiveSizes
  const projectImages = post.frontmatter.images && post.frontmatter.images.map((image, i) => {
    console.log("image", image)
    return (
      <ProjectImage
        src={image.image.childImageSharp.responsiveSizes.src}
        srcSet={image.image.childImageSharp.responsiveSizes.srcSet}
        key={'projectImage-' + i}
      />
    )
  })
  // console.log(post.frontmatter.images)
  // console.log(projectImages)
  // console.log("testing", post.frontmatter.images)
  return (
    <SiteWrapper>
      <Grid>
        <TitleRow>
          <Col xs={12}>
            <Title>{post.frontmatter.title}</Title>
          </Col>
        </TitleRow>
        <Row>
          <Col xs={12}>
            <FeaturedImage
              src={featuredImage.src}
              srcSet={featuredImage.srcSet}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} mdLeft={2}>
            <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            {projectImages}
          </Col>
        </Row>
      </Grid>
    </SiteWrapper>
  )
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        images {
          image {
            childImageSharp {
              responsiveSizes {
                src
              }
            }
          }
          description
        }
        featuredImage {
          childImageSharp {
            responsiveSizes {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

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

const FeaturedImage = styled.img`
  width: 100%;
  height: auto;
`

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 6rem;
`

const Content = styled.div`
  ${theme.markdownContent}
  color: ${theme.primaryColour};
  padding: 6rem 0 10rem;
`
