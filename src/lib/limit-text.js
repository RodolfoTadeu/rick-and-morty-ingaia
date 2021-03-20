export function limitName(name) {
  const nameLength = name.length;

  if (nameLength > 15) {
    const newTitle = [];
    name.split(" ").reduce((acumulador, current) => {
      if (acumulador + current.length <= 11) {
        newTitle.push(current);
      }
      return acumulador + current.length;
    }, 0);

    return `${newTitle.join(" ")}...`;
  }
  return name;
}
