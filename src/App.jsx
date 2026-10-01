import Card from "./components/Card";

export default function App() {
  return (
  <main className="grid grid-cols-1 md:grid-cols-5 gap-6 p-4 items-start">
    <Card className="size-80" imgSrc="/public/y.jpg" 
    title="To The Bone" 
    author="Pamungkas" 
    desc="The song 'To The Bone' by Pamungkas expresses deep longing and desire for a romantic connection, emphasizing a commitment to love and emotional vulnerability. The lyrics convey a sense of urgency and passion, with repeated affirmations of wanting the other person completely. The song explores themes of love, risk, and the complexities of relationships." />
  
    <Card className="size-80" imgSrc="/public/2.png" 
    title="Somebody Pleasure" 
    author="Aziz Hendra" 
    desc="The song Somebody's Pleasure is an invitation to rise above loneliness by finding a space to share one's story. Its lyrics convey that everyone faces problems, and there is nothing wrong with feeling sad or down; however, the focus should shift from the problems themselves to solutions. The songwriter hopes that Somebody's Pleasure can serve as a companion for those experiencing loneliness and in need of support." />
  
    <Card className="size-80" imgSrc="/public/birds.jpg" 
    title="Birds of a Feather" 
    author="Billie Eilish" 
    desc="The song Birds of a Feather tells the story of a profound romantic bond between two people. The phrase birds of a feather signifies the shared traits that draw them together and make them want to remain inseparable. The song's narrator views their partner as an essential part of their life, willing to stay by their side until the very end. Beyond its romantic nature, the song also touches upon human vulnerability—capturing the fear of loss and the realization that life feels empty without one's beloved. Although there is an awareness that the relationship might not last forever, there remains a hope that an enduring love will ultimately be the greatest outcome." />
  
    <Card className="size-80" imgSrc="/public/risk.jpg" 
    title="Risk It All" 
    author="Bruno Mars" 
    desc="“Risk It All” is the first and opening track of The Romantic. As the title suggests, the track is about Bruno willing to risk it all, and doing anything and everything for his lover. This song suggests themes like determination and love. This song ties in with Mars' 2010 song “Grenade”. Where he discusses how his love feels one-sided/he’d do anything for his lover but double standards are present, and he’d do whatever it takes to show his love to his partner and to bring change." />
  
    <Card className="size-80" imgSrc="/public/shape.jpg" 
    title="Shape of My Heart" 
    author="Pamungkas" 
    desc="The song Shape of My Heart explores the complexities of love and relationships, highlighting the emotional journey and the desire for a meaningful connection. The lyrics reflect on the intricacies of human emotions and the way they shape our experiences with love." />
  
  </main>
  );
}