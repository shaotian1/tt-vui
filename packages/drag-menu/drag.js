export default class MenuDrag {
  constructor(element) {
    this.root = null;
    this.minimize = false;
    this.init(element);
  }

  init(element) {
    this.root = this.getElement(element);
    if (this.root) this.dragDom();
  }

  dragDom() {
    const el = this.root;
    const parent = this.root.parentNode;
    if (parent) this.cssHelper(parent, { position: 'relative' });
    this.elWidth = el.offsetWidth;
    this.elHeight = el.offsetHeight;
    let x = 0;
    let y = 0;
    let left = 0;
    let top = 0;
    let elWidth = 0;
    let elHeight = 0;

    el.onmousedown = e => {
      x = e.clientX - el.offsetLeft;
      y = e.clientY - el.offsetTop;
      elWidth = this.minimize ? 40 : this.elWidth;
      elHeight = this.minimize ? 40 : this.elHeight;
      document.onmousemove = ev => {
        this.cssHelper(this.root, { transition: 'none' });

        left = ev.clientX - x;
        top = ev.clientY - y;

        if (left <= 0) left = 0;
        if (left >= parent.clientWidth - elWidth)
          left = parent.clientWidth - elWidth;

        if (top <= 0) top = 0;
        if (top >= parent.clientHeight - elHeight)
          top = parent.clientHeight - elHeight;

        el.style.left = `${left}px`;
        el.style.top = `${top}px`;
      };
    };

    document.onmouseup = () => {
      document.onmousemove = null;
      this.cssHelper(this.root, { transition: 'all 0.3s ease-in-out' });
    };
  }

  getElement(element) {
    if (typeof element === 'string') {
      return document.querySelector(element);
    }
    if (element instanceof Element) return element;
    return null;
  }

  toogleMenuMinimize() {
    this.minimize = !this.minimize;
  }

  cssHelper(node, styles) {
    Object.keys(styles).forEach(key => {
      node.style[key] = styles[key];
    });
  }
}
