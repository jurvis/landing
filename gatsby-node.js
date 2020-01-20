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
  // const { createNodeField } = actions;
  attachFields(node, actions, getNode, descriptors);
}

exports.createPages = async  ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
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
  `)

  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.postPath
    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/post.jsx'),
    })
  })
}
