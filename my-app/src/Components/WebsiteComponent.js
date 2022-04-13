import React, { Component } from "react";

class Web extends Component {
    render() {
        return(
            <div className="texts">
                <div id="sezionepersonale" className="website">
                    <div className="contentbox">
                        <div className="typewriter web">
                            <h1>Come è stato realizzato questo sito web</h1>
                        </div>
                        <div className="presentation">
                        <p>Questo sito è stato sviluppato interamente in codice, senza l'ausilio di alcun CMS.<br /><br />
                            La realizzazione del progetto è stata coadiuvata dai più grandi maestri: Google, Stack Overflow, W3School e tutti 
                            i loro compagni.<br /><br />Tutto il codice ed il materiale utilizzato sono consultabili su:<br /><br />
                            <a href="https://github.com/braswer/ciprianilorenzo.com.git" target="_blank" rel="noreferrer">GITHUB</a>
                        </p>
                        </div>
                        <div className="typewriter otherprojects">
                            <h1>Altri progetti</h1>
                        </div>
                        <div className="presentation">
                        <p>Tutti i miei progetti in cantiere, con annessi errori e imperfezioni, sono caricati e aggiornati qui sulla mia pagina personale di GitHub:<br /><br />
                            <a href="https://github.com/braswer" target="_blank" rel="noreferrer">GITHUB</a>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Web