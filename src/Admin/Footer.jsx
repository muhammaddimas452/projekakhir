import React, { Component } from 'react';

const Footer = React.memo(() => {
        return (
            <div>
                <footer className="main-footer">
                    <div className="float-right d-none d-sm-block">
                        <b>Version</b> 3.2.0-rc
                    </div>
                    <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
                </footer>
            </div>
        );
    }
)

export default Footer;