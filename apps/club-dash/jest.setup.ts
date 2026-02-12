import '@testing-library/jest-dom';

window.HTMLElement.prototype.scrollIntoView = jest.fn();
window.HTMLElement.prototype.hasPointerCapture = jest.fn();
window.HTMLElement.prototype.releasePointerCapture = jest.fn();

class MockPointerEvent extends Event {
  button: number;
  ctrlKey: boolean;
  pointerType: string;

  constructor(
    type: string,
    {
      button = 0,
      ctrlKey = false,
      pointerType = 'mouse',
      ...props
    }: PointerEventInit = {}
  ) {
    super(type, props);
    this.button = button;
    this.ctrlKey = ctrlKey;
    this.pointerType = pointerType;
  }
}

window.PointerEvent = MockPointerEvent as unknown as typeof PointerEvent;
