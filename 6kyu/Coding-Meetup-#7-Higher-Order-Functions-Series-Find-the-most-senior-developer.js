//My solution
function findSenior(list) {
    return list.sort((a, b) => b.age - a.age).filter(el => el.age === list[0].age);
}