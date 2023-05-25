import logo from "./coding-addict-logo.jpeg";

const Nav = ({ setLoading, fetchdata }) => {
  const getdata = () => {
    setLoading(true);
    fetchdata();
  };

  return (
    <header>
      <nav className="header">
        <div className="logo-holder">
          <img src={logo} />
        </div>
        <button onClick={() => getdata()} className="fetch-btn">
          Get Users
        </button>
      </nav>
    </header>
  );
};

export default Nav;
