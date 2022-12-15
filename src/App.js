import "./App.css";
import "./components/Content";
import "./components/Description";
import "./components/Title";
import Title from "./components/Title";

const Lorem = () => {
  return (
    (
      <div>
        <Title nameTitle="Lorem" />
      </div>
    ),
    (
      <div>
        <Description textDescription="exemple" />
      </div>
    )
  );
};

export default Lorem;
