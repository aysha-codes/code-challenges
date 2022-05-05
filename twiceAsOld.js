// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
function twiceAsOld(dadYearsOld, sonYearsOld) {
    if ((sonYearsOld * 2) < dadYearsOld){
      // loop up through both until they're equal
      let sonAge = sonYearsOld;
      let dadAge = dadYearsOld;
      let years = 0;
      while (sonAge * 2 !== dadAge){
        sonAge++
        dadAge++
        years++
      }
      return years;
    } else if ((sonYearsOld * 2) > dadYearsOld) {
      // loop down through both until they're equal
      let sonAge = sonYearsOld;
      let dadAge = dadYearsOld;
      let years = 0;
      while (sonAge * 2 !== dadAge){
        sonAge--
        dadAge--
        years++
      }
      return years;
    } else if ((sonYearsOld * 2) === dadYearsOld){
      return 0
    }
  }  
