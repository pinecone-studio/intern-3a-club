'use client';
export default function TestComponent() {
  return (
    <div
      onClick={() => console.log('hi')}
      className="cursor-pointer bg-red-500 text-white"
    >
      Hello
    </div>
  );
}
