import './marchepas.css'
const Contact = () => {
    return(
        <main id="app">
    <section className='contact'>
        <form action="" method="get">
            <div className='form__row'>
                <label for="name">Prénom et NOM</label>
                <div className='form__row__input'>
                    <input type="text" name="name" id="name" placeholder="Jon SIMPSON, John DOE, ..." />
                </div>
            </div>
            <div className='form__row'>
                <label for="email">Adresse Email</label>
                <div className='form__row__input'>
                    <input type="email" name="email" id="email" placeholder="jon.simpson@gmail.com" />
                </div>
            </div>
            <div className='form__row'>
                <label for="message">Message</label>
                <div className='form__row__input'>
                    <textarea name="message" id="message" placeholder="Je souhaiterais vous contacter afin ..."></textarea>
                </div>
            </div>
            <div className='form__row'>
                <button>Envoyer</button>
            </div>
        </form>
    </section>
    </main>
    )
}

export default Contact;