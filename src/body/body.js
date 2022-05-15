// import "../header/header.css";
import './body.css';

function Body () {
    return (
        <div className="conteiner-body flex-conteiner">
            <div className='con-900'>
                {/*Зоголовок сторінки*/}
                <div className='con-900 margin-down'>
                    <div className='white-border'>
                        <h3 className='text-p'>Заговолок</h3>
                    </div>

                    <div className='white-border heidth-div-150'>
                        <p className='text-p'>Біографія (1 речення)</p>
                    </div>

                    <div className='white-border heidth-div-150'>
                        <p className='text-p'>Група (1 речення)</p>
                    </div>
                </div>

                <div className='con-900 margin-down display-flex'>
                    <div className='white-border flex-width'>
                        <p className='text-p'>Хоббі 1</p>
                    </div>

                    <div className='white-border flex-width'>
                        <p className='text-p'>Хоббі 2</p>
                    </div>

                    <div className='white-border flex-width'>
                        <p className='text-p'>Хоббі 3</p>
                    </div>
                </div>

                <div className='margin-down'>
                    <div className='white-border heidth-div-150'>
                        <p className='text-p'>Цікаве 1 (1 речення)</p>
                    </div>

                    <div className='white-border heidth-div-150'>
                        <p className='text-p'>Цікаве 2 (1 речення)</p>
                    </div>
                </div>

                <div className='con-900 display-flex'>
                    <div className='white-border flex-width' style={{width: '590px'}}>
                        <p className='text-p' >Рекламний блок 1</p>
                    </div>

                    <div className='white-border flex-width' style={{width: '290px'}}>
                        <p className='text-p'>Рекламний блок 2</p>
                    </div>
                </div>
            </div>

            <div className='ad white-border'>
                <p className='text'>Рекламний блок</p>
            </div>

        </div>
    );
}

export default Body;