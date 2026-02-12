import '@testing-library/jest-dom';

class MockPointerEvent extends Event {
  public button: number;
  public ctrlKey: boolean;
  public pointerType: string;

  constructor(type: string, props: PointerEventInit = {}) {
    super(type, props);
    this.button = props.button ?? 0;
    this.ctrlKey = props.ctrlKey ?? false;
    this.pointerType = props.pointerType ?? 'mouse';
  }
}

window.PointerEvent = MockPointerEvent as unknown as typeof PointerEvent;

Element.prototype.scrollIntoView = jest.fn();
