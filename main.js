/* eslint-disable no-unused-vars */

var items = [
  {
    itemName: 'Toy',
    itemDescription: 'Lego toy for kids ',
    link: 'https://cdn.pixabay.com/photo/2016/07/19/23/38/superman-1529274__340.jpg'
  },
  {
    itemName: 'Bike',
    itemDescription: '26" Mens Bike ',
    link: 'http://cdn2.ternbicycles.com/sites/default/files/images/bikes/unfolded/2016/11/linka7-g1-unfold-m0-dkblue.jpg'
  },
  {
    itemName: 'Toy2',
    itemDescription: 'Lego toy for kids ',
    link: 'https://cdn.pixabay.com/photo/2016/07/19/23/38/superman-1529274__340.jpg'
  },
  {
    itemName: 'Bike2',
    itemDescription: '26" Mens Bike ',
    link: 'http://cdn2.ternbicycles.com/sites/default/files/images/bikes/unfolded/2016/11/linka7-g1-unfold-m0-dkblue.jpg'
  }
]

items.forEach(function (item) {
  var $row = document.querySelector('.row')
  $row.appendChild(renderItem(item))
})

function renderItem(item) {
  var $col = document.createElement('div')
  var $img = document.createElement('img')
  var $name = document.createElement('h4')
  var $description = document.createElement('p')
  var $details = document.createElement('a')
  $details.textContent = '<<  View Details'
  $details.setAttribute('href', '#')
  $name.textContent = item.itemName
  $description.textContent = item.itemDescription
  $img.setAttribute('src', item.link)
  $img.setAttribute('width', 350)
  $img.setAttribute('height', 200)
  $col.appendChild($img)
  $col.appendChild($name)
  $col.appendChild($description)
  $description.appendChild($details)
  $col.classList.add('col-xs-4')
  $col.classList.add('col')
  $img.classList.add('img')
  return ($col)
}
