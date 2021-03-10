import React from "react";
import "./styles.css";

const app = ({ children, loading, ...props }) => {
  return (
    <button className="button" disabled={loading} {...props}>
      {loading ? "Loading" : children}
    </button>
  );
};

app.defaultProps = {
  loading: false,
};

export default app;
