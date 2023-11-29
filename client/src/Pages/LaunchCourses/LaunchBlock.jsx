import Img1 from "../../images/createcourse.jpg";

function LaunchBlock() {
  return (
    <>
      <div className="create_blk">
        <img src={Img1} alt="image" className="l_img1" />
        <h3 className="l_h3">CREATE AN ENGAGING COURSE</h3>
        <p className="l_p1">
          Whether you've been teaching for years or are teaching for the first
          time, you can make an engaging course. We've compiled resources and
          best practices to help you get to the next level, no matter where
          you're starting.
        </p>
      </div>
    </>
  );
}
export default LaunchBlock;
