function Navbar() {
  return (
    <>
      <div className="navbar bg-base-500 flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">GraceXnXX</a>
        <div className="social-icon">
          <a href="https://t.me/thearkane">
            <img
              src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-facebook-32.png"
              style={{ filter: "invert(1)", backgroundColor: "white" }}
              alt="Coming soon..."
            />
          </a>
          <a href="https://www.facebook.com/thearkanespace/">
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-32.png"
              alt="Facebook Page"
            />
          </a>
          <a href="https://t.me/thearkane">
            <img
              src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-32.png"
              style={{ filter: "invert(1)", backgroundColor: "white" }}
              alt="Coming soon..."
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
