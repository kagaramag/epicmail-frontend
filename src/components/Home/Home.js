import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import { Img } from '../common';
import logo from '../../assets/images/logo.svg';
import mailerUi from '../../assets/images/mailer_ui.png';

const Home = () => (
  <section>
    <div class="row  indigo">
      <div class="container center-align">
        <div class="s4 m4 l4">
          <div class="xl-padding move-1">
            <h1 class="xxl-text center-align text-white">
              Welcome to
            </h1>
            <div class="row">
              <div class="image move-2">
                <Img src={logo} id="app-logo" style="" alt="EPICMAIL" />
              </div>
            </div>
            <br />
            <br />
            <div className="clear" />
            <div class="indigo">
              <Link to="/register" class="btn jazzberry text-white xl-h-padding l-v-padding radius-6">Get Started</Link>
              {' '}<span class="text-white">or</span> {' '}
              <Link to="/login" class="btn jazzberry text-white xl-h-padding l-v-padding radius-6">Login In</Link>
              <br />
              <br />
              <div class="center-align indigo l-v-padding text-white">
                Create your free mail account today.<br />
                Get notified on the go!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mailer_ui">
      <Img src={mailerUi} alt="Mailer User Interface" />
    </div>
  </section>
);

export default Home;
