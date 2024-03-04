import Penkki from '../videos/penkki.mp4';
import Naru from '../videos/naru.mp4';
import Kyykky from '../videos/kyykky.mp4';
const Upperbody = () => {

    return(
        <div>
            <div>
                <label>
                Penkkipunnerrus: Penkkipunnerrus on tehokas liike rintalihasten, olkapäiden ja hauisten vahvistamiseen.
                Harjoitus suoritetaan makuulla penkillä, nostamalla tankoa rinnan tasolle ja painamalla sitä ylöspäin
                suorilla käsillä.
                </label>
                <video width="560" height="315" controls autoPlay id="exercises">
                <source src={Penkki} type="video/mp4"/>
                </video>
            </div>
                <div>
                <label>
                Leuanveto: Leuanveto on erinomainen harjoitus yläselän, hauisten ja keskivartalon vahvistamiseen. Se
                tehdään roikkumalla tangossa ja vetämällä leukaa ylös tangon tasolle.
                </label>
                <video width="560" height="315" controls autoPlay id="exercises">
                <source src={Naru} type="video/mp4"/>
                </video>
            </div>
            <p>
Nämä ovat vain muutamia esimerkkejä kuntosaliliikkeistä, joita voit sisällyttää harjoitusohjelmaasi. On
tärkeää suorittaa liikkeet oikealla tekniikalla ja valita painot, jotka sopivat omalle tasolle.</p>
        </div>
    )
}


const Lowerbody = () => {

    return(
    <div>
        <div>
            <label>
            Kyykky: Kyykky on tehokas liike jalkojen, pakaroiden ja keskivartalon vahvistamiseen. Se suoritetaan
seisomalla suorana ja taivuttamalla polvia, kunnes reidet ovat vaakatasossa tai alempana.
            </label>
            <video width="560" height="315" controls autoPlays id="exercises">
            <source src={Kyykky} type="video/mp4"/>
            </video>
        </div>
            <div>
            <label>
            Maastaveto: Maastaveto on erinomainen harjoitus takareisien, pakaroiden ja alaselän vahvistamiseen.
Se tehdään nostamalla painoja lattiasta suorin käsin ylös seisoma-asentoon.
            </label>
            <video width="560" height="315" controls autoPlay id="exercises">
            <source src={Naru} type="video/mp4"/>
            </video>
        </div>
        <p>
Nämä ovat vain muutamia esimerkkejä kuntosaliliikkeistä, joita voit sisällyttää harjoitusohjelmaasi. On
tärkeää suorittaa liikkeet oikealla tekniikalla ja valita painot, jotka sopivat omalle tasolle.</p>
    </div>
    )
}


const Core = () => {

    return(
    <div>
        <div>
            <label>
            Vatsarutistus: Vatsarutistus on tehokas liike vatsalihasten vahvistamiseen. Se tehdään makaamalla
selällään, taivuttamalla polvia ja nostamalla ylävartaloa kohti polvia.
            </label>
            <video width="560" height="315" controls autoPlay id="exercises">
            <source src={Penkki} type="video/mp4"/>
            </video>
        </div>
            <div>
            <label>
            Lankku: Lankku on erinomainen harjoitus keskivartalon ja selän vahvistamiseen. Se tehdään pitämällä
vartalo suorana lattiassa tuettuna kyynärpäiden ja varpaiden varassa.
            </label>
            <video width="560" height="315" controls autoPlay id="exercises">
            <source src={Kyykky} type="video/mp4"/>
            </video>
        </div>
        <p>
Nämä ovat vain muutamia esimerkkejä kuntosaliliikkeistä, joita voit sisällyttää harjoitusohjelmaasi. On
tärkeää suorittaa liikkeet oikealla tekniikalla ja valita painot, jotka sopivat omalle tasolle.</p>
    </div>
    )
}

export {Upperbody, Lowerbody, Core}