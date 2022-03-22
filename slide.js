export default class Slide {
  //Selecao dos elementos
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  //metodo para comecar
  onStart(event) {
    event.preventDefault();
    this.wrapper.addEventListener("mousemove", this.onMove);
  }

  //Evento para seguir o mouse apos o clique sobre a imagem
  onMove(event) {}

  //Evento para remover o clique
  onEnd(event) {
    this.wrapper.removeEventListener("mousemove", this.onMove);
  }

  //Adcionando evento ao slide
  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }

  //mudando a referencia do this para o objeto
  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  //Iniciando a classe
  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
