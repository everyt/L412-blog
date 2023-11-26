export default function getFadeInAnimation(condition: boolean, duration: number, translate: number) {
  return {
    transform: condition ? 'none' : `translateX(${translate}px)`,
    opacity: condition ? 1 : 0,
    transition: `all ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`,
  };
}
