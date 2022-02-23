import "./NoDataToShow.scss";

interface propsTypes {
  error:string
}

export default function NoDataToShow({error}: propsTypes):JSX.Element{
    return (
      <div className="no-data-wrapper">
        <p>{error ? error : "No data to show!"}</p>
      </div>
    );
};
