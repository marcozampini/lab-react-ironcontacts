const ContactItem = (props) => {
  return (
    <tr className="contact">
      <td>
        <picture>
          <img
            class="contact-picture"
            src={props.pictureUrl}
            alt={props.name}
          />
        </picture>
      </td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td>{props.wonOscar}</td>
      <td>{props.wonOscar ? <>🏆</> : <></>}</td>
      <td>{props.wonEmmy ? <>🏆</> : <></>}</td>
    </tr>
  )
}
export default ContactItem
