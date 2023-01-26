import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Loading from "../../components/Loading";

const Detail = () => {
  const [coff, setCoff] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/hot/${id}`)
      .then((res) => res.data)
      .then((data) => setCoff(data))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading && <Loading />}
      {coff && (
        <div className="coffD">
          <h1>{coff.title}</h1>
          <img src={coff.image} alt="" style={{ width: "25%" }} />
          <p>
            <span style={{ fontWeight: "bold" }}>Description:</span>
            {coff.description}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Ingredients:</span>
            {coff.ingredients}
          </p>
        </div>
      )}
    </div>
  );
};

export default Detail;
