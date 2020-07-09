import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
          <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home"></span>
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="user"></span>
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="edit"></span>
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="edit-3"></span>
                  Contact
                </a>
              </li>
              
            </ul>

            <h6 class="d-flex mt-4 mb-1 text-muted"> Why quartersight? </h6>
<p class="text-muted">I've always been called four-eyes, then I lost sight in one eye. One out of four. Quarter Sight. What's a bit of self-depricating humour between friends?</p>
			  <p class="text-muted">
			  	<span data-feather="github"></span>
			  	<span data-feather="linkedin"></span>
			  	<span data-feather="twitter"></span>
			  </p>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          
			
			
			
			
        </main>
      </div>
    </div>
    </>
  );
}

export default App;
