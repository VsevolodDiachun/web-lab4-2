import './header.css';
import tntuLogo from './img/tntu-logo.png';
import knLogo from './img/KN.jpg';
import fis from './img/FIS.jpg';

function Header() {
    return (
        <div>
            <div className="conteiner">
                <div className="block1 my-photo block-border">

                </div>


                <div className="in-conteiner university-name">
                    <div className="block block-border" style={{width: "550px"}}>
                        <p className="text">Тернопільський національний технічний університет ім. Івана Пулюя<br/>
                            Факультет ФІС<br/>
                            Кафедра комп’ютерних наук</p>
                    </div>

                    <div className="block block-border">
                        <p className="text">Персональна сторінка<br/>
                            Дячун Всеволод Петрович<br/>
                            група СБс-31</p>
                    </div>
                </div>


                <div className="in-conteiner" style={{width: "365px", justifyContent: "flex-end"}}>
                    <div className="block logo-div block-border">
                        <img className="logo" src={tntuLogo}/>
                    </div>

                    <div className="block logo-div block-border">
                        <img className="logo" src={knLogo}/>
                    </div>

                    <div className="block logo-div block-border">
                        <img className="logo" src={fis}/>
                    </div>
                </div>


                <div className="end block-border">
                    <p style={{margin: "0 20px 0 0"}}>Головне меню</p>
                </div>
            </div>

        </div>
    );
}

export default Header;
