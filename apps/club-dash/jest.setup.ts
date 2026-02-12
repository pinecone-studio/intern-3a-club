import '@testing-library/jest-dom';

class MockPointerEvent extends Event {
  public button: number = 0;
  public ctrlKey: boolean = false;
  public pointerType: string = 'mouse';

  constructor(type: string, props: PointerEventInit = {}) {
    super(type, props);
    Object.assign(this, props);
  }
}

window.PointerEvent = MockPointerEvent as unknown as typeof PointerEvent;

if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = jest.fn();
}
