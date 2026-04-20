export default function BackgroundGlow({ palette }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={`absolute -top-24 left-[-4rem] h-72 w-72 rounded-full blur-3xl animate-pulse ${palette.heroGlowA}`} />
      <div className={`absolute top-[18rem] right-[-5rem] h-80 w-80 rounded-full blur-3xl animate-pulse ${palette.heroGlowB}`} />
      <div className={`absolute bottom-[-6rem] left-[20%] h-72 w-72 rounded-full blur-3xl animate-pulse ${palette.heroGlowA}`} />
    </div>
  );
}
