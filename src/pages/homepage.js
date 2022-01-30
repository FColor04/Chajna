import React from "react";
import Article from "../components/article";
import styled from "styled-components";

const RoundedImg = styled.div`
  width: ${({size}) => size};
  height: ${({size}) => size};
  border-radius: 1000vw;
  background: url(${({src}) => src}) 65% 56%;
  background-size: cover;
  shape-outside: circle(50%);
  display: inline-block;
  margin: 0.3rem;
  border: 3px solid black;
  aspect-ratio: 1;

  @media (max-width: 860px) {
    width: 30vmin;
    height: 30vmin;
  }
`;

const ClearBoth = styled.div`
  clear: both;
`;

const HorizontalDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Homepage = () => {
    return (
        <div>
            <Article>
                <h4>O naszej hodowli</h4>
                Chajna mała domowa hodowla piesków rasy Lhasa Apso powstała z
                miłości do tej rasy. Nasze pieski wychowywane są w domowych
                warunkach otoczone gronem kochających je właścicieli.
            </Article>
            <Article>
                <h4>Planowany miot Kwiecień/Maj 2022</h4>
                <h5>Suczka Soya</h5>
                <HorizontalDisplay>
                    <RoundedImg src={"/images/soya.jpg"} size={"240px"}/>
                    <RoundedImg src={"/images/soya2.jpg"} size={"240px"}/>
                </HorizontalDisplay>
                <ClearBoth />
                Best Junior Głubczyce 11.2021
                <ClearBoth />
            </Article>
            <Article center={true}>
                <h4>Nasz nowy nabytek hodowlii</h4>
                <RoundedImg src={"/images/piesek.jpg"} size={"360px"}/>
                <ClearBoth></ClearBoth>
                Rabella Aniesi FCI suczka Boston Terrier
            </Article>
            <Article>
                <h4>Witamy nowy miot w roku 2021!</h4>
                W tym roku mamy przyjemność powitać nowe szczeniaczki w naszej
                hodowli! Są niesamowicie miłe i przyjazne, urodzone zostały 26
                marca, do odbioru będą od 20 maja, po tym czasie serdecznie
                zapraszamy do kontaktu!

                <HorizontalDisplay>
                    <RoundedImg src={"/images/2021/maj/5.jpg"} size={"240px"}/>
                    <RoundedImg src={"/images/2021/maj/9.jpg"} size={"240px"}/>
                    <RoundedImg src={"/images/2021/maj/6.jpg"} size={"240px"}/>
                    <RoundedImg src={"/images/2021/maj/10.jpg"} size={"240px"}/>
                </HorizontalDisplay>
                <ClearBoth />
            </Article>
            <Article>
                <h4>O rasie Lhasa Apso</h4>
                <br />
                <b>Kraj pochodzenia:</b> Tybet
                <br />
                <b>Klasyfikacja FCI:</b> Grupa IX Sekcja 5
                <br />
                <b>Wzorzec FCI nr:</b> 227
                <br />
                <b>Wielkość:</b> Mała
                <br />
                <b>Wysokość w kłębie:</b> Pies 28 cm; suka 25,4 cm
                <br />
                <b>Waga:</b> Pies 6 – 8 kg; suka 6 – 7 kg
                <br />
                <b>Szata:</b> Włos okrywowy długi, ciężki, prosty, twardy.
                Umiarkowany podszerstek. Ważne, aby włos nie przeszkadzał w ruchu
                psa.
                <br />
                <b>Maść:</b> Złota, piaskowa, miodowa, ciemnoszara, łupkowa,
                dymna, łaciata, czarna, biała lub brązowawa. Wszystkie powyższe
                umaszczenia są jednakowo prawidłowe.
                <br />
                <b>Długość życia:</b> 14 – 15 lat
                <br />
                <br />
                <span className="indented">
                    Przez wieki <b>lhasa apso</b> uznawano za rzadki i cenny skarb
                    Tybetu. Pieski te otaczano czcią i szacunkiem. Powszechnie
                    wierzono, że przynoszą szczęście. Jednocześnie lhasa apso miały
                    być kolejnym wcieleniem zmarłych mnichów. Dawniej przebywały
                    wyłącznie w świątyniach buddyjskich i w rękach arystokracji. Nie
                    można było ich sprzedać ani kupić. Mogły być jedynie przekazane
                    jako dar w dowód uznania i wdzięczności. Obecnie ta niezwykła
                    rasa zdobyła serca miłośników psów na całym świecie.
                </span>
            </Article>
            <Article>
                <h4>Historia i pochodzenie rasy Lhasa apso</h4>
                Lhasa apso to bardzo stara tybetańska rasa, której początki
                sięgają czasów starożytnych. Jak wskazuje nazwa, historia jej
                pochodzenia związana jest z miastem Lhasa, które położone jest w
                górach Tybetu. Z uwagi na to, że ich naturalnym środowiskiem
                występowania były górskie rejony, psy te miały grubą,
                dwuwarstwową okrywę włosową, której zadaniem była ochrona przed
                niskimi temperaturami.
                <br /><br />
                Głównym zadaniem lhasa apso było towarzyszenie ludziom, a czasem
                ostrzeganie przed niebezpieczeństwem. W przeszłości służyły jako
                psy stróżujące i alarmujące. W klasztornych murach psy w typie
                lhasa apso przebywały zazwyczaj z dużymi, groźnymi mastifami.
                Jako bardziej czujne miały za zadanie sygnalizować zagrożenie,
                by większe psy mogły przygotować się do obrony ludzi i ich
                dobytku.
                <br /><br />
                W Europie historia lhasa apso rozpoczyna się dość późno.
                Pierwsze osobniki zostały sprowadzone na tereny Wielkiej
                Brytanii w II poł. XX w. Początkowo mylono je z innymi
                długowłosymi psami z Dalekiego Wschodu. Do dzisiaj lhasa apso
                często opisywane są wraz z shih tzu czy terierami tybetańskimi,
                przy czym z shih tzu są bardzo często mylone, również przez
                kynologów. Kolejne lhasa apso zostały sprowadzone przez
                pułkownika Baileya w 1928 r. W 1933 r. powstał klub rasy, a rok
                później została ona uznana przez Kennel Club i od tego momentu
                można mówić o planowej hodowli tych psów na obszarach Wielkiej
                Brytanii. Przy czym warto zaznaczyć, że to właśnie w Wielkiej
                Brytanii nadano im nazwę ,,lhasa apso”.
                <br /><br />
                W Stanach Zjednoczonych pierwsze lhasa apso pojawiły się w
                1933 r. Były one darem od XIII Dalajlamy dla pana Cuttinga z New
                Jersey. W krótkim czasie importowano kolejne osobniki z Indii i
                Nepalu. W 1935 r. rasa została uznana przez American Kennel Club
                (AKC). Szybko zyskała popularność i obecnie jest tam jedną z
                najczęściej reprezentowanych ras tybetańskich. W Polsce lhasa
                apso jest rasą rzadką i stosunkowo mało znaną. Pierwsze osobniki
                dotarły do naszego kraju na początku lat 80. XX w.
            </Article>
            <Article>
                <h4>Lhasa apso – charakter i użytkowość</h4>
                Lhasa apso to rasa pełna wdzięku i elegancji, obecnie hodowana w
                celach reprezentacyjnych. Cechuje ją zrównoważony charakter i
                duży temperament oraz łagodne usposobienie. Lhasa apso jest
                wesoły i ciekawy. Bardzo inteligentny. Odznacza się dużą
                spostrzegawczością i samodzielnością. Szybko się uczy, ale bywa
                uparty, odważny i pewny siebie. W domu spokojny i niehałaśliwy,
                jednak kiedy trzeba – czujny, szczeka na alarm. Towarzyski i
                przyjazny w stosunku do ludzi, <br />a także zwierząt. Wobec
                obcych bywa nieufny, wykazuje dystans, ale nie przejawia
                agresji.

                <br /><br />

                Wymaga stałego kontaktu z człowiekiem. Mocno przywiązuje się do
                opiekuna, źle znosi samotność i brak uwagi. Nie poleca się go
                rodzinom z małymi dziećmi, za to doskonale sprawdza się jako
                towarzysz starszych dzieci. Lhasa apso jest wspaniałym psem do
                towarzystwa. Z łatwością dostosowuje się do nowych warunków.
                Może być utrzymywany w domu z ogrodem i w mieszkaniu. Ważne, aby
                pies miał zapewnioną odpowiednią dawkę ruchu.
            </Article>
        </div>
    );
}

export default Homepage;
