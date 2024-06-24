import { AlignJustify } from "lucide-react";

export default function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="absolute right-2 top-2 p-2" onClick={onClick}>
      <AlignJustify className="w-5 h-5" />
    </button>
  );
}
