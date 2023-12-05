 
function Card() {
 
  return (
    <ul className="card-list">
        <li className="card-list__item">
            <img className="card-list__img" src="" alt="" />
            <div className="card-list__box">
                <h4 className="card-list__box--title">Lorem ipsum dolor sit amet.</h4>
                <p className="card-list__box--info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque minima aspernatur veritatis voluptate, eaque voluptatum
                </p>
                <span className="card-list__box--prices">11$</span>
            </div>
        </li>
    </ul>
  )
}
export default Card