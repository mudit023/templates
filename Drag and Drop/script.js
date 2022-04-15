const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')
const start = document.querySelector('.start')
const progress = document.querySelector('.progress')
const done = document.querySelector('.done')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragOver)
  placeholder.addEventListener('dragenter', dragEnter)
  placeholder.addEventListener('dragleave', dragLeave)
  placeholder.addEventListener('drop', dragDrop)
}

function dragStart(event) {
  event.target.classList.add('hold')
  event.target.innerHTML = 'Drop me 🙂'
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

function makeBorder(event) {
  if (event.target.closest('.placeholder-start')) {
    start.classList.add('shadow')
  } else if (event.target.closest('.placeholder-progress')) {
    progress.classList.add('shadow')
  } else if (event.target.closest('.placeholder-done')) {
    done.classList.add('shadow')
  }
}

function removeBorder(event) {
  if (event.target.closest('.placeholder-start')) {
    start.classList.remove('shadow')
  } else if (event.target.closest('.placeholder-progress')) {
    progress.classList.remove('shadow')
  } else if (event.target.closest('.placeholder-done')) {
    done.classList.remove('shadow')
  }
}