import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, {injectGlobal} from 'styled-components'
import { GridProvider, Grid, Row, Col } from 'zooper-grid'
import * as theme from '../theme'

import './index.css'

class TemplateWrapper extends React.Component {
  constructor(){
    super()
    this.state = {
      contactActive: false
    }
  }
  openContact(){
    this.setState({
      contactActive: true
    })
  }
  closeContact(){
    this.setState({
      contactActive: false
    })
  }
  render(){
    console.log(this.props.data)
    return(
      <GridProvider breakpoints={theme.breakpoints}>
        <SiteWrapper>
          <Helmet
            title={this.props.data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
            link={[
                {"rel": "canonical", "href": "http://mysite.com/example"},
                {"rel": "stylesheet", "href": "https://fonts.googleapis.com/css?family=Eczar:400,700|Tenor+Sans" }
            ]}
          />
          <Header>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about/">About</MenuItem>
          </Header>
          <Footer>
            <ContactTrigger onClick={() => this.openContact()}>Contact</ContactTrigger>
          </Footer>
          <ContactOverlay overlay={this.state.contactActive} onClick={() => this.closeContact()}>
            <ContactLinkWrap>
              <ContactLink target="_target" href="http://www.instagram.com/elliotschultz">Instagram</ContactLink>
              <ContactLink target="_target" href="http://www.twitter.com/elliotschultz">Twitter</ContactLink>
              {/* <ContactLink target="_target" href="http://www.facebook.com/elliots">Facebook</ContactLink> */}
              <ContactLink target="_target" href="mailto:elliot@elliotschultz.com">Email</ContactLink>
            </ContactLinkWrap>
          </ContactOverlay>
          {this.props.children()}
        </SiteWrapper>
      </GridProvider>
    )
  }
}

const Header = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 500;
  text-align: right;
  padding: 3vw;
  margin: 0;
`

const Footer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 500;
  padding: 3vw;
  text-align: right;
`

const SiteWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  position: absolute;
`

const MenuItem = styled(Link)`
  ${theme.navLink}
  color: lightgrey;
  transition: color 300ms ease-out;
  padding-left: 3vw;

  &:hover {
    color: black;
  }
`

const ContactTrigger = styled.span`
  ${theme.navLink}
  color: #d4d4d4;
  transition: color 300ms ease-out;

  &:hover {
    color: black;
  }
`

const ContactOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 800;

  background-color: black;
  cursor: url(${`data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPHBvbHlnb24gaWQ9IlBhdGgtQ29weSIgZmlsbD0iI0Q0RDRENCIgcG9pbnRzPSIzIDAgMTIgMTAgMjEgMCAyNCAzIDE0IDEyIDI0IDIxIDIxIDI0IDEyIDE0IDMgMjQgMCAyMSAxMCAxMiAyLjg0MjE3MDk0ZS0xNCAzIj48L3BvbHlnb24+DQo8L3N2Zz4=`}) 16 16, auto;

  transition: opacity 450ms ease-out;
  opacity: ${props => props.overlay ? 1 : 0};
  pointer-events: ${props => props.overlay ? 'auto' : 'none'};
`

const ContactLinkWrap = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContactLink = styled.a`
  ${theme.title}
  color: lightgrey;
  text-decoration: none;
  margin: 0;
  line-height: 1.25;
  transition: color 300ms ease-in-out,
              transform 200ms ease-in-out;

  &:hover {
    color: #1e35a9;
    transform: scale(0.98);
  }
`

export const query = graphql`
  query UIQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
