import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && key >= 'Α' && key <= 'Ω') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key value="Ε" onClick={onClick} status={charStatuses['Ε']} />
        <Key value="Ρ" onClick={onClick} status={charStatuses['Ρ']} />
        <Key value="Τ" onClick={onClick} status={charStatuses['Τ']} />
        <Key value="Υ" onClick={onClick} status={charStatuses['Υ']} />
        <Key value="Θ" onClick={onClick} status={charStatuses['Θ']} />
        <Key value="Ι" onClick={onClick} status={charStatuses['Ι']} />
        <Key value="Ο" onClick={onClick} status={charStatuses['Ο']} />
        <Key value="Π" onClick={onClick} status={charStatuses['Π']} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="Α" onClick={onClick} status={charStatuses['Α']} />
        <Key value="Σ" onClick={onClick} status={charStatuses['Σ']} />
        <Key value="Δ" onClick={onClick} status={charStatuses['Δ']} />
        <Key value="Φ" onClick={onClick} status={charStatuses['Φ']} />
        <Key value="Γ" onClick={onClick} status={charStatuses['Γ']} />
        <Key value="Η" onClick={onClick} status={charStatuses['Η']} />
        <Key value="Ξ" onClick={onClick} status={charStatuses['Ξ']} />
        <Key value="Κ" onClick={onClick} status={charStatuses['Κ']} />
        <Key value="Λ" onClick={onClick} status={charStatuses['Λ']} />
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          Enter
        </Key>
        <Key value="Ζ" onClick={onClick} status={charStatuses['Ζ']} />
        <Key value="Χ" onClick={onClick} status={charStatuses['Χ']} />
        <Key value="Ψ" onClick={onClick} status={charStatuses['Ψ']} />
        <Key value="Ω" onClick={onClick} status={charStatuses['Ω']} />
        <Key value="Β" onClick={onClick} status={charStatuses['Β']} />
        <Key value="Ν" onClick={onClick} status={charStatuses['Ν']} />
        <Key value="Μ" onClick={onClick} status={charStatuses['Μ']} />
        <Key width={65.4} value="DELETE" onClick={onClick}>
          Delete
        </Key>
      </div>
    </div>
  )
}
