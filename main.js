/* eslint-disable no-unused-vars */

var items = [
  {
    itemName: 'Toy',
    itemDescription: 'Lego toy for kids',
    link: 'https://cdn.pixabay.com/photo/2016/07/19/23/38/superman-1529274__340.jpg'
  },
  {
    itemName: 'Bike',
    itemDescription: '26" Mens Bike',
    link: 'http://cdn2.ternbicycles.com/sites/default/files/images/bikes/unfolded/2016/11/linka7-g1-unfold-m0-dkblue.jpg'
  }
]

items.forEach(function(item) {
  var $container = document.createElement('div')
  var $row = document.createElement('div')
  var $col = document.createElement('div')
  var $img = document.createElement('img')
  var $name = document.createElement('h4')
  var $description = document.createElement('p')
  $name.textContent = item.itemName
  $description.textContent = item.itemDescription
  $img.setAttribute('src', item.link)
  document.body.appendChild($container)
  $container.appendChild($row)
  $row.appendChild($col)
  $col.appendChild($img)
  $col.appendChild($name)
  $col.appendChild($description)
  $container.classList.add('container')
  $row.classList.add('row')
  $col.classList.add('col-xs-6')
  $col.classList.add('col')
  $img.classList.add('img')
})
