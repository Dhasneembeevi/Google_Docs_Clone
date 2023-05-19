import React from 'react';
import "./Right.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="https://mail.google.com" target='_blank' rel="noreferrer">
            <img style={{ width: "50px" }} src="data:image/png;base64,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" alt="Gmail" />
          </a>
        </li>
        <li>
          <a href="https://www.google.com/calendar" target='_blank' rel="noreferrer">
            <img style={{ width: "70px", height: "50px", marginLeft: "-10px" }} src="https://is3-ssl.mzstatic.com/image/thumb/Purple126/v4/f4/54/c0/f454c0e2-5c3f-7264-5b7a-e6d629830b33/logo_calendar_2020q4_color-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220-0.png/1200x630wa.png" alt="Calendar" />
          </a>
        </li>
        <li>
          <a href="https://drive.google.com" target='_blank' rel="noreferrer">
            <img src="https://www.logo.wine/a/logo/Google_Drive/Google_Drive-Logo.wine.svg" style={{ marginLeft: "10px" }} alt="Drive" />
          </a>
        </li>
        <li>
          <a href="https://www.google.com/maps" target='_blank' rel="noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfkrwtBrkHErrlJrmhxniU-Wp0PQIJ98ZAwmo3jfdAq3vZUj2bQGHSafsLUAZDzaN6s0&usqp=CAU" style={{ marginLeft: "13px", marginTop: "5px" }} alt="Docs" />
          </a>
        </li>
        <li>
          <a href="https://contacts.google.com" target='_blank' rel="noreferrer">
            <img src="https://i.redd.it/y709cjra98w91.png" style={{ marginLeft: "13px", marginTop: "5px" }} alt="Photos" />
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
