const LastSeen = ({ character }) => {

  const lastIndex = character?.episode.length - 1

  const lastSeen = character?.episode[lastIndex].air_date

  return (
    <>
    {`Last seen in ${lastSeen}.`}
    </>
  )
}

export default LastSeen;