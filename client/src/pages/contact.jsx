const Contact = () => {
  return (
    <div className="page-container">
      <h1>Contact</h1>

      <p>
        Une question, une suggestion ou une collaboration ?
        N’hésitez pas à me contacter.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Votre nom" required />
        <input type="email" placeholder="Votre email" required />
        <textarea placeholder="Votre message" rows="5" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}

export default Contact
