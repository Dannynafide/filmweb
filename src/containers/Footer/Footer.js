import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.wrapperFooter}>
      <footer className={styles.footer}>
        <div className={styles.sitemap}>
          <div className={styles.sitemap__socialIcons}>
            <FacebookOutlinedIcon className={styles.icon} />
            <InstagramIcon className={styles.icon} />
          </div>
          <div className={styles.sitemap__links}>
            <span className={styles.link}>
              <AddCircleOutlineIcon className={styles.linkIcon} />
              <span>dodaj film</span>
            </span>
            <span className={styles.link}>
              <AddCircleOutlineIcon className={styles.linkIcon} />
              dodaj serial
            </span>
            <span className={styles.link}>
              <AddCircleOutlineIcon className={styles.linkIcon} />
              dodaj grę
            </span>
          </div>
        </div>
        <div className={styles.text}>
          Premiery filmowe:Gra o wszystkoI tak cię kochamNaznaczony: Ostatni
          kluczPartyGotowi na wszystko. ExterminatorM jak
          mordercaFernandoStudniówk@Premiery gier:Pac-Man World Re-Pac,Soul
          Hackers 2,F1 Manager 2022,Saints Row,Midnight Fight
          Express,Thymesia,Way of the HunterNadchodzące gryGod of War:
          Ragnarok,A Plague Tale: Requiem,Rycerze Gotham,Scorn,Skull & Bones,The
          Lord of the Rings - Gollum,Call of Duty: Modern Warfare IINadchodzące
          filmyTrzy tysiące lat tęsknoty,Kryptonim Polska,Bodies Bodies
          Bodies,Szczęścia chodzą parami,Orlęta. Grodno
          1939,Iluzja,Emigranci,King: Mój przyjaciel lew,Przypadkowy
          przechodzień,Sportowe opowieści: Faul niesportowy,Sportowe opowieści:
          Wyścig stulecia,Festiwal pieśniarzy,Ona tu rządzi,Nierozłączki: Lilka
          i PestkaPopularne programyAgent: Gwiazdy,Milionerzy,Kuchenne
          rewolucje,MasterChef Junior,Ugotowani,Kuba Wojewódzki,Kobieta na
          krańcu świataNajpopularniejsze filmy na VOD:Top Gun: Maverick
          onlineSamarytanin onlineKolejne 365 dni onlinePredator: Prey onlineDwa
          życia onlineTop Gun onlinePurpurowe serca onlineElvis onlineDzienna
          zmiana onlineZa duży na bajki onlineNajpopularniejsze seriale na
          VOD:Sandman onlineRód smoka onlineEcha onlineZbrodnie po sąsiedzku
          onlineZadzwoń do Saula onlineMecenas She-Hulk onlineResident Evil:
          Remedium onlineStranger Things onlineThe Boys onlineRozdzielenie
          online
        </div>
        <div>
          <div className={styles.copyLinks}>
            <span>Reklama</span> <span>Reklama</span>
            <span>Redakcja</span>
            <span>Regulamin</span>
            <span>Polityka prywatności</span>
            <span>Pomoc</span>
            <span>Netflix</span>
            <span>HBO MAX</span>
            <span>Player</span>
            <span>Amazon Prime Video</span>
            <span>Disney+</span>
          </div>
          <div className={styles.copyright}>Copyright © 1998-2022 Filmweb</div>
        </div>
      </footer>
    </div>
  );
}
