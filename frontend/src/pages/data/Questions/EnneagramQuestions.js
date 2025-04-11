//Enneagram questions
const questions = {
  A: [
    "I am too strict with myself and others.",
    "I am always aware of what needs to be corrected.",
    "I am more organized than most.",
    "I am more formal than most people.",
    "I often resent it when I see people doing a slack job.",
    "I am meticulous and fastidious, even about details that other people find minor.",
    "I hold a tight rein on my temper.",
    "I can't rest until the job is done.",
    "I have a compulsion to do things the right way, even if it's not cost effective.",
    "I have been told I am a perfectionist and I suppose it is true.",
    "I seldom compromise my principles.",
    "Sometimes I am too critical of others but I am much harder on myself than I am on others.",
  ],
  B: [
    "I love to take care of people and I'm good at it.",
    "It's hard for me to put my feelings aside, even to get a job done.",
    "In most close relationships, I give more than I take.",
    // "Personal relationships are by far the most important thing in my life.",
    "I am more loving than most people.",
    "I try to get closer to people by being generous with my time and energy.",
    "Sometimes I have overextended myself in trying to help people.",
    "No one would ever call me selfish!",
    // "I am more sentimental than others.",
    "Others need my assistance much more than I need theirs.",
    "People see me as a warm and sympathetic person.",
    "Life's about give and take, so giving love is the most important thing in my life.",
    "I'm proud of the fact that many people depend on me.",
    // "It really bothers me when people don't say thank you.",
    "I'm good at motivating people.",
  ],
  C: [
    "Success, prestige, and recognition really matter to me.",
    "It's important to me that I be admired by others - and many people do admire me.",
    "For better or worse, I compare myself to others to assess how I'm doing.",
    "I am a good networker; I know how to make connections.",
    "People are attracted to me because I impress them.",
    "I am competitive and ambitious, but I do not think of myself as cut throat.",
    "It would be the worst thing to be seen by others as a loser.",
    "I am good at getting things done.",
    // "I'm not a show off, in fact I have probably been too modest.",
    "It is important to me that I win the respect of others.",
    "Even if I don't have it all together, at least I'm going to seem to have it all together.",
    "I'll do what it takes to be successful.",
    "I have a real sensitivity to how my presentation is affecting others and I can alter it if I have to.",
  ],
  D: [
    "I am more sensitive than most people; sometimes the world just seems too harsh.",
    // "I'm a true romantic.",
    "I am highly individualistic.",
    "I am more temperamental than most but it's because my feelings are so strong.",
    "I am drawn to emotional intensity and am not afraid to explore the depths.",
    "It's strange but I think that there is something beautiful about sadness.",
    "I want to be noticed but it also makes me uncomfortable.",
    "Most people don't know that I am actually really sensitive, as I tend to conceal my emotions.",
    "I don't let it show, but if I'm with someone who is as unique as I am, I get a bit jealous.",
    "I am more dramatic than most.",
    "I tend to escape reality into a world of idealized fantasy.",
    "The aesthetics of my surroundings has a strong influence on my mood.",
    "I enjoy remembering the past even if it is a bit melancholic.",
    // "My life has been permeated by a sense of longing.",
  ],
  E: [
    "I often refrain from acting, as I'm afraid of being overwhelmed.",
    "I am uncomfortable when people want an emotional response from me.",
    "I avoid expressing strong emotions.",
    "I want to observe and think, without giving myself away, before I go into action.",
    "If I'm not careful, I can get too isolated from others.",
    "I accumulate lots of knowledge to counteract my lack of self-confidence.",
    "I tend not to consider asking help from others, even from those I love.",
    "I'm not comfortable with self-revelation.",
    "I tend to have mixed feelings about many people.",
    "Sometimes I don't know what I'm feeling until I've had a chance to think about it.",
    "While I value my close relationships, I often feel most myself when I am alone.",
    "When I really get involved in an intellectual problem that stimulates me, I tend to detach from my emotions.",
  ],
  F: [
    "I want to win the approval of those in authority, sometimes even when I don't really like them.",
    "I am skeptical, suspicious and doubtful.",
    "Even though it is frequently irrational, I sometimes worry whether people are talking about me behind my back.",
    "While I am very loyal myself, I frequently worry that others are not going to be loyal to me.",
    "I am attuned to anything that might be dangerous and I am security conscious.",
    "It's important to me to feel as though I 'belong.'",
    "To deal with the fear I always have, I'm as nice and warm as possible towards everyone.",
    "I'm constantly on the lookout for things that might go wrong.",
    "Change - whether to a new job or new school, makes me more anxious than it does most people.",
    "It takes me quite a lot of time and effort to make important decisions and I frequently second guess myself.",
    "People often aren't what they seem, so I can really be suspicious of their motives.",
    "I can easily imagine all the things that might go wrong, as I have a really vivid imagination.",
    // "I sometimes wish people would take care of me for a change.",
    // "I tend to either comply completely or to rebel.",
  ],
  G: [
    "I don't get depressed easily, if at all.",
    "I plan the next adventure before the current one is finished.",
    // "I don't see much point in wallowing in negative emotions. When I begin to feel anxious, I tend to throw myself into distracting activities.",
    "I don't mind taking a risk; I really like to beat the odds.",
    "I get bored more easily than most people; I am always looking for new experiences.",
    "I don't like commitment. Who wants to be locked into something, especially if something better presents itself?",
    "When making a decision, I often ask myself 'which option will yield the maximum enjoyment?'.",
    // "It's really hard for me to save money as I tend to spend beyond my limits.",
    // "If something doesn't go my way, I can find something beneficial about it.",
    "I'm a brainstormer. For every problem, I can think of 10 approaches to a solution.",
    "I want to enjoy things, so I'm not very disciplined.",
    "It's hard to stay passionate and focused.",
    "I generally don't like to stay at one task for very long. I get restless and want to move onto something else.",
    "I'm really good with the big picture but I don't have much patience with detail work.",
    // "When I've arrived, the party starts.",
    "I secretly fear deprivation and being without the nicer things of life.",
  ],
  H: [
    "I'm pretty domineering.",
    "Your happiness and your feelings are your responsibility, not mine.",
    "Rules annoy me.",
    "I come on pretty strong and can sometimes intimidate people.",
    "I welcome a good fight as it clears the air.",
    "I almost never lose control of myself.",
    "I think it's weak to back down from confrontation.",
    "I'm pretty tough.",
    "I have been told that I lack tact but I think the important thing is to tell the truth.",
    "My tendency to tell people what's wrong and what they should do about it has sometimes annoyed them.",
    "I have more energy and strength than most people.",
    "I don't give a damn about morality but I've got my own brand of integrity.",
    // "I have strong physical appetites.",
  ],
  I: [
    "I tend to trust most people.",
    "I could probably use a little more ambition.",
    "It's easy for me to accept other people, and they seem comfortable around me because I don't judge them.",
    "I'm quite unobtrusive and easy to get along with.",
    "Nobody likes to be intruded upon, but I hate it!",
    "I go along with what others want unless I have a very strong desire of my own, which I usually don't.",
    "I tend to avoid conflict.",
    // "I'm a big procrastinator.",
    "I don't tend to over commit myself - I have a limited amount of time and energy.",
    "Usually I just focus on the positive sides of people, as focusing on negative traits or events does not help making relationships more harmonious.",
    "I often lose my focus as my attention tends to drift off from the main issues.",
    "I generally appear calm and even tempered, even when I am under an enormous strain.",
    // "I usually fall asleep readily and can even take a nap when I'm stressed out.",
    // "I sometimes forget to do something that another person has been pushing me to do.",
    "I see all points of view when there is a dispute, so it's hard for me to take a side.",
  ],
};

export default questions;