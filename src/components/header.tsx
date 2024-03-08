import icon from "@/assets/icon.svg";

export default function Header() {
  return (
    <header className="flex items-center ">
      <img src={icon} alt="icon" className="w-10 h-10" />
      <div className="text-muted font-semibold flex-1 flex items-center justify-end h-10 border-1.5 border-card-stroke rounded-full px-10 bg-card">
        <p className="text-lg">Vinicius Prá</p>
      </div>
    </header>
  );
}
