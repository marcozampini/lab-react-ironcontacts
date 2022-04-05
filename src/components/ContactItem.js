const ContactItem = (props) => (
  <tr className="contact">
    <td>
      <picture>
        <img src={props.pictureUrl} alt={`${props.name}`} />
      </picture>
    </td>
    <td>{props.name}</td>
    <td>{props.popularity}</td>
  </tr>
)
export default ContactItem
