/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const { attachFields } = require('gatsby-plugin-node-fields')
const { createFilePath } = require('gatsby-source-filesystem')

function isArticle(node) {
  return node.frontmatter != null && node.fileAbsolutePath.includes('/posts/');
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
        name: 'postPath',
        getter: node => {
          return {
            date: node.frontmatter.date,
            slug: node.frontmatter.slug,
            path: node.frontmatter.path,
          }
        },
        defaultValue: null,
        transformer: value => getFullPath(value)
      }
    ]
  }
]

const getFullPath = ({ date, slug, path }) => {
  const pathSlug = (path != null) ? path.split('/').pop() : slug

  const parsedDate = new Date(date);
  const paddedMonth = ('0' + (parsedDate.getMonth()+1)).slice(-2)
  return `/posts/${parsedDate.getFullYear()}/${paddedMonth}/${pathSlug}`
}

exports.onCreateNode = ({node, actions, getNode}) => {
  const { createNodeField } = actions;
  attachFields(node, createNodeField, descriptors);
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

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
                  fields {
                    postPath
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
          createPage({
            path: edge.node.fields.postPath,
            component: post,
          })
        })
      })
    )
  })
}
