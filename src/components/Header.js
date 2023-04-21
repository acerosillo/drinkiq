function Header() {
  return (
    <header className="header navbar fixed-top flex-column flex-lg-row bd-navbar animate__intro-reveal-slide-down">
      <div className="container">
        <div className="col-md-4 col-sm-12">
          <small className="small-caption">In partnership with DrinkIQ</small>
          <img src="./assets/img/drinkiq_logo.svg" alt="Drink IQ" />
        </div>
      </div>
    </header>
  );
}

export default Header;
