interface RotateSliderProps {
  children: string;
  value: number;
  set: (newValue: number) => void;
}

export function RotateSlider({
  value,
  children,
  set,
}: RotateSliderProps) {
  const min = -90;
  const max = 90;
  return (
    <label>
      <code>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
    </label>
  );
}
