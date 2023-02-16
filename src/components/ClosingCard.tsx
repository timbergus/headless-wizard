import { Button } from './Button'

type ClosingCardProps = {
  onClick: () => void
}

export const ClosingCard = ({ onClick }: ClosingCardProps) => (
  <div className="flex h-full w-full items-center justify-center">
    <div className="grid select-none justify-items-center gap-y-4 pt-4">
      <span className="text-xl text-slate-800 dark:text-slate-200">
        Congrats! You are done 🙂
      </span>
      <div>
        <Button onClick={onClick}>RESET</Button>
      </div>
    </div>
  </div>
)
