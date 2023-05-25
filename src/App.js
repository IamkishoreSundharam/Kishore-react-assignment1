import "./styles.css";
import Navbar from "./Navbar.js";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import Bouncer from "./Loader";

const url = " https://reqres.in/api/users?page=1";

export default function App() {
  const [loader, setLoading] = useState(null);
  const [link, setLink] = useState([]);

  async function fetchdata() {
    const response = await fetch(url);
    const object = await response.json();
    const data = object.data;
    setLink(data);
  }
  useEffect(() => {
    const timer = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    timer();
    return clearTimeout(timer);
  }, [loader]);
  return (
    <>
      <Navbar fetchdata={fetchdata} setLoading={setLoading} />
      {loader && <Bouncer />}
      <Cards setLoading={setLoading} loader={loader} link={link} />
    </>
  );
}
