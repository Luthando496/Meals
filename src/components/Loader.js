import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
    const override = {
        display: "block",
        margin: "20px auto",
        borderColor: "red",
      };

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#07fc07");
  return (
    <div>
    <HashLoader
        className="loader"
        color={color}
        loading={loading}
        cssOverride={override}
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader