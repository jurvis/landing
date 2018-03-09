const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slug = require(`slug`);
const slash = require(`slash`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allProjectsJson(limit: 1000) {
              edges {
                node {
                  id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(new Error(result.errors))
        }

        // Create project pages
        const projectTemplate = path.resolve(`src/templates/project-page.js`)
        _.each(result.data.allProjectsJson.edges, edge => {
          createPage({
            path: `/${slug(edge.node.id)}/`,
            component: slash(projectTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })

        return
      })
    )
  })
}