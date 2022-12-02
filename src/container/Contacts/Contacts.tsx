import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="text-center">
      <div className="calls">
        <button type="button" className="btn-call">Заказать звонок</button>
        <div className="phone-block">
          <a href="tel:+7 930 245 15 20" className="phone">+7 930 245 15 20</a>
          <span className="mes">
            <a href="#">WhatsApp</a> / <a href="#">Telegram</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;