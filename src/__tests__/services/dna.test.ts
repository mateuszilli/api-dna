import { DNAService } from '../../services/dna'

describe('DNAService', () => {

  describe('isInvalid', () => {

    it('should return invalid DNA size error', () => {
      const message = 'The DNA is invalid: The number of rows and columns must be equal'
      const dna = ['AAAA', 'TTTT', 'CCCC', 'GGG']

      const received = DNAService.isInvalid(dna)

      expect(received).toBe(message)
    })

    it('should return invalid DNA character error', () => {
      const message = 'The DNA is invalid: The characters must be A, T, C or G'
      const dna = ['AAAA', 'TTTT', 'CCCC', 'GGGH']

      const received = DNAService.isInvalid(dna)

      expect(received).toBe(message)
    })

  })

  describe('isSimian', () => {

    it('should return true for horizontal count', () => {
      const dna = ['GTCA', 'ACTG', 'GTCA', 'CCCC']

      const received = DNAService.isSimian(dna)

      expect(received).toBe(true)
    })

    it('should return true for vertical count', () => {
      const dna = ['GTCA', 'ACTA', 'GTCA', 'CCCA']

      const received = DNAService.isSimian(dna)

      expect(received).toBe(true)
    })

    it('should return true for diagonal left count', () => {
      const dna = ['GTCT', 'ACTG', 'GTCA', 'TCTG']

      const received = DNAService.isSimian(dna)

      expect(received).toBe(true)
    })

    it('should return true for diagonal right count', () => {
      const dna = ['CTCA', 'ACTG', 'GTCA', 'ACTC']

      const received = DNAService.isSimian(dna)

      expect(received).toBe(true)
    })

    it('should return false', () => {
      const dna = ['GTCA', 'ACTG', 'GTCA', 'ACTG']

      const received = DNAService.isSimian(dna)

      expect(received).toBe(false)
    })

  })
})
