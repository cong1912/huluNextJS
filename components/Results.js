import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
export const Results = ({ requests }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {requests.map((req) => (
        <Thumbnail key={req.id} result={req} />
      ))}
    </FlipMove>
  );
};
