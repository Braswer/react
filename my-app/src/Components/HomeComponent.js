import React, { Component } from "react";

class Home extends Component {
    render() {
        return(
            <div className="container">
                <div id="sezionepersonale" className="personal">
                    <div className="headpers typewriter">
                        <h1 className="writed1">Benvenuti, sono</h1>                       
                    </div>
                    <div className="lorenzo typewriter">
                        <h1 className="writed2">Lorenzo</h1>
                    </div>
                    <div className="cipriani typewriter">
                        <h1 className="writed3 surname">CIPRIANI</h1>
                    </div>
                    <div className="presentation">
                            28 anni, nato a Roma.<br /><br />Fin da piccolo ho sempre coltivato la passione per l'informatica. I videogiochi 
                            e la necessità di assemblare PC sempre più potenti hanno rappresentato la spinta verso lo studio delle 
                            componenti hardware e software.<br /><br />Dopo essermi laureato in Scienze politiche, ed aver svolto 
                            i più disparati tipi di lavoro al fine di un'indipendenza economica, sono partito direzione Dublino, esperienza che ha 
                            determinato una profonda crescita personale e culturale.<br /><br />Il ritorno a Roma e la necessità di cambiare vita mi hanno 
                            avvicinato al mondo dello sviluppo web, impegno intensificato dalla perdita del lavoro a causa del lockdown. Ho iniziato studiando i principali CMS e mi sono 
                            cimentato nella realizzazione di siti web come freelancer. Da quel momento ho capito che questo era ciò che avrei voluto fare 
                            nella vita e ho iniziato a studiare gli strumenti necessari a costruire la mia carriera come sviluppatore web. <br /><br />
                            E questo è solo l'inizio...
                            
                    </div>
                </div>
            </div>

        )
    }
}

export default Home