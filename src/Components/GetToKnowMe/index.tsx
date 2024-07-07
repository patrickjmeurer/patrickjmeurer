import Card from '../Card'

const GetToKnowMe: React.FC = () => {
  return (
    <section className="mt-[200px] w-full">
      <h2 className="color-white mb-5 mt-2">Get to know me </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Card
          title="About me"
          subTitle="Who I am and what I do"
          imageUrl="/memoji-hello.png"
        />
        <Card
          title="Tech Stack"
          subTitle="The dev tools, apps, devices, and games I use and play."
          imageUrl="/techs.png"
          imageFull
        />
        <Card
          title="Experiences"
          subTitle="All my working experiences and informations"
          imageUrl="/code.png"
          imageFull
        />
      </div>
    </section>
  )
}

export default GetToKnowMe
