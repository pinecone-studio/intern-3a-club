import { Timer } from "lucide-react";
 
interface JoinLabelProps { loading: boolean; isLocked: boolean; time: number; }
 
export const JoinLabel = ({ loading, isLocked, time }: JoinLabelProps) => {
    if (loading) return <>Уншиж байна...</>;
 
    const lockedContent = (
        <span className="flex items-center gap-2">
            <Timer className="animate-spin" size={16} /> {time}с хүлээх
        </span>
    );
 
    return isLocked ? lockedContent : <>Одоо нэгдэх</>;
};