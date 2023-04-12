//My solution
function greetDevelopers(list) {
    list.forEach((el) => {
      el.greeting = `Hi ${el.firstName}, what do you like the most about ${el.language}?`;
    });
    return list;
}