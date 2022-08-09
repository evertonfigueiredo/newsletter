import React, { useRef } from 'react';
import AuthMiddleware from '../../authMiddleware';
import Header from '../../components/header';
import emailjs from "@emailjs/browser";

// import { Container } from './styles';

function Envio() {

    // const [subject, setSubject] = React.useState()
    // const [content, setContent] = React.useState()
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9acc4ll', 'template_n1s5j9o', form.current, 'fzhAlb9Heiq2EsWFZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    }


    return <>
        <AuthMiddleware page="Home" />
        <Header></Header>
        <div className="container">
            <div className='row justify-content-md-center'>
                <div className='col-md-8'>
                    <h1>Envio para todos os leads</h1>
                    <div className='row'>
                        {/* <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Assunto do E-mail</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Esté é o assunto!" onChange={e => setSubject(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Conteúdo do E-mail</label>
                                <textarea className="form-control" placeholder="Esté é o conteúdo do e-mail!" id="exampleFormControlTextarea1" rows="3" onChange={e => setContent(e.target.value)}></textarea>
                            </div>
                            <div className="mb-3">
                                <button
                                    type="submit"
                                    className="form-control btn btn-primary rounded submit px-3"
                                >
                                    Enviar E-mail
                                </button>
                            </div>
                        </form> */}
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Subject</label>
                            <input type="text" name="subject" />
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Envio;