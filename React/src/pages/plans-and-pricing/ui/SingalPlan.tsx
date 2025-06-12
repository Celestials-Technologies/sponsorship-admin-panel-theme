import TickIcon from "./TickIcon"
import CrossIcon from "@/shared/ui/CrossIcon"
import TickGreenIcon from "./TickGreenIcon"
export default function SingalPlan({ type = "tick", text = "", planKey = "" }) {
    return (
        <div className="flex gap-3 items-start text-white rounded-lg my-[8px]  max-w-md">
            <div className="w-[13px] h-[13px] mt-1 flex-shrink-0 rounded-full bg-white font-bold flex items-center justify-center  text-sm">
                {planKey === "enterprise" ? <TickGreenIcon /> : (type === "tick" ? <TickIcon /> : <CrossIcon />)}
            </div>
            <div className="text-[12.94px] leading-[19.91px] capitalize">
                {text}
            </div>
        </div>
    )
}
