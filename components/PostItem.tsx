import { formatDistanceToNow } from 'date-fns'
import { Post } from "@/types"

export default ({ emoji, title, createdAt }: Post) => {
  return (
    <div className="flex flex-col justify-between items-center bg-slate-800 rounded-lg p-5 h-44 w-5/6">
      <span className="text-6xl">{emoji}</span>
      <div className="flex flex-col justify-center items-center gap-y-1">
        <h2 className="text-base">{title}</h2>
        <span className="text-sm text-slate-500">{`${formatDistanceToNow(new Date(createdAt))} ago`}</span>
      </div>
    </div>
  )
}
