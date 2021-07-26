const index = ({ Service }) => {
  return (
    <div>
      <h1>{Service.name}</h1>
      <p>{Service.detail}</p>
    </div>
  )
}

export default index
