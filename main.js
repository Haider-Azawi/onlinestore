/* eslint-disable no-unused-vars */

var items = [
  {
    id: 1,
    itemName: 'Toy',
    itemDescription: 'Lego toy for kids ',
    link: 'https://cdn.pixabay.com/photo/2016/07/19/23/38/superman-1529274__340.jpg'
  },
  {
    id: 2,
    itemName: 'Bike',
    itemDescription: '26" Mens Bike ',
    link: 'http://cdn2.ternbicycles.com/sites/default/files/images/bikes/unfolded/2016/11/linka7-g1-unfold-m0-dkblue.jpg'
  },
  {
    id: 3,
    itemName: 'Toy2',
    itemDescription: 'Lego toy for kids ',
    link: 'https://cdn.pixabay.com/photo/2016/07/19/23/38/superman-1529274__340.jpg'
  },
  {
    id: 4,
    itemName: 'Bike2',
    itemDescription: '26" Mens Bike ',
    link: 'http://cdn2.ternbicycles.com/sites/default/files/images/bikes/unfolded/2016/11/linka7-g1-unfold-m0-dkblue.jpg'
  }
]

items.forEach(function (item) {
  var $row = document.querySelector('#list')
  $row.appendChild(renderItem(item))
})

function renderItem(item) {
  var $col = document.createElement('div')
  var $img = document.createElement('img')
  var $name = document.createElement('h4')
  var $description = document.createElement('p')
  var $button = document.createElement('button')
  $button.textContent = 'View Details'
  $button.setAttribute('data-id', item.id)
  $name.textContent = item.itemName
  $description.textContent = item.itemDescription
  $img.setAttribute('src', item.link)
  $img.setAttribute('width', 350)
  $img.setAttribute('height', 200)
  $col.appendChild($img)
  $col.appendChild($name)
  $col.appendChild($description)
  $description.appendChild($button)
  $col.classList.add('col-xs-4')
  $col.classList.add('col')
  $img.classList.add('img')
  $col.setAttribute('id', item.id)
  $button.classList.add('button')
  return ($col)
}

var $list = document.querySelector('#list')
$list.addEventListener('click', function(event) {
  if (event.target.getAttribute('data-id')) {
    var $row = document.querySelector('#list')
    $row.classList.add('hidden')
    var targetId = event.target.dataset.id
    var item = findItem(items, targetId)

    var $detailsItem = detailedItem(item)
    var $details = document.querySelector('#details')
    $details.appendChild($detailsItem)
  }
})

function detailedItem(item) {
  var $newCol = document.createElement('div')
  var $newImg = document.createElement('img')
  var $newName = document.createElement('h4')
  var $newDescription = document.createElement('p')
  var $newButton1 = document.createElement('button')
  var $newButton2 = document.createElement('button')
  $newButton1.textContent = 'Add to cart'
  $newButton2.textContent = 'Continue shopping'
  $newButton1.setAttribute('data-id', item.id)
  $newButton2.setAttribute('data-id', item.id)
  $newName.textContent = item.itemName
  $newDescription.textContent = item.itemDescription
  $newImg.setAttribute('src', item.link)
  $newImg.setAttribute('width', 350)
  $newImg.setAttribute('height', 200)
  $newCol.appendChild($newImg)
  $newCol.appendChild($newName)
  $newCol.appendChild($newDescription)
  $newDescription.appendChild($newButton1)
  $newDescription.appendChild($newButton2)
  $newCol.classList.add('newCol')
  $newImg.classList.add('newImg')
  $newCol.setAttribute('id', item.id)
  $newButton1.classList.add('newButton')
  $newButton2.classList.add('newButton')
  return $newCol
}

function findItem(items, id) {
  for (var i = 0; i < items.length; i++) {
    if (id === items[i].id.toString()) {
      return items[i]
    }
  }
}
