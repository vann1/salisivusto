import { useState } from "react"
import { Core, Lowerbody, Upperbody } from "../components/exercises";
const Exercisespage = () => {
    const [valittuLiike, setValittuLiike] = useState('');

    return ( 
        <div className="container">
            <header className="text-center mt-5">
                <h1>Erilaisia liikkeitä kuntosali harjoitteluun</h1>
            </header>

            <section className="mt-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <p>Tämä osio tarjoaa yleiskuvan erilaisista kuntosaliliikkeistä, jotka on suunniteltu kehittämään eri
                            lihasryhmiä. Kuntosaliharjoittelu on erinomainen tapa vahvistaa kehoa, parantaa kuntoa ja edistää
                            terveyttä.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <label>Valitse mitä osaa kehosta haluat treenata
                        <select className="row offset-md-5 mt-2 col-sm-2 dropdownmenu mx-auto mb-5" onChange={(e) => setValittuLiike(e.target.value)} value={valittuLiike}>
                            <option value="">Valitse...</option>
                            <option>Ylävartalo</option>
                            <option>Alavartalo</option>
                            <option>Keskivartalo</option>
                        </select>
                    </label>
                </div>
            </section>
            {valittuLiike === 'Ylävartalo' && <Upperbody></Upperbody>}
            {valittuLiike === 'Alavartalo' && <Lowerbody></Lowerbody>}
            {valittuLiike === 'Keskivartalo' && <Core></Core>}
        </div>
    )
}

export {Exercisespage}