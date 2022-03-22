export default class Slide {
  //Selecao dos elementos
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = { finalPosition: 0, startX: 0, movement: 0 };
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3D(${distX}px, 0,0)`;
  }

  //atualizando a distancia que o mouse esta movendo
  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }

  //metodo para comecar
  onStart(event) {
    event.preventDefault();
    this.dist.startX = event.clientX;
    this.wrapper.addEventListener("mousemove", this.onMove);
  }

  //Evento para seguir o mouse apos o clique sobre a imagem
  onMove(event) {
    const finalPosition = this.updatePosition(event.clientX);
    this.moveSlide(finalPosition);
  }

  //Evento para remover o clique
  onEnd(event) {
    this.wrapper.removeEventListener("mousemove", this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
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
