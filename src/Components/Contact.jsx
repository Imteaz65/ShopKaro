function Contact(){

  return(
    <>
      <h1>Contact</h1>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.964441662403!2d88.37376177435227!3d22.54300473405623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276e97402bfd1%3A0x729357dc33d3fa4f!2sRai%20Charan%20Pal%20Ln%2C%20Gobra%2C%20Kolkata%2C%20West%20Bengal%20700046!5e0!3m2!1sen!2sin!4v1709640903634!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      
      <div className="contactForm" >
        <form action="https://formspree.io/f/mvoeqpnl" className="flexColumn" method="POST">
          <input name="name" type="text" placeholder="enter name" autoComplete="off" required />

          <input name="email" type="text" autoComplete="off" required placeholder="enter email" />

          <textarea name="message" rows="5" cols="10"  autoComplete="off" required placeholder="your suggestion"></textarea>

          <input style={{width:"200px", alignSelf:"center"}} type="submit" />
        </form>
      </div>
    </>
  )
}
export default Contact;