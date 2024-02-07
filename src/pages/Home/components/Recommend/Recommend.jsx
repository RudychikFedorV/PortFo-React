export const Recommend = () => {
  return (
    <div className="recommend">
      <div className="recommend-info">
        <h2 className="title recommend-info__title">Recommendations</h2>
        <p className="desc recommend-info__desc">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>
      <div className="recommend-developers">
        <div className="recommend-developers__items">
            <div className="recommend-developers__item">
                <div className="recommend-developers__rating"></div>
                <div className="recommend-developers__info">
                    <h5 className="title recommend-developers__title">Great Quality!</h5>
                    <p className="desc recommend-developers__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                </div>
                <div className="recommend-developers__pos">
                    <img src="" alt="" />
                    <h6 className="title recommend-developers__name">James Gouse</h6>
                    <p className="desc recommend-developers__text">Graphic Designer</p>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};
