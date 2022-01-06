type DNA = Array<string>

export function isSimian(dna: DNA) {
    const letters = ['A', 'T', 'C', 'G']
    const lettersLength = letters.length
    const dnaLength = dna.length

    for (let i = 0; i < lettersLength; i++) {
        const letter = letters[i];

        // scan horizontal and vertical
        for (let j = 0; j < dnaLength; j++) {
            for (let k = 0; k < dnaLength; k++) {
                console.log(dna[j][k])
                console.log(dna[k][j])
            }
        }

        // scan diagonals
        for (let j = 0; j <= 2 * (dnaLength); ++j) {
            for (let k = dnaLength - 1; k >= 0; --k) {
                let l1 = j - k;
                if (l1 >= 0 && l1 < dnaLength) {
                    console.log(dna[k][l1])
                }

                let l2 = j - (dnaLength - k);
                if (l2 >= 0 && l2 < dnaLength) {
                    console.log(dna[k][l2])
                }
            }
        }
    }
}
