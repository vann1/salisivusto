import Kakskyt from '../images/20täyttäväkuva.png';
import kuva2 from '../images/60-90.png';
import kuva1 from '../images/Linkkikuva.png';

const Terveellinen = () => {
    return(
        <div>
            <h1>
            Terveellisen ruokavalion peruspilarit
            </h1>
            <p>
            Runsaasti vihanneksia ja hedelmiä: Vihannekset ja hedelmät ovat täynnä vitamiineja, kivennäisaineita ja
antioksidantteja, jotka ovat tärkeitä terveydelle. Ne myös sisältävät runsaasti kuitua, mikä on tärkeää
ruoansulatukselle.

Laadukkaita proteiininlähteitä: Proteiini on tärkeä rakennusaine keholle ja se auttaa ylläpitämään
lihaskudosta. Valitse proteiininlähteiksi esimerkiksi kananrintaa, kalaa, palkokasveja ja pähkinöitä.
Hyviä rasvoja: Rasvat ovat tärkeitä energianlähteitä ja ne auttavat elimistöä imeyttämään rasvaliukoisia
vitamiineja. Valitse hyviä rasvoja, kuten oliiviöljyä, avokadoa ja pähkinöitä.
Sokerin välttäminen: Liiallinen sokerin saanti voi johtaa painonnousuun ja terveysongelmiin. Vältä lisättyä
sokeria ja valitse makeutukseksi esimerkiksi hunajaa tai makeuttamattomia vaihtoehtoja.
            </p>
            <img id="nutrition" src={Kakskyt}></img>
            <p className='mt-3 mb-5'>Noudattamalla terveellistä ruokavaliota ja pitämällä kiinni hyvistä ruokailutottumuksista voit parantaa terveyttäsi ja saavuttaa paremman hyvinvoinnin. Muista kuunnella kehoasi ja tehdä muutoksia tarvittaessa omaan ruokavalioon.</p>
        </div>
    )
}

const Ruokavalio = () => {
    return(
        <div>
            <h1>
            Ruokavalion noudattaminen käytännössä
            </h1>
            <p>
            Suunnittele ateriat etukäteen: Suunnittele viikon ateriat etukäteen ja valmistele tarvittavat ruoka-aineet
etukäteen. Tämä auttaa välttämään epäterveellisten vaihtoehtojen valitsemista kiireessä.
Pidä terveellisiä välipaloja saatavilla: Pidä terveellisiä välipaloja, kuten hedelmiä, pähkinöitä ja
vihanneksia, saatavilla helposti saatavilla. Näin voit välttää napostelua epäterveellisillä vaihtoehdoilla.
Pienennä annoskokoja: Kiinnitä huomiota annoskokoihin ja pyri pienentämään niitä tarvittaessa. Syö
hitaasti ja kuuntele kehosi nälänsignaaleja.
            </p>
            <img id="nutrition2" src={kuva2}></img>
            <p className='mt-3 mb-5'>Noudattamalla terveellistä ruokavaliota ja pitämällä kiinni hyvistä ruokailutottumuksista voit parantaa terveyttäsi ja saavuttaa paremman hyvinvoinnin. Muista kuunnella kehoasi ja tehdä muutoksia tarvittaessa omaan ruokavalioon.</p>
        </div>
    )
}

const Motivoitunut = () => {
    return(
        <div>
            <h1>
            Pysy motivoituneena ja joustavana
            </h1>
            <p>
            Aseta realistisia tavoitteita: Aseta itsellesi realistisia ruokavalioon liittyviä tavoitteita ja pidä ne
mielessäsi. Muista, että pienet muutokset voivat johtaa suuriin tuloksiin pitkällä aikavälillä.
Palkitse itsesi terveellisesti: Palkitse itsesi terveellisillä herkuilla, kuten hedelmillä tai tummalla
suklaalla, kun saavutat tavoitteitasi.
Ole joustava: Ole armollinen itsellesi ja ole joustava ruokavaliossasi. Joskus on ok nauttia herkkuja
kohtuudella ilman syyllisyyttä.
            </p>
            <img id="nutrition1" src={kuva1}></img>
            <p className='mt-3 mb-5'>Noudattamalla terveellistä ruokavaliota ja pitämällä kiinni hyvistä ruokailutottumuksista voit parantaa terveyttäsi ja saavuttaa paremman hyvinvoinnin. Muista kuunnella kehoasi ja tehdä muutoksia tarvittaessa omaan ruokavalioon.</p>
        </div>
    )
}
export {Terveellinen, Ruokavalio, Motivoitunut}