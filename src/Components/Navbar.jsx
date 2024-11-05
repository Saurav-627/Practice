

const Navbar = () => {
  return (
    <header className="header">
      <img
        src="https://storage.googleapis.com/a1aa/image/5PfVWTYD9pynCKEs18wsQsAKCTfRNT40feZVbvmIS4CXpDROB.jpg"
        alt="Pocket Pandit Logo"
        height="40"
        width="40"
      />
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/">Horoscope</a>
        <a href="/">Matchmaking</a>
        <a href="/">PocketSoft</a>
        <a href="/">Blog</a>
      </nav>
      <div className="auth-links">
        <a href="#">Sign In</a>
        <a className="sign-up" href="#">
          Sign Up - Its Free
        </a>
      </div>
    </header>
  );
};

export default Navbar;
