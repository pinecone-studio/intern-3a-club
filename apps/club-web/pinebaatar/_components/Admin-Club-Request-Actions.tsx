import type { MouseEvent } from "react";
import { Check, ChevronDown, Edit3, X } from "lucide-react";
import { cn } from "./utils";
import type { ClubRequest } from "./Admin-Club-Types";

const TOGGLE_CONFIG = {
  collapsed: {
    label: "Edit Detail",
    buttonClass: "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white",
    chevronClass: "",
  },
  expanded: {
    label: "Close",
    buttonClass: "bg-white text-black",
    chevronClass: "rotate-180 text-primary",
  },
} as const;

type RequestActionsProps = {
  request: ClubRequest;
  isExpanded: boolean;
  isPrimary: boolean;
  onToggle: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const RequestActions = ({
  request,
  isExpanded,
  isPrimary,
  onToggle,
}: RequestActionsProps) => {
  const toggleState = isExpanded ? TOGGLE_CONFIG.expanded : TOGGLE_CONFIG.collapsed;

  return (
    <div className="flex items-center gap-6">
      <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400">
        {request.status}
      </span>

      <div className="flex items-center gap-2">
        {!isPrimary && (
          <div className="flex items-center gap-2">
            <button className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all">
              <Check size={16} />
            </button>
            <button className="p-2.5 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all">
              <X size={16} />
            </button>
          </div>
        )}

        <button
          data-request-id={request.id}
          onClick={onToggle}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
            toggleState.buttonClass
          )}
        >
          <Edit3 size={14} />
          {toggleState.label}
        </button>
      </div>

      <ChevronDown
        className={cn(
          "text-white/20 transition-transform duration-500",
          toggleState.chevronClass
        )}
      />
    </div>
  );
};
