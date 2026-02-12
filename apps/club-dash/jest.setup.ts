import '@testing-library/jest-dom';

class MockPointerEvent extends Event {
  public button = 0;
  public ctrlKey = false;
  public pointerType = 'mouse';

  constructor(type: string, props: PointerEventInit = {}) {
    super(type, props);
    Object.assign(this, props);
  }
}

window.PointerEvent = MockPointerEvent as unknown as typeof PointerEvent;

Element.prototype.scrollIntoView = jest.fn();
