function courseblk({ img, title, field, price, hours }) {
  return (
    <>
      <div className="cblk">
        <img src={img} alt="" />
        <h4 className="title">{title}</h4>
        <h5 className="field">{field}</h5>
        <h5 className="price">{price}</h5>
        <h5 className="hours">{hours}</h5>
      </div>
    </>
  );
}

export default courseblk;
