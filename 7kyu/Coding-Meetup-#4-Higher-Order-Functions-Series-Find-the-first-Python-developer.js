//My solution
function getFirstPython(list) {
    const found = list.find(el => el.language === 'Python');
    return !found ? 'There will be no Python developers' : `${found.firstName}, ${found.country}`;
}