import React from 'react'
import { Redirect } from 'react-router';
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'
import { GridProvider, Grid, Row, Col } from 'zooper-grid'
import * as theme from '../theme'

const AboutPage = () =>
  <SiteWrapper>
    <AboutWrap>
      <Title>
        About
      </Title>
      <Copy>
        Mattis ut sapien, sodales ut massa ac, cursus dapibus lectus. Cras ante mi, sagittis eu faucibus convallis, dapibus lectus sollicitudin at&nbsp;sapien.
      </Copy>
    </AboutWrap>
  </SiteWrapper>

const SiteWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${theme.secondaryColour}
`

const AboutWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  ${theme.defaultCopy}
  color: lightgrey;
  margin: 0 0 2rem;
  text-transform: uppercase;
`

const Copy = styled.p`
  ${theme.prominentCopy}
  color: lightgrey;
  max-width: 90vw;

  @media screen and (min-width: ${theme.mdMin}){
    max-width: 60vw;
    text-align: center;
  }
`

export default AboutPage
