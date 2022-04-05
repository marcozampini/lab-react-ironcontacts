const ContactItem = (props) => {
  return (
    <tr className="contact">
      <td>
        <picture>
          <img
            className="contact-picture"
            src={props.pictureUrl}
            alt={props.name}
          />
        </picture>
      </td>
      <td>{props.name}</td>
      <td>{Math.round(props.popularity * 100) / 100}</td>
      <td>{props.wonOscar}</td>
      <td>{props.wonOscar ? <>🏆</> : <></>}</td>
      <td>{props.wonEmmy ? <>🏆</> : <></>}</td>
    </tr>
  )
}
export default ContactItem
