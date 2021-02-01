function likes(names) {
  const getWho = people => {
    return people.length == 2 ? `${people[0]} and ${people[1]}` : `${people[0]}, ${people[1]} and ${people.length > 3 ? `${people.length - 2} others` : people[2]}`
  }
  const who = names.length > 1 ? getWho(names) : (names.length == 0 ? 'no one' : names[0]) 
  return `${who} like${names.length > 1 ? '' : 's'} this`
}
