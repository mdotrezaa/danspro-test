import { useEffect, useState } from "react";
import Moment from "react-moment";
import { useNavigate, useParams } from "react-router-dom";
import { Input, Row } from "reactstrap";
import { getDetail, getLists } from "../actions/dataActions";
import Header from "../components/header";
import "./style.scss";

function Detail() {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getData = () => {
    getDetail(id)
      .then((res) => setDetail(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <Header />
      <button className="back" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="detail">
        <div className="top">
          <span className="title">
            {detail.type} / {detail.location}
          </span>
          <h2 className="title">{detail.title}</h2>
        </div>
        <div className="body">
          <div dangerouslySetInnerHTML={{ __html: detail.description }}></div>
          <div>
            <div className="company">
              <div className="top">
                <span>{detail.company}</span>
              </div>
              <img src={detail.company_logo} alt={detail.company} />
              <div className="bottom">
                <span>{detail.company_url}</span>
              </div>
            </div>
            <div className="how-to">
              <div className="top">
                <div
                  dangerouslySetInnerHTML={{ __html: detail.how_to_apply }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
