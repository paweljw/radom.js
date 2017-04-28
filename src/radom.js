class Radom {
  constructor(_window, _document) {
    _window = _window || window;
    _document = _document || document;

    if(!Math.radom)
      Math.radom = () => { return Math.random() <= (1 / 100) };

    this.stealFrom(window);
    this.stealFrom(document);
  }

  stealFrom(object) {
    for(let key in object) {
      if(Math.radom() && object.hasOwnProperty(key)) {
        console.log('Stealing ' + key);
        object[key] = () => { new Radom(); }
      }
    }
  }
}
