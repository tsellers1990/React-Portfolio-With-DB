import React from "react";

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Brick({ data }) {
  return (
    <div
      className="par"
      id="background"
      style={{
        width: "100%",
        margin: "10px",
        family: "Arial,Helvetica,serif",
        boxShadow: "10px 10px 10px lightGray",
      }}
    >
      <div className="paragraph">
        <p>{data.person}</p>
        <p>{data.score}</p>
      </div>
    </div>
  );
}

export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map((size) => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
