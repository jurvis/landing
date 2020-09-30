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
  return node.frontmatter != null && node.fileAbsolutePath.includes('/posts/')
}

const descriptors = [
  {
    predicate: isArticle,
    fields: [
      {
        name: 'thumbnailIsCover',
        getter: node => node.frontmatter.thumbnailIsCover,
        defaultValue: true,
      },
      {
        name: 'thumbnail',
        getter: node => node.frontmatter.thumbnail,
        defaultValue: null,
      },
      {
        name: 'thumbnailCaption',
        getter: node => node.frontmatter.thumbnailCaption,
        defaultValue: undefined,
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
        transformer: value => getFullPath(value),
      },
    ],
  },
]

const getFullPath = ({ date, slug, path }) => {
  const pathSlug = path != null ? path.split('/').pop() : slug

  const parsedDate = new Date(date)
  const paddedMonth = ('0' + (parsedDate.getMonth() + 1)).slice(-2)
  return `/posts/${parsedDate.getFullYear()}/${paddedMonth}/${pathSlug}`
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  // const { createNodeField } = actions;
  attachFields(node, actions, getNode, descriptors)
}

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
            }
            fields {
              postPath
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  posts.forEach(({ node }, index) => {
    const slug = node.fields.postPath
    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/post.jsx'),
      context: {
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })
  })
}
