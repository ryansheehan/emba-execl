import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await resetQuotes();
}

async function resetQuotes() {
    const {count: deleteCount} = await prisma.motivationalQuote.deleteMany();
    console.log(`${deleteCount} motivational quotes deleted`);
    const {count: createCount} = await prisma.motivationalQuote.createMany({data: quotes});
    console.log(`${createCount} quotes inserted`);
}

interface Quote {
    quote: string;
    attribution: string;
}

export const quotes: Quote[] = [
    // Week 1-10
    { quote: "Life is meaningful and the meaning of life is to help others find the meaning of theirs.", attribution: "Dr. Viktor Frankl"},
    { quote: "As a leader, clarity in my agenda is essential to the team's and organization's success.", attribution: "", },
    { quote: "Something as simple as words of appreciation can become a healing balm to others.", attribution: "", },
    { quote: "Truth is anchored to a fixed set of morals and principles. Truth does not deceive.", attribution: "", },
    { quote: "Success: When purpose, talent, and resources come together to meet the needs of others.", attribution: "", },
    { quote: "Anything that is worth doing is worth doing badly.", attribution: "G.K. Chesterton", },
    { quote: "An optimist finds an opportunity in every difficulty; a pessimist finds a difficulty in every opportunity.", attribution: "Winston Churchill", },
    { quote: "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.", attribution: "John F. Kennedy", },
    { quote: "The most difficult thing is the decision to act. The rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do.", attribution: "Amelia Earhart", },
    { quote: "A leader is the one who knows the way, goes the way, and shows the way.", attribution: "John C. Maxwell", },

    // Week 11-20
    { quote: "Success is no accident. It is hard work, perseverance, learning, studying sacrifice, and most of all a love of what you are doing or learning to do.", attribution: "Pelé", },    
    { quote: "We face circumstances every day of life. We choose our attitude and our focus as we navigate through those circumstances.", attribution: "", },
    { quote: "Burnout happens when our personal story begins to encounter conflict.", attribution: "", },
    { quote: "You must be the change you wish to see in the world.", attribution: "Mahatma Gandhi", },
    { quote: "Success consists of going from failure to failure without loss of enthusiasm.", attribution: "Winston Churchill", },
    { quote: "The first order of things to be changed is me, the leader. After I consider how hard it is to change myself, then I will understand the challenge of trying to change others. This is the ultimate test of leadership.", attribution: "John C. Maxwell", },
    { quote: "The first responsibility of a leader is to define reality. The last is to say thank you. In between, the leader must become a servant and a debtor.", attribution: "Max DePree", },
    { quote: "The servant-leader is servant first. It begins with the natural feeling that one wants to serve, to serve first. Then conscious choice brings one to aspire to lead.", attribution: "Robert K. Greenleaf", },
    { quote: "It is not enough to have a good mind; the main thing is to use it well. It is not good enough to have good talent, the main thing is to apply it well.", attribution: "René Descartes", },
    { quote: "You can do it like it's a great weight on you, or you can do it like it's a part of the dance.", attribution: "Ram Dass", },

    // Week 21-30
    { quote: "Don't wait to be successful at some future point. Have a successful relationship with the present moment and be fully present in whatever you are doing. That is success.", attribution: "Eckhart Tolle", },
    { quote: "But as for you, be strong and do not give up, for your work will be rewarded.", attribution: "2 Corinthians 15:7", },
    { quote: "If no mistake you have made, losing you are. A different game you should play.", attribution: "Yoda", },
    { quote: "The thinking of the mind is twofold: understanding and willing.", attribution: "René Descartes", },
    { quote: "We are teaching always; if needed, use words.", attribution: "", },
    { quote: "Confusion is the enemy of progress.", attribution: "", },
    { quote: "How we say what we say is as important as what we say.", attribution: "", },
    { quote: "Cultures are the learned patterns of beliefs, values, assumptions, and behavioral norms that manifest themselves at different levels of observability.", attribution: "Dr. Edger Schein", },
    { quote: "The only competitive advantage we have is the culture and values of the company. Anyone can open up a coffee store.", attribution: "Howard Schultz", },
    { quote: "A curious mind is the leader's most steadfast tool in the toolbox.", attribution: "", },

    // Week 31-40
    { quote: "You are either leading or following at any given time, and you need to be effective at both.", attribution: "", },
    { quote: "When we are no longer able to change a situation, we are challenged to change ourselves.", attribution: "Dr. Viktor Frankl", },
    { quote: "Gratefulness leads to generosity, which is the most effective way to rejuvenate purpose in my life.", attribution: "", },
    { quote: "If a person hears the same story two to three times, they will begin to form a belief about that story.", attribution: "", },
    { quote: "We become the stories we allow to consume us.", attribution: "", },
    { quote: "Leadership at its core is about harnessing others' efforts to achieve something no one can achieve alone.", attribution: "Dr. Amy Edmondson", },
    { quote: "The person with the most hope in the room will have the most influence.", attribution: "John Stickl", },
    { quote: "A story left uninterpreted is vulnerable to be misinterpreted by others.", attribution: "", },
    { quote: "Story is the language of life. Each experience we have in life comes through some type of story.", attribution: "", },
    { quote: "Human behavior is directly impacted by how they think and feel about a story.", attribution: "", },

    // Week 41-50
    { quote: "Everything can be taken from a man but one thing: the last of the human freedoms—to choose one's attitude in any given set of circumstances, to choose one's own way.", attribution: "Dr. Viktor Frankl", },
    { quote: "Purpose-centered: Living by a set of fixed principles pursuing your passion, leveraging your strength, discerning your why, while making a positive difference with others.", attribution: "", },
    { quote: "Everything takes time. Bees have to move very fast to stay still.", attribution: "David Foster Wallace", },
    { quote: "Forgiveness is not about forgetting, but about letting go. When we extend second chances, we enhance our ability to influence others, which only increases our leadership potential.", attribution: "", },
    { quote: "Life is filled with personal, professional, and organizational challenges. In each instance, there is a choice to make: become the victim of the circumstance or rise above and become victorious over the circumstances.", attribution: "", },
    { quote: "It is the leader who is able to admit the confusion they have created humbly and authentically focus their agenda beyond self and on the greater good that builds a sustainable culture.", attribution: "", },
    { quote: "People can know what to do and yet not fully understand how to do it. When we confuse knowledge with actual capability, our outcomes suffer.", attribution: "", },
    { quote: "A life focused only on self is a life filled with empty joy. A meaningful purpose in life will always be externally focused towards others. When we focus our life energy, our talents, and even our resources in the direction of serving others with honor; there we find true joy.", attribution: "", },
    { quote: "In every experience, we create or encounter we have the privilege of choosing our attitude and focus and determine what we can control or what we cannot control.", attribution: "", },
    { quote: "Maintaining the story when you are not around requires you to align your internal processes, technology, and systems.", attribution: "", },

    // Week 51-52
    { quote: "Do nothing selfish ambition or conceit, but in humility count others more significant than yourselves. Let each of you look not only to his own interests, but also to the interests of others.", attribution: "Philippians  2:3-4", },
    { quote: "We encounter three stories daily: the Show Up Story, the Speak Up Story, and the Sync Up Story.", attribution: "", },  
];

main()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })