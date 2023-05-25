// import { useEffect } from "react";

const Cards = ({ loader, link, setLoading }) => {
  return (
    <>
      {!loader && (
        <main className="display">
          <div className="card-holder">
            {link.map((item) => {
              const { id, email, first_name, last_name, avatar } = item;

              return (
                <article className="user-cards" key={id}>
                  <div className="img-holder">
                    <img src={avatar} alt={first_name} />
                  </div>
                  <p>
                    {first_name}
                    <span> {last_name}</span>
                  </p>
                  <h4>Developer</h4>
                  <h5>
                    contact:
                    <span>
                      <a href="#"> {email}</a>
                    </span>
                  </h5>
                </article>
              );
            })}
          </div>
        </main>
      )}
    </>
  );
};

export default Cards;
