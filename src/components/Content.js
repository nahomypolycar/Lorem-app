import Description from "./Description";
import Title from "./Title";

const Content = (props) => {
  return (
    <div>
      <Title nameTitle={props.namePresentation} />
      <Description textDescription={props.textPresentation} />
    </div>
  );
};

export default Content;
