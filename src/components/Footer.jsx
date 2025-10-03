import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[var(--two-color)] text-white p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Location</a>
          <a className="link link-hover">Vente</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover"></a>
        </nav>
        <nav>
          <h6 className="footer-title">Pages</h6>
          <a className="link link-hover" href="#services" >Services</a>
          <a className="link link-hover" href="#contact" >Contact</a>
          <a className="link link-hover" href="#voitures" >Voitures</a>
          <a className="link link-hover" href="#apropos" >A propos</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Votre mail</label>
            <div className="join">
              <input
                type="text"
                placeholder="bamako@site.com"
                className="input bg-[var(--two-color)] input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Envoyez</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
}

export default Footer;
