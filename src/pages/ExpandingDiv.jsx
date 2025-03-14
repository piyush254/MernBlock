import { useState, useRef, useEffect } from "react";

export default function ExpandingDiv({ itemCount = 200 }) {
  const dataArray = Array.from({ length: itemCount }, (_, i) => `Item ${i + 1}`);
  const baseHeight = 200; // Fixed base height
  const itemHeight = 50;
  const maxHeight = baseHeight + dataArray.length * itemHeight;

  const [height, setHeight] = useState(baseHeight);
  const divRef = useRef(null);

  useEffect(() => {
    setHeight(baseHeight); // Reset height when itemCount changes
  }, [itemCount]);

  const handleScroll = () => {
    const scrollTop = divRef.current?.scrollTop || 0;
    setHeight((prev) => Math.max(prev, Math.min(baseHeight + scrollTop, maxHeight)));
  };

  return (
    <div
      ref={divRef}
      onScroll={handleScroll}
      style={{ height }}
      className="w-screen overflow-y-auto border-2 border-gray-300 bg-white shadow-lg transition-all"
    >
      <div className="py-4 px-6" style={{ minHeight: maxHeight }}>
        {dataArray.map((item, index) => (
          <div key={index} className="p-4 border-b bg-blue-100 text-center rounded shadow mb-2">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
