import React, { Component } from "react";
import "./Demo.css";

class Demo extends Component {
  render() {
    return (
      <div id="wrapper">
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="index.html"
          >
            <div className="sidebar-brand-text mx-3">My Passion</div>
          </a>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              <span>Dashboard</span>
            </a>
          </li>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="index.html"
              data-toggle="collapse"
            >
              <span>Components</span>
            </a>
          </li>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="index.html"
              data-toggle="collapse"
            >
              <span>Utilities</span>
            </a>
          </li>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="index.html"
              data-toggle="collapse"
            >
              <span>Pages</span>
            </a>
          </li>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="index.html"
              data-toggle="collapse"
            >
              <span>Charts</span>
            </a>
          </li>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="index.html"
              data-toggle="collapse"
            >
              <span>Tables</span>
            </a>
          </li>

          <hr class="sidebar-divider d-none d-md-block" />

          <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle" />
          </div>
        </ul>

        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button
                id="sidebarToggleTop"
                class="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i class="fa fa-bars" />
              </button>

              <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      <i class="fas fa-search fa-sm" />
                    </button>
                  </div>
                </div>
              </form>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
