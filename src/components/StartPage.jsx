import React from 'react'
import { Link } from 'react-router-dom';

function StartPage() {
    return (<>
    <div>
    <h1>Informacje dla testerów &#128579;</h1><br />
        <h2>By zalogować się należy przejść pod <Link to="/login">adres</Link></h2><br />
        <h4>Przykładowe dane do logowania</h4><br />

        <span><b>Email: </b>jan.profesorski@agh.edu.pl</span><br />
        <span><b>Hasło: </b>12345</span><br /><br />
        
        <span><b>Email: </b>wacław.f@agh.edu.pl</span><br />
        <span><b>Hasło: </b>12345</span><br />

        <hr />
        <h4><a href="https://drive.google.com/drive/u/1/folders/1FxCPi9Rt1-W5AgXb_KJUxJQvzgO70fnh">link</a> do dysku z przykładowymi plikami</h4>
    </div>
      
    </>);
}

export default StartPage;
