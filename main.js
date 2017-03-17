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
  var $row = document.querySelector('.row')
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
  $col.setAttribute('data-id', item.id)
  $button.classList.add('button')
  return ($col)
}

var BUTTONS = document.querySelectorAll('button')
BUTTONS.forEach(function(button) {
  button.addEventListener('click', function(event) {
    var target = event.target
    var value = target.dataset.id
    console.log(value)
  })

})

/* Next suggested step:

1- Currently the clicked button "View Details" returns the item number to be selected from the second DOM list
2- Create a new DOM list consists of div rows for each div colomn to hold a single item element
3- The new single item elemts should include 2 buttons, one for "Add to cart" and another to go back to the main View
 */
