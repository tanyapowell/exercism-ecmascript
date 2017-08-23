class Transcriptor {
  toRna(strand) {
    if (strand.match(/[^ATCG]/)) {
      throw new Error('Invalid input DNA.');
    }
    return strand.split('').map(this.translate).join('');
  }

  translate(nucleotide) {
    const translations = {
      A: 'U',
      T: 'A',
      C: 'G',
      G: 'C',
    };

    return translations[nucleotide];
  }
}

export default Transcriptor;
