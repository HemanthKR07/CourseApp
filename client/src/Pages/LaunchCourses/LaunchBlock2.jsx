function LaunchBlock2({ img, title, text }) {
  return (
    <>
      <div className="create_blk2">
        <img src={img} alt="image" className="l_img2" />
        <h3 className="l_h3_2">{title}</h3>
        <p className="l_p1_2">{text}</p>
      </div>
    </>
  );
}
export default LaunchBlock2;
