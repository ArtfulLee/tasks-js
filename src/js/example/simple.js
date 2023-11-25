class SimpleComponent {
  constructor() {
    this.element = null // Ссылка на DOM-элемент
  }

  // Создать DOM-элемент и добавить его на страницу
  create() {
    this.element = document.createElement('div')
    document.body.appendChild(this.element)
  }

  // Удалить DOM-элемент со страницы
  destroy() {
    if (this.element) {
      this.element.remove()
      this.element = null
    }
  }

  // Добавить класс к DOM-элементу
  addClass(className) {
    if (this.element) {
      this.element.classList.add(className)
    }
  }

  // Удалить класс из DOM-элемента
  removeClass(className) {
    if (this.element) {
      this.element.classList.remove(className)
    }
  }
}

export default SimpleComponent
