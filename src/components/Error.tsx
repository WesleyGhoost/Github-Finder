import classes from '../components/Error.module.css'

function Error() {
    return(
        <div className={classes.error}>
            <p>Usuário não encontrado</p>
        </div>
    )
}

export default Error