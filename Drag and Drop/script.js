// Get HTML elements
const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')
const start = document.querySelector('.start')
const progress = document.querySelector('.progress')
const done = document.querySelector('.done')

// Add drag events for item
item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

// Add drag function for corresponding event on each placeholder
for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragOver)
  placeholder.addEventListener('dragenter', dragEnter)
  placeholder.addEventListener('dragleave', dragLeave)
  placeholder.addEventListener('drop', dragDrop)
}

// Drag functions
function dragStart(event) {
  event.target.classList.add('hold')
  event.target.innerHTML = 'Drop me 🙂'
  // try commenting out setTimeout below and see the result
  setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragEnd(event) {
  event.target.className = 'item'
  event.target.innerHTML = 'Drag me 🙂'
}

function dragOver(event) {
  event.preventDefault()
}

function dragEnter(event) {
  event.target.classList.add('hovered')
  makeBorder(event)
}

function dragLeave(event) {
  event.target.classList.remove('hovered')
  removeBorder(event)
}

function dragDrop(event) {
  event.target.classList.remove('hovered')
  event.target.append(item)
}
// Drag functions END

// Add shadow for status column when entering its corresponding placeholder
function makeBorder(event) {
  if (event.target.closest('.placeholder-start')) {
    start.classList.add('shadow')
  } else if (event.target.closest('.placeholder-progress')) {
    progress.classList.add('shadow')
  } else if (event.target.closest('.placeholder-done')) {
    done.classList.add('shadow')
  }
}

// Remove shadow from status column when leaving its corresponding placeholder
function removeBorder(event) {
  if (event.target.closest('.placeholder-start')) {
    start.classList.remove('shadow')
  } else if (event.target.closest('.placeholder-progress')) {
    progress.classList.remove('shadow')
  } else if (event.target.closest('.placeholder-done')) {
    done.classList.remove('shadow')
  }
}