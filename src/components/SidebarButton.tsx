import type { ReactNode } from "react";

type SidebarButtonProps = {
  icon: ReactNode;
  text: string;
  active?: boolean;
  onClick?: () => void;
};

export function SidebarButton({
  icon,
  text,
  active = false,
  onClick,
}: SidebarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-3
        text-[20px] font-medium py-2
        transition-colors
        ${
          active
            ? "text-[#FF6B00]"
            : "text-black hover:text-[#FF6B00]"
        }
      `}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}