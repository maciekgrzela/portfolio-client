import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendContact } from '../../State/Contact/contact.thunk';
import { StatusType } from '../../State/StatusType';
import { Oval } from 'svg-loaders-react';

const Contact = () => {
  const requestStatus = useSelector(
    (state) => state.contact.status.sendContactRequest
  );
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(null);
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [text, setText] = useState(null);
  const [textError, setTextError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirstNameError(null);
    setLastNameError(null);
    setEmailError(null);
    setTextError(null);

    if (firstName.length > 100) {
      setFirstNameError('Pole Imię może mieć co najwyżej 100 znaków');
      return;
    }

    if (lastName.length > 100) {
      setLastNameError('Pole Nazwisko może mieć co najwyżej 100 znaków');
      return;
    }

    if (email.length > 50) {
      setEmailError('Pole E-mail może mieć co najwyżej 50 znaków');
      return;
    }

    if (text.length > 50) {
      setTextError('Pole Zawartość może mieć co najwyżej 3000 znaków');
      return;
    }

    const request = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      content: text,
    };

    dispatch(sendContact(request));
  };

  return (
    <div className='contact'>
      <main className='contact__container'>
        {requestStatus === StatusType.FAILED && (
          <div className='contact__status-msg contact__status-msg--error'>
            Nie udało się wysłać wiadomości
          </div>
        )}
        {requestStatus === StatusType.SUCCESS && (
          <div className='contact__status-msg contact__status-msg--success'>
            Wiadomość wysłana pomyślnie
          </div>
        )}
        <header className='contact__header'>
          <h1>Zapraszam do kontaktu</h1>
          <h4 className='faded'>
            Jeśli jesteś zainteresowany którymś z projektów, lub chciałbyś
            podjąć współpracę, skontaktuj się ze mną za pomocą poniższego
            formularza.
          </h4>
        </header>
        <form onSubmit={handleSubmit} className='contact__form'>
          <input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)}
            className='contact__input'
            placeholder='Wprowadź swoje imię'
            required
          />
          {firstNameError && (
            <span className='contact__field-error'>{firstNameError}</span>
          )}
          <input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.currentTarget.value)}
            className='contact__input'
            placeholder='Wprowadź swoje nazwisko'
            required
          />
          {lastNameError && (
            <span className='contact__field-error'>{lastNameError}</span>
          )}
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            className='contact__input'
            placeholder='Wprowadź swój adres email'
            required
          />
          {emailError && (
            <span className='contact__field-error'>{emailError}</span>
          )}
          <textarea
            className='contact__input'
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            rows={5}
            placeholder='Wprowadź treść wiadomości'
            required
          ></textarea>
          {textError && (
            <span className='contact__field-error'>{textError}</span>
          )}
          <button className='contact__submit' type='submit'>
            {requestStatus === StatusType.LOADING ? <Oval /> : <>Wyślij</>}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
