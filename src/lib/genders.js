export const genders = (gender) => {

  const genders = {
    Female: 'She',
    Male: 'He',
    Genderless: 'It',
    unknown: 'It'
  }

  return genders[gender]
}