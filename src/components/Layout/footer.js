import React, { Component } from 'react'
import './footer.css'
 
export default class footer extends Component {
    render() {
        return (
            <div>
                <div class="footer-dark">
                <footer><br/><br/>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 item">
                                <h3>QUICK LINKS</h3>
                                <ul>
                                    <li><a href="#">About us</a></li>
                                 
                                </ul>
                            </div>
                            <div class="col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#">Web design</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <p>SLIIT Campus AF Project</p>
                                </ul>
                            </div>
                            <div class="col-md-3 item text">
                            <h3>Sri Lanka Institute of Infromation Technology</h3>
                            <p>SLIIT ResearchWeb </p>
                            </div>
                            <div class="col item social">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                       <a href="#" class="fab fa-pinterest"></a></div>
                        </div>
                        <p class="copyright">SLIIT.com © 2021</p>
                    </div>
                </footer>
            </div>
        </div>
        )
    }
}