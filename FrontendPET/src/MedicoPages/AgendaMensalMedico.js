import './AgendaMensalMedico.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function AgendaMensalMedico() {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };

    return (
        <div className="pagina-marcacoes">
            <div className="barra-fixa-marcacoes">
                <p className='titlepagemarcacoes'>Agenda Mensal</p>
            </div>
            <div className="barra-lateral-marcacoes">
                <div className="filtro">
                    {/* Conteúdo do filtro */}
                </div>
            </div>
            <div className="calendar-container">
                <Calendar onChange={onChange} value={date} />
            </div>
        </div>
    );
}

export default AgendaMensalMedico;
