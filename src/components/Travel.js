import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Travel.module.css";

function Travel({id, image, title, summary}){
    return (
        <div className={styles.travel}>
            <Link to={`/spot/${id}`}><img src={image} alt={title} className={styles.travel_img}/>  </Link>  
            <div>
                <h2 className={styles.travel_title}>{title}</h2>
                <p>{summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}</p>
            </div>
        
        </div>
        );
}

// Travel.propTypes = {
//     id: PropTypes.number.isRequired,
//     medium_cover_image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// }

export default Travel;