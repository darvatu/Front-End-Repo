
import "../All.css"

export default function About() {
  return (
    <section className="container">
      <h1 className="heading">About Us</h1>
      <p>Welcome to our news hub!</p>
      <p>We are dedicated to providing you with the latest and most reliable news articles.</p>
      <p>Our team of experienced journalists work tirelessly to bring you accurate and unbiased news from around the world.</p>
      <p>Whether you're interested in politics, technology, sports, or entertainment, we've got you covered.</p>
      <p>Stay informed and stay connected with us!</p>
      
      <h2 className="subHeading">Contact Us</h2>
      <p>If you have any questions or feedback, feel free to reach out to us:</p>
      <ul>
        <li>Email: info@news-hub.com</li>
        <li>Phone: +1 123-456-7890</li>
        <li>Address: 123 News Street, City, Country</li>
      </ul>
      
      <h2 className="subHeading">Careers</h2>
      <p>Join our team and be a part of delivering quality news to the world!</p>
      <p>Visit our careers page to explore job opportunities:</p>
      <a href="/careers">Careers</a>
    </section>
  );
}