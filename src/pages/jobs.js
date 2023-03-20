import { useEffect, useState } from "react";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import { Input, Row } from "reactstrap";
import { getLists } from "../actions/dataActions";
import Filter from "../components/filter";
import Header from "../components/header";
import "./style.scss";

function Jobs() {
  const [list, setList] = useState([]);
  const [params, setParams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getData = () => {
    setIsLoading(true);
    getLists()
      .then((res) => {
        setList(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const findJobsAPI = () => {
    const des = params?.desc?.toLowerCase();
    const loc = params?.location?.toLowerCase();
    getLists(des, loc, params.fulltime)
      .then((res) => setList(res))
      .catch((err) => console.log(err));
  };

  const handleChange = (field, value, check) => {
    setParams({ ...params, [field]: value, fulltime: check });
  };
  const handleSubmit = (e) => {
    setParams("");
    e.preventDefault();
    findJobsAPI();
  };
  const redirectDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <Header />
      <Filter
        onSearchChange={(field, value, check) =>
          handleChange(field, value, check)
        }
        handleSubmit={(field, value) => handleSubmit(field, value)}
      />
      <div className="data">
        {list.map((v, index) => (
          <div key={index} className="list">
            <div className="left-list">
              <h4 onClick={() => redirectDetail(v.id)}>{v?.title}</h4>
              <span>
                {v?.company} - <span>{v?.type}</span>
              </span>
            </div>
            <div className="right-list">
              <span>{v?.location}</span>
              <span>
                <Moment fromNow>{v?.created_at}</Moment>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
