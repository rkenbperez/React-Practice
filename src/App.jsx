import './App.css'
import './components/Contacts'
import Contacts from './components/Contacts'
import Header from './components/Header'

export default function App() {
  return (
    <>
    <Header />
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
    </>
  )
}

