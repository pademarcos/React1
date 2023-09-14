import React from 'react';

const HomePage = (props) => {
    return (
        <main className='holder'>
            <div className='homeimg'>
                <img src='img/home/img01.jpg' alt='Avion'/>
            </div>
            <div className='columnas'>
                <div className='bienvenidos'>
                    <h2>Bienvenidos</h2>
                    <p>lorem20</p>
                    <p>lorem20</p>
                </div>
                <div className='testimonios'>
                    <h2>Testimonios</h2>
                    <div className='testimonio'>
                         <span className='cita'>Simplemente Excelente</span>
                         <span className='autor'>Juan Perez - zapatos.com</span>
                         </div>

                </div>
            </div>
        </main>
    );
}
export default HomePage;