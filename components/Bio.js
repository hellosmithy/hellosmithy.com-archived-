import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        This is the site of <strong>{config.authorName}</strong>, a JavaScript developer who lives and works in London.
      </p>
    )
  }
}

export default Bio
