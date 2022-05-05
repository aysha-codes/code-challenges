// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
    // multiplies son's age by 2, then subtracts it from dad's current age, which gives us the difference or how many years until the dad will be twice as old as the son
  }
