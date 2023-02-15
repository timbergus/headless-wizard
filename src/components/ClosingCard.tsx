import { Button } from './Button'

type ClosingCardProps = {
  onClick: () => void
}

export const ClosingCard = ({ onClick }: ClosingCardProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="grid justify-items-center gap-y-4 pt-4 select-none">
        <span className="text-xl text-slate-800 dark:text-slate-200">
          Congrats! You are done 🙂
        </span>
        <div>
          <Button onClick={onClick}>RESET</Button>
        </div>
      </div>
    </div>
  )
}
