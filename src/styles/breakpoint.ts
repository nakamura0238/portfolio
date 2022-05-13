export const breakpoints = {
  sm: 640,
  md: 860,
  lg: 1024
} as const;

export const mq = (key: keyof typeof breakpoints) => `@media (min-width: ${breakpoints[key]}px)`;
