import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, handleDelete }) => {
  return (
    <li className={css.contactItem}>
      <span>
        {name}: {number}
      </span>
      <button
        className={css.contactItemBtn}
        type="button"
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactItem;
