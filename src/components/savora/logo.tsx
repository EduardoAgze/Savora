import logo from "@/assets/savora-logo.jpg";

export function SavoraLogo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src={logo}
      alt="Savora Logo"
      width={size}
      height={size}
      className={`select-none rounded-full object-cover flex-none ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export function SavoraWordmark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
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

export function SavoraFullLogo({ width = 200, className = "" }: { width?: number; className?: string }) {
  return (
    <img
      src={logo}
      alt="Savora Logo"
      width={width}
      height={width}
      className={`select-none rounded-full object-cover ${className}`}
      style={{ width: width, height: width }}
    />
  );
}
