import logo from './assets/little-lemon-logo.png';

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Little Lemon logo" />

      <section>
        <h4>Navigation</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </section>

      <section>
        <h4>Contact</h4>
        <address>
          <p>123 Lemon Street</p>
          <p>Chicago, IL</p>
          <p>
            <a href="tel:+11234567890">(123) 456-7890</a>
          </p>
          <p>
            <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
          </p>
        </address>
      </section>

      <section>
        <h4>Social Media</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </section>

      <p>© 2026 Little Lemon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
