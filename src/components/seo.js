/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
    >
      <meta name="title" content={title} />
      <meta name="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="description" content={metaDescription} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      {/* <meta name="image" content={image} /> */}
      <meta name="publisher" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="author" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:card" content="summary" />
      <meta name="copyright" content="2022 Copyright" />
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
