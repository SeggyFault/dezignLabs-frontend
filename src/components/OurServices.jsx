import { useNavigate } from 'react-router-dom'
import Card from "./Card"

export default function OurServices({ id }) {
  
  const navigate = useNavigate()

  return (
    <section id={id} className="bg-brand-primary py-12 md:py-20">
      <div className="container px-4 md:px-0 mx-auto flex flex-col gap-4 md:gap-8">
        <h2 className="text-text-on-dark uppercase text-5xl font-bold">Our services</h2>
        {/*Grid*/}
        <div className="grid grid-cols-12 gap-4">
          {/*Row 1*/}
          <div className="col-span-12 md:col-span-6">
            <Card
              title="Marvel"
              description="Promo video"
              video="https://www.youtube.com/watch?v=CfEcO-ajjqE"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Card
              title="Scrabble"
              description="Promo video"
              video="https://www.youtube.com/watch?v=WMOTWB-EPGs"
            />
          </div>
          {/*Row 2*/}
          <div className="col-span-12 md:col-span-8">
            <Card
              title="UX/UI Design"
              description="Product design"
              image="/images/card_3.webp"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
             <Card
              title="Static"
              description="Promo design"
              image="/images/card_4.webp"
            />
          </div>
          {/*Row 3*/}
          <div className="col-span-12 md:col-span-4">
            <Card
              title="Game Concepts"
              description="Product design"
              image="/images/card_5.webp"
            />
          </div>
          <div className="col-span-12 md:col-span-8">
             <Card
              title="Work with influencers"
              description="Communities, Promo design (Mr.Beast, etc)"
              image="/images/card_6.webp"
            />
          </div>
          {/*Row 4*/}
          <div className="col-span-12">
            <Card
              title="E-paper"
              description="Development, Product design"
              image="/images/card_5.webp"
              buttonText="Learn More"
              onClick={() => navigate('/epaper')}
            />
          </div>
        </div>
      </div>
    </section>
  )
}