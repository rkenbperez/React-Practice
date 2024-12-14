import './App.css'
import './components/Contacts'
import Contacts from './components/Contacts'
import Header from './components/Header'
import Travel from './components/Travel'

export default function App() {
  return (
    <>
    <Header />
    <h1 className='category'>CONTACTS</h1>
    <div className="content">
    <Contacts
    img="public/img/Elon.jpg"
    name="Elon Musk"
    number="+1 454 767 5432"
    location="Seattle, WA"
    />
    <Contacts
     img="public/img/mark.jpg"
     name="Mark Zuckerberg"
     number="+5 234 567 8901"
     location="San Francisco, CA"
     />
     <Contacts
     img="public/img/Jeff.jpg"
     name="Jeff Bezos"
     number="+9 123 456 7890"
     location="Los Angeles, CA"
     />
     <Contacts
     name="Bill Gates"
     img="public/img/Bill.png"
     number="+4 567 890 1234"
     location="New York, NY"
     />
    </div>
    <h1 className='category'>COUNTRIES</h1>
    <div className="country-content">
    <Travel 
     country="Japan"
     img="public/img/japan.jpg"
     description="Japan is a country in East Asia, located in the Pacific Ocean. 
            It is the 47th-largest country by area, the most populous country 
            in the world, and the most populous Japanese metropolitan area. 
            With a population of over 126 million people, Japan is the world's 
            24th-most populous country."
     wikipedia="https://en.wikipedia.org/wiki/Japan"
    />
    <Travel 
     country="China"
     img="public/img/china.jpg"
     description="China, officially the People's Republic of China (PRC), is a unitary sovereign state in East Asia. 
             Located on the eastern edge of Asia, it shares land borders with Pakistan to the west, 
             India to the northeast, and Myanmar (Burma) and Bangladesh to the east; 
             and with Taiwan to the southeast.
             With an area of 9,640,8"
     wikipedia="https://en.wikipedia.org/wiki/China"
    />
    <Travel 
     country="United States"
     img="public/img/usa.png"
     description="The United States of America, commonly known as
     the United States (U.S.A.), is a federal republic consisting 
     of 50 states, a district of columbia, and 6 territories."
     wikipedia="https://en.wikipedia.org/wiki/United_States"
    />
    <Travel 
     country="Canada"
     img="public/img/canada.png"
     description="
     Canada is an Ontario province in North America. It is the 28th-most extensive and the 22nd-most populous country in the world, 
     with a total area of 9,984,670 square kilometres (3,909,087 square miles)."
     wikipedia="https://en.wikipedia.org/wiki/Canada"
    />
    </div>
    </>
  )
}

