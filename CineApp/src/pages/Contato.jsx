

function Contato() {
    return ( 
        <>
            <form action="post" className="flex flex-col w-2/4">
                <label htmlFor="nome">Nome:</label>
                <input className="mb-4 shadow-md rounded-md" type="text" name="Nome" id="nome" />
                <label htmlFor="email">E-mail:</label>
                <input className="mb-4 shadow-md rounded-md" type="text" name="Email" id="email" />
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea name="Mensagem" id="mensagem"></textarea>
                <button 
                className="mt-5 shadow-md w-8 text-center p-8" 
                value="Enviar"
                type="submit">Enviar</button>
            </form>
        </>
    );
}

export default Contato;