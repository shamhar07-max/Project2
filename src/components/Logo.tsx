type LogoProps = {
  variant?: "wordmark" | "icon"
  className?: string
}

export default function Logo({ variant = "wordmark", className = "" }: LogoProps) {
  if (variant === "icon") {
    return (
      <img
        src="/brand/db-icon.png"
        alt="DigitalBurj"
        className={className}
      />
    )
  }

  return (
    <img
      src="/brand/wordmark.png"
      alt="DigitalBurj"
      className={className}
    />
  )
}
