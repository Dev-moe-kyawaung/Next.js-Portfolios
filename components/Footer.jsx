export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-max">
        <div className="row g-4">
          <div className="col-lg-4">
            <h3 className="h4">Moe-Kyaw-Aung-Portfolio V02</h3>
            <p>Professional Android Senior Developer portfolio with modern glasspunk aesthetics.</p>
          </div>
          <div className="col-lg-3">
            <h4 className="h6 text-uppercase">Links</h4>
            <ul className="list-unstyled">
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/certificates">Certificates</a></li>
              <li><a href="/faq-contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-5">
            <h4 className="h6 text-uppercase">Newsletter</h4>
            <form className="d-flex gap-2">
              <input className="form-control" type="email" placeholder="Email address" />
              <button className="btn btn-success" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <hr className="border-light opacity-25 my-4" />
        <small>© 2026 Moe-Kyaw-Aung-Portfolio V02. All rights reserved.</small>
      </div>
    </footer>
  );
}
