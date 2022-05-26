const codon_prot_links = [
  {codons: ['UCU','UCC','UCA','UCG','AGU','AGC'], proteine: 'Sérine' },
  {codons: ['CCU','CCC','CCA','CCG'], proteine: 'Proline' },
  {codons: ['UUA','UUG'], proteine: 'Leucine' },
  {codons: ['UUU','UUC'], proteine: 'Phenylalanine' },
  {codons: ['CGU','CGC','CGA','CGG','AGA','AGG'], proteine: 'Arginine'},
  {codons: ['UAU','UAC'], proteine: 'Tyrosine' }
];

function split_in_codons(arn) {
  codons = []
  for(let index = 0; index < arn.length ; index += 3) {
    codons.push(arn.slice(index, index + 3));
  }
  return codons
};

function find_prot_from_codon(codon) {
  protein = "";
  codon_prot_links.forEach(link => link.codons.find(element => element == codon) ? protein = link.proteine : link);
  return protein;
}

function arn_to_prot (arn) {
  codon_list = split_in_codons(arn);
  prot_list = '';
  codon_list.forEach(codon => prot_list += find_prot_from_codon(codon) + '-');
  return prot_list.slice(0,-1);
}

console.log(arn_to_prot('CCGUCGUUGCGCUACAGC'));
console.log(arn_to_prot('CCUCGCCGGUACUUCUCG'));

