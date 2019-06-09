/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const { attachFields } = require('gatsby-plugin-node-fields')

function isArticle(node) {
  const regex = /^posts\/.+/gm;

  return (node.frontmatter != null) && regex.test(node.relativePath);
}

const descriptors = [
  {
    predicate: isArticle,
    fields: [
      {
        name: 'thumbnail',
        getter: node => node.frontmatter.thumbnail,
        defaultValue: null,
      },
      {
        name: 'thumbnailCaption',
        getter: node => node.frontmatter.thumbnailCaption,
        defaultValue: undefined
      },
      {
        name: 'slug',
        getter: node => node.frontmatter.slug,
        defaultValue: undefined
      }
    ]
  }
]

exports.onCreateNode = ({node, boundActionCreators}) => {
  const { createNodeField } = boundActionCreators;
  attachFields(node, createNodeField, descriptors);
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const post = path.resolve('./src/templates/post.jsx')

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    path
                    slug
                    date
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) reject(result.errors)

        const { edges } = result.data.allMarkdownRemark

        edges.forEach(edge => {
          const { date, slug, path } = edge.node.frontmatter;
          const pathSlug = (path != null) ? path.split('/').pop() : slug

          const parsedDate = new Date(date);
          const paddedMonth = ('0' + (parsedDate.getMonth()+1)).slice(-2)
          const path = `/posts/${parsedDate.getFullYear()}/${paddedMonth}/${pathSlug}`

          createPage({
            path,
            component: post,
          })
        })
      })
    )
  })
}
