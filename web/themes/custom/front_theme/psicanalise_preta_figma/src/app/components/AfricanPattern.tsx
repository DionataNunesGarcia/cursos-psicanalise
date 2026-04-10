export function AfricanPattern({ variant = 'triangles', className = '' }: { variant?: 'triangles' | 'circles' | 'lines' | 'chevron'; className?: string }) {
  const patterns = {
    triangles: (
      <svg className={`w-full h-full ${className}`} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="trianglePattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20,0 L40,40 L0,40 Z" fill="currentColor" opacity="0.03" />
            <path d="M0,0 L20,0 L0,20 Z" fill="currentColor" opacity="0.03" />
            <path d="M40,0 L40,20 L20,0 Z" fill="currentColor" opacity="0.03" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#trianglePattern)" />
      </svg>
    ),
    circles: (
      <svg className={`w-full h-full ${className}`} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="circlePattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
            <circle cx="0" cy="0" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
            <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#circlePattern)" />
      </svg>
    ),
    lines: (
      <svg className={`w-full h-full ${className}`} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="linePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="20" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.04" />
            <line x1="0" y1="10" x2="20" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.04" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#linePattern)" />
      </svg>
    ),
    chevron: (
      <svg className={`w-full h-full ${className}`} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="chevronPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0,20 L10,10 L20,20 L10,30 Z" fill="currentColor" opacity="0.03" />
            <path d="M20,20 L30,10 L40,20 L30,30 Z" fill="currentColor" opacity="0.03" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#chevronPattern)" />
      </svg>
    )
  };

  return patterns[variant];
}

export function GeometricAccent({ position = 'top-right', color = 'emerald' }: { position?: 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right'; color?: 'emerald' | 'amber' | 'red' }) {
  const positionClasses = {
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'top-left': 'top-0 left-0',
    'bottom-right': 'bottom-0 right-0'
  };

  const colorClasses = {
    emerald: 'text-emerald-800',
    amber: 'text-amber-600',
    red: 'text-red-800'
  };

  return (
    <div className={`absolute ${positionClasses[position]} w-32 h-32 opacity-10 pointer-events-none`}>
      <svg viewBox="0 0 100 100" className={colorClasses[color]}>
        <path d="M0,0 L50,0 L25,43.3 Z" fill="currentColor" />
        <path d="M50,0 L100,0 L75,43.3 Z" fill="currentColor" opacity="0.6" />
        <path d="M25,43.3 L75,43.3 L50,86.6 Z" fill="currentColor" opacity="0.4" />
      </svg>
    </div>
  );
}
