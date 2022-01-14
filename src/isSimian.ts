type DNA = Array<string>

export function isSimian(dna: DNA) {
    const dnaLength = dna.length

    // scan horizontal and vertical
    for (let j = 0; j < dnaLength; j++) {
        let horizontalCount = 0
        let verticalCount = 0
        let horizontalLetter = ''
        let verticalLetter = ''

        for (let k = 0; k < dnaLength; k++) {
            if (horizontalLetter === dna[j][k]) {
                horizontalCount++
            } else {
                horizontalCount = 1
                horizontalLetter = dna[j][k]
            }

            if (verticalLetter === dna[k][j]) {
                verticalCount++
            } else {
                verticalCount = 1
                verticalLetter = dna[k][j]
            }

            if (horizontalCount > 3 || verticalCount > 3) {
                console.log('horizontalCount', horizontalCount)
                console.log('verticalCount', verticalCount)
                return true
            }
        }
    }

    // scan diagonals
    for (let j = 0; j <= 2 * dnaLength; j++) {
        let diagonalLeftCount = 0
        let diagonalRightCount = 0
        let diagonalLeftLetter = ''
        let diagonalRightLetter = ''

        for (let k = dnaLength - 1; k >= 0; k--) {
            let l1 = j - k;
            if (l1 >= 0 && l1 < dnaLength) {
                if (diagonalLeftLetter === dna[k][l1]) {
                    diagonalLeftCount++
                } else {
                    diagonalLeftCount = 1
                    diagonalLeftLetter = dna[k][l1]
                }
            }

            let l2 = j - (dnaLength - k);
            if (l2 >= 0 && l2 < dnaLength) {
                if (diagonalRightLetter === dna[k][l2]) {
                    diagonalRightCount++
                } else {
                    diagonalRightCount = 1
                    diagonalRightLetter = dna[k][l2]
                }
            }

            if (diagonalLeftCount > 3 || diagonalRightCount > 3) {
                console.log('diagonalLeftCount', diagonalLeftCount)
                console.log('diagonalRightCount', diagonalRightCount)
                return true
            }
        }
    }

    return false
}
