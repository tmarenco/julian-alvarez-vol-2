export const calculateAge = (birthDateString: string) => {
    const [day, month, year] = birthDateString.split('/').map(Number);

  const currentDate = new Date();

  const birthDate = new Date(year, month - 1, day);

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}