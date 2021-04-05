class StreamPlatform {
  constructor(props) {
    this.container = null;
    this.currentElement = null;

    this.initializeContainer(props);
  }

  initializeContainer(n) {
    for (let i = 1; i <= n; i++) {
      if (this.container) {
        const newEl = {
          step: i,
          element: null,
          showed: false,
          nextElement: null,
        };
        this.currentElement.nextElement = newEl;
        this.currentElement = newEl;
      } else {
        this.container = {
          step: i,
          element: null,
          showed: false,
          nextElement: null,
        };

        this.currentElement = this.container;
      }
    }
  }

  insert(idKey, value) {
    const result = [];
    let el = this.container;
    let prevElement = null;

    do {
      if (el.step === idKey) {
        el.element = value;
        if (el.step === 1 && !el.showed) {
          result.push(el.element);
          el.showed = true;
        }
      }

      if (prevElement && prevElement.showed && el.element && !el.showed) {
        result.push(el.element);
        el.showed = true;
      }

      prevElement = el;
      el = el.nextElement;
    } while (prevElement.nextElement);

    return result;
  }
}

export default StreamPlatform;
