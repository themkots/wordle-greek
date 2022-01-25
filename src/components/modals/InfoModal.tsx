import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Κανόνες παιχνιδίου" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
	Μάντεψε την ΛΕΞΛΕ σε 6 προσπάθειες. Μετά από κάθε προσπάθεια, το χρώμα κάθε γράμματος
	θα αλλάξει ανάλογα με το πόσο κόντα ήταν η προσπάθεια σου στην σωστή λέξη.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Κ" status="correct" />
        <Cell value="Α" />
        <Cell value="Φ" />
        <Cell value="Ε" />
        <Cell value="Σ" />
      </div>
      <p className="text-sm text-gray-500">
        Το γράμμα Κ βρίσκεται στην λέξη και είναι στην σωστή θέση.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Χ" />
        <Cell value="Ι" />
        <Cell value="Ο" status="present" />
        <Cell value="Ν" />
        <Cell value="Ι" />
      </div>
      <p className="text-sm text-gray-500">
        Το γράμμα Ο βρίσκεται στην λέξη αλλά είναι στην λάθος θέση.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Χ" />
        <Cell value="Ρ" />
        <Cell value="Ω" />
        <Cell value="Μ" status="absent" />
        <Cell value="Α" />
      </div>
      <p className="text-sm text-gray-500">
        Το γράμμα Μ δεν βρίσκεται πουθενά στην λέξη.
      </p>
    </BaseModal>
  )
}
