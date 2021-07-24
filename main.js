const famousPeople = ['Obama', 'Arnold', 'Casper the Friendly Ghost', '550 Cent', 'Obama2', 'the plant man', 'Ted Danson', 'that neat stripper down on 54 and 86', 'The couch potato', 'The evil vegan',
'Bill from Kill Bill who got Killed', 'bank teller', 'Obama4', 'Weed weeder', 'the DJ at a funeral', 'Happy Gilmore', 'Uzi', 'Glock',
'that rice with salmon for a hat', 'maskless masked man', 'the only woman in the c-suite', 'Terminal with a Terminal illness', 'Wooster',
'the early bird', 'David Attenborough', 'Joe Pesci', 'Edifier', 'Edna Lovegate', 'some holeless man', 'that woman who walked on water', 
'the synchronised swimming team', 'the mid-level psychiatrist', 'victor oladipo', 'stephen curry', 'window springer', 'that random person down the randomness',
'Victor Victeeth', 'the motherless child', 'the self-sweeping chimney', 'Giannis', 'Thomas the Tank Engine', 'the other one', 'the second coming',
'Jesus', 'the not-Jesus', 'Swinderella', 'Disney', 'LeMickey', 'God', 'the fox with nine tails'];

const proverbs = ['A bad workman always blames his tools.', 'A bird in hand is worth two in the bush.', 'Absence makes the heart grow fonder.',
' A cat has nine lives.', 'A chain is only as strong as its weakest link.', 'Actions speak louder than words.', 'A drowning man will clutch at a straw.',
'Adversity and loss make a man wise.', 'A fool and his money are soon parted.',
'A journey of thousand miles begins with a single step.', 'All good things come to an end.', 'All’s well that ends well.', 'All that glitters is not gold.', 'All’s fair in love and war.', 'Always put your best foot forward.', 'Among the blind the one-eyed man is king.',
'An apple a day keeps the doctor away.', 'An empty vessel makes much noise.', 'An idle brain is the devil’s workshop.', 'An ounce of protection is worth a pound of cure.', 'A picture is worth a thousand words.', 'Appearances can be deceptive.', 'A rolling stone gathers no moss.',
'A ship in the harbor is safe, but that is not what a ship is for.', 'A stitch in time saves nine.', 'As you sow, so you shall reap.', 'A thing begun is half done.', 'Barking dogs seldom bite.', ' Be slow in choosing, but slower in changing.', 'Beauty is in the eye of the beholder.', 'Beauty is only skin deep.', 'Beggars can’t be choosers.',
'Best things in life are free.', 'Better late than never.', 'Better to be poor and healthy rather than rich and sick.', 'Better to wear out than to rust out.', 'Blood is thicker than water.', 'Cleanliness is next to Godliness.', 'Clothes do not make the man.', 'Cowards die many times before their deaths.', 'Cross the stream where it is shallowest.',
'Curiosity killed the cat.', 'Curses, like chickens, come home to roost.', 'Discretion is the better part of valor.', 'Don’t bite off more than you can chew.', 'Don’t bite the hand that feeds you.', 'Don’t blow your own trumpet.', 'Don’t cast pearls before swine.', 'Don’t count your chickens before they hatch.', 'Don’t cross a bridge until you come to it.'];
const item = ['champagne', 'cider', 'water', 'chicken', 'battery', 'tv', 'speaker', 'cannon', 'rain', 'chimney', 'plant', 'leaves', 'house', 'pan', 'bread', 'tiger', 'lion', 
'color', 'plate', 'knife', 'sword', 'yakuza', 'randomizer', 'painting', 'coach', 'sofa', 'pillow', 'music', 'stairs', 'siren', 'potato', 'carrot', 'cucumber', 'cheese', 'milk', 'pot', 'flower', 'watch',
'video', 'dvd', 'card', 'saber', 'pizza', 'pasta', 'pastry', 'lamp', 'shower', 'cable', 'netflix', 'string'];
const action = ['drinking', 'looking at', 'zooming in on', 'focusing on', 'squatting next to', 'pouring some of', 'finishing', 'revealing', 'thinking about', 'indicating', 'fantasising about', 
'breathing a', 'closing their', 'furnishing', 'listening to', 'freezing', 'cheesing', 'spicying up', 'framing', 'driving', 'eating', 'mumbling', 'throwing', 'flexing', 
'launching', 'crouching', 'knitting', 'picking', 'putting on', 'concentrating on', 'yelling', 'silencing', 'whispering', 'mimicking', 'hypnotising', 'recording', 'splitting',
'turning on', 'quitting', 'apologising to', 'regretting', 'buying', 'sleeping on', 'shrugging', 'shaking', 'screaming at', 'crying about', 'building', 
'swagging', 'getting lit on']; 

const generateMessage = () => {
    let i =  Math.floor(Math.random() * 50);
    let j =  Math.floor(Math.random() * 50);
    let k =  Math.floor(Math.random() * 50);
    let l =  Math.floor(Math.random() * 50);
    return 'You know, ' + famousPeople[i] + ' once said that ' + '"' + proverbs[j] + '"' + ', while ' + action[l] + ' their ' + item[k] + '.' 
}

console.log(generateMessage())