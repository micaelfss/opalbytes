export function OpalLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Geometric diamond/opal symbol */}
      <div className="relative">
        
      </div>
      {/* Brand name with mixed typography */}
      <div className="flex items-baseline">
        <span className="text-2xl font-light text-primary lowercase tracking-wide">opal</span>
        <span className="text-2xl font-bold text-primary uppercase tracking-tight">BYTES</span>
      </div>
    </div>
  )
}
