import classes from './User.module.css'

import { Userprops } from "../types/user";
import { MdLocationPin } from 'react-icons/md'

function User({ avatar_url, login, bio, location, followers, following }: Userprops) {
    return (
        <div className={classes.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {bio && 
                <h4 className={classes.bio}>{bio}</h4>
            }
            {location && 
                <p className={classes.location}>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            }
            <div className={classes.stats}>
                <div>
                    <p>Seguidores:</p>
                    <p className={classes.numbers}>{followers}</p>
                </div>
                <div>
                    <p>Seguindo:</p>
                    <p className={classes.numbers}>{following}</p>
                </div>
            </div>
        </div>
    )
}

export default User