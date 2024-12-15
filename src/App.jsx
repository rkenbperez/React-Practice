import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';
import Travel from './components/Travel';
import contactData from './data/contactData';
import countryData from './data/countryData';

export default function App() {
  const contactCards = contactData.map((contact) => {
    return (
      <Contacts
        img={contact.img}
        name={contact.name}
        number={contact.number}
        location={contact.location}
      />
    );
  });

  const countryCards = countryData.map((country) => {
    return (
      <div className="country-card">
        <Travel 
        img={country.img} alt={country.name}
        name={country.name}
        description={country.description}
        wikipedia={country.wikipedia}
        />
      </div>
    );
  });

  return (
    <>
      <Header />
      <h1 className='category'>CONTACTS</h1>
      <div className="content">
        {contactCards}
      </div>
      <h1 className='category'>COUNTRIES</h1>
      <div className="country-content">
        {countryCards}
      </div>
    </>
  );
}