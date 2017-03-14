/* eslint-disable no-unused-vars */

/* <div class="container">
      <div class="row">
        <div class="col-xs-6">
        </div>
        <div class="col-xs-6">
        </div>
      </div>
    </div>
*/
var items = [
  {
    name: 'Toy',
    description: 'Lego toy for kids'
  },
  {
    name: 'Bike',
    description: '26" Mens Bike'
  }
]

items.forEach(function(item) {
  var $container = document.createElement('div')
  var $row = document.createElement('div')
  $row.textContent = item.name
  var $col = document.createElement('div')
  $col.textContent = item.description
  document.body.appendChild($container)
  $container.appendChild($row)
  $row.appendChild($col)
  $container.classList.add('container')
  $row.classList.add('row')
  $col.classList.add('col-xs-6')
  $col.classList.add('col')
  return items
})
