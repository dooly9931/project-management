import React, { useState } from "react";
import { SECRET } from "../../constants";

const Home = () => {
  const [showSecret, setShowSecret] = useState<boolean>(false);

  return (
    <div>
      {!showSecret && (
        <div data-testid="home-btn" onClick={() => setShowSecret(!showSecret)}>
          Home
        </div>
      )}
      {showSecret && (
        <div
          data-testid="secret-btn"
          onClick={() => setShowSecret(!showSecret)}
        >
          The secret is... {SECRET}!!
        </div>
      )}
    </div>
  );
};

export default Home;
