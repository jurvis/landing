const visit = require(`unist-util-visit`)

module.exports = (
  { markdownAST }
) => {
  visit(markdownAST, `table`, node => {
    const tableHeaders = node.children[0].children.map(header => {
      if (header.children.length === 0) {
        return `<th></th>`
      } else {
        return `<th>${header.children[0].value}</th>`
      }
    }).join('');

    const tableRows = node.children.slice(1).map(row => {
      if (row.children.length === 0) {
        return `<tr></tr>`
      } else {
        return `<tr>
          ${row.children.map(col => `<td>${col.children[0].value}</td>`).join('')}
        </tr>
        ` 
      }
    }).join('');

    node.value = `
      <div class="wrapped-table">
        <table>
          <thead>${tableHeaders}</thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>
    `
    node.type = `html`

    return markdownAST
  })
}
