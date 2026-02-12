import '@testing-library/jest-dom';

class MockPointerEvent extends Event {
  public button = 0;
  public ctrlKey = false;
  public pointerType = 'mouse';

  constructor(type: string, props: PointerEventInit = {}) {
    super(type, props);
    if (props.button !== undefined) this.button = props.button;
    if (props.ctrlKey !== undefined) this.ctrlKey = props.ctrlKey;
    if (props.pointerType !== undefined) this.pointerType = props.pointerType;
  }
}

window.PointerEvent = MockPointerEvent as unknown as typeof PointerEvent;

Element.prototype.scrollIntoView = jest.fn();
