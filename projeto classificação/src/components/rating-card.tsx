import styles from './rating-card.module.css'
import { useState } from 'react'

export default function RatingCard() {
    const [rating, setRating] = useState<number>()
    const [isSubmited, setisSubmited] = useState<boolean>(false)

    function handleSetRating(rating: number) {
        setRating(rating)
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setisSubmited(true)
    }

    if (isSubmited) {
        return <h1>Obrigado pela resposta! <br></br> Você classificou como nota {rating}</h1>
    }
  
    return (
    <form onSubmit={handleSubmit} className={styles.card}>   
        <div>
            <img  className={styles.star}src='icon-star.svg' alt='estrela'></img>
        </div >
        <div className={styles.text}>
            <h1 className={styles.title}>Como voce nos classificaria?</h1> 
            <p className={styles.description}>
            Por favor, deixe-nos saber como fizemos com o seu pedido de suporte. Todos os comentários são apreciados para nos ajudar
                melhorar a nossa oferta!
            </p>
        </div>
        <div className={styles.buttonGroup}> 
            {[1,2,3,4,5].map((rating) => ( 
            <button
            type='button'
                onClick={() => handleSetRating(rating)}
                className={styles.ratingButton}
            >
                {rating}
            </button>
            ))}
        </div>
        <button type='submit' className={styles.submit}>
            submit
        </button>   
    </form>
 
  )
}