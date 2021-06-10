import React from 'react';

function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-7 col-md-8">
                        <h5>Dhrumil Shah</h5>
                        <i className="fa fa-phone fa-lg"></i>: +519-991-4992<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:Torajpatel@outlook.com" >
                            Torajpatel@outlook.com</a>
                    </div>
                    <div className="col-5 col-md-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-github" href="https://github.com/RajPatel0111/Tic-Tac-Toe-Game" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/rajpatel0111" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon" href="mailto:Torajpatel@outlook.com"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto col-md-auto">
                        <p>© Copyright 2021 Tic-Tac-Toe Inc.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;