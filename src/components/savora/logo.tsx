import logo from "@/assets/savora-logo.png";

export function SavoraLogo({ size = 40 }: { size?: number }) {
  return (
    <img
      src={logo}
      alt="Savora"
      width={size}
      height={size}
      className="select-none"
      style={{ width: size, height: size }}
    />
  );
}

export function SavoraWordmark({ size = 40 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <SavoraLogo size={size} />
      <span
        className="font-bold tracking-tight text-primary"
        style={{ fontSize: size * 0.6 }}
      >
        Savora
      </span>
    </div>
  );
}
