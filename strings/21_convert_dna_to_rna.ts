/*
  Problem definition
  => Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

  Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

  Create a function which translates a given DNA string into RNA.

  Algorithms
  - 
*/

export function DNAtoRNA(dna: string): string {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    dna[i] === "T" ? (rna += "U") : (rna += dna[i]);
  }
  return rna;
}

// Using replaceAll method
// export function DNAtoRNA2(dna: string): string {
//   return dna.replaceAll("T", "U");
// }
