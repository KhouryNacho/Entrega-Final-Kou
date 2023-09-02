import React from 'react';

const WelcomePage = (props) => {
    return (
        <main className="holder">
        <div className="homeing">
            <img src="images/scm_frontend.jpeg" alt="Avion"/>
        </div>
        <div className="columnas">
            <div className="bienvenidos">
                <h2>Welcome</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium aliquam, impedit
                    perspiciatis in ducimus labore dolore placeat aspernatur iusto culpa id aut facere quos accusamus
                    doloremque fuga, sint dolores?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem suscipit temporibus natus
                    praesentium, maiores voluptas commodi officiis minima earum labore corrupti unde error consectetur
                    sit facilis omnis ipsum eveniet similique!</p>
            </div>
            <div className="testimonios">
                <h2>Workshop Comments</h2>
                <div className="testimonio">
                    <li><span className="cita">"Simply incredible"</span></li>
                    <li><span className="cita">"Best Team out there"</span></li>
                    <li><span className="cita">"SFO update when please"</span></li>
                    <li><span className="cita">"Parte?"</span></li>
                    <li><span className="autor">Random Steam Users</span></li>
                </div>
            </div>
        </div>
        Bienvenidos a SCM
    </main>
    )
}

export default WelcomePage;