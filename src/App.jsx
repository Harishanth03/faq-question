import './App.css'

const FaqItems = () => 
{
  return(
    
    <div className="faq-item">
      <div className="faq-item-header">Sample Question</div>
      <div className="faq-item-body">
        <div className="faq-body-item-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est expedita quis consectetur ea perspiciatis eius quasi voluptates, fuga sapiente quos placeat adipisci, fugit dolor at repellat architecto deserunt praesentium nihil!
        </div>
      </div>
    </div>
  )
}

const FaqAccordian = () => 
{
  return (
    <>
      <div className="faq-accordian">
        <h2>FAQ</h2>
        <FaqItems/>
        <FaqItems/>
        <FaqItems/>
        <FaqItems/>
      </div>
    </>
  )
}

function App() {

  return (
    <>
      <FaqAccordian/>
    </>
  )
}

export default App
