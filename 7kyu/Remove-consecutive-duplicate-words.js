// DESCRIPTION:
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.

//My solution
function removeConsecutiveDuplicates(string) {
    return string.split(' ').reduce((a, b) => {
      if(a[a.length - 1] !== b) a.push(b);
      return a;
    }, []).join(' ') || '';
}