import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Πληροφορίες" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
	Η ιστοσελίδα αυτή είναι ένα open source clone του παιχνιδίου Wordle -{' '}
        <a
          href="https://github.com/gvarnavi/wordle-greek"
          className="underline font-bold"
        >
          Δές τον κώδικα εδώ
        </a>{' '}
        και{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          παίξε το original εδώ.
        </a>
      </p>
    </BaseModal>
  )
}
