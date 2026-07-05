00:00
**Robert**: Hello.

00:01
**Robert**: Before we begin, is it okay if we record this session for our video?

00:07
**Danko**: Yeah, I confirm you can record it.

00:11
**Kir**: Okay, thank you.

00:13
**Kir**: So hello. We would like to present to you the results of our Sprint 1 today.

00:20
**Kir**: To quickly recap, our goal for Sprint 1 was to deliver MVP v1.

00:27
**Kir**: To be more precise, our goals were to have features such as playing without registration, saving progress automatically, using visual hints, selecting a game, and progressing mostly by speaking.

00:45
**Kir**: We also have a Russian translation and English word listening, though as of now, we have not perfectly finalized them.

00:56
**Kir**: Right now, our games are in demo mode. We would like to show them to you.

01:02
**Danko**: Okay, great. Sorry, I am currently at the park, so there will be some background noise sometimes.

01:10
**Kir**: It's okay.

01:12
**Kir**: Please show us the demo, my friend. This is currently how our website looks.

01:24
**Robert**: Can you see it?

01:27
**Danko**: Yeah, I can.

01:28
**Kir**: As of now, out of those pictures, only two are clickable: Color Match and Voice & Magic. Let's start with Color Match.

01:39
**Kir**: This is how our demo looks. Right now, we don't have the feature of actually pressing a button like "Cyan" and hearing "Cyan" in return. We will make it live this evening.

01:58
**Kir**: But as of now, this is the whole functionality. You can tap the button and say a word, like "brown". I hope it will actually listen to me today.

02:09
**Robert**: "Green".

02:11
**Kir**: Yes. So it is "green".

02:13
**Robert**: And now we can draw with this color.

02:16
**Kir**: Yes. Press on these shapes. As of now, it is a demo version, so it only has prototype features.

02:28
**Kir**: We will add more pictures, colors, and different word lists to choose from. You will also be able to hear the words that you need to say.

02:57
**Danko**: And you shouldn't be able to select the color without saying it, right?

03:03
**Kir**: Yes, of course. It is impossible to select it without saying it.

03:07
**Danko**: Okay, I like the game idea.

03:12
**Kir**: Thank you very much. Let's go to the second game. Right now, we don't have a button to go back, but our web coder is working on that. Let's go to the Heroes.

03:28
**Kir**: It is a demo version. We would like you to provide feedback on how you want the characters to look — maybe goblins, dragons, etc. You can press the microphone to start, choose enemies, and cast spells.

03:57
**Robert**: For example, rare bonus spell, "Metamorphosis". Yes, we kill the goblin, we inflict damage. Attack spell "fire". Yes, it works. Shield. Heal spell "restore". Okay, it works.

04:40
**Kir**: That's kind of how it works right now in our demo.

04:43
**Danko**: Sorry, I didn't quite get the gameplay. So it's a turn-based game, right? Could you please show again what happens?

05:11
**Kir**: Okay, so you say the name of a spell. You can attack, defend, or heal yourself on each turn. Sometimes rare bonus spells appear, dealing sufficient damage to the enemy. After that, the turn goes to the other side, and they attack you.

05:39
**Kir**: You have to react on your second turn: regenerate yourself by healing, defend for the next turn, or attack. So it is more strategical in its gameplay.

05:51
**Kir**: Under the listening button, there is text showing what the microphone heard you say. This gives visual feedback of what the system thinks you said to help adjust your speaking.

06:20
**Danko**: So you select some spell and then pronounce something?

06:25
**Kir**: No, we don't need to choose it. We just say its name and it casts. After that, on the second sprint, we will add dynamically tied word lists to each spell. Depending on the difficulty, you would say harder words or longer lines.

07:52
**Danko**: Maybe selection can be by hand, and then activation can be using voice. If the kid selects just one spell using their finger, you only need to check against one or three words instead of checking against many words simultaneously.

08:41
**Kir**: Oh, I see. So you'd like us to point-click on it and then say a few words to control the spell. It is a great mechanic, I like it a lot. We will do that.

10:01
**Danko**: Maybe you don't even need to show the words to activate the spell. You can select them dynamically after the spell is selected.

10:05
**Kir**: Yes, we can do that as well when we tie word lists to our game.

10:47
**Kir**: So what would you say as of now, how intuitive are those mechanics for the end user?

11:02
**Danko**: The constantly listening microphone is not very convenient, I guess.

11:07
**Kir**: Yeah, you can turn it off.

11:13
**Danko**: But in terms of the game mechanics, it's pretty intuitive. The goal is to just defeat these monsters, right?

11:34
**Kir**: As of now, yes. I want to elaborate on the idea with the chests from the Google Docs. When you defeat enemies, you get chests with loot that unlock new spells or give bonuses.

12:04
**Kir**: Simple chests would require standard words. Rare chests would require longer strings of words. This powerful loot would make it much more convenient for the player to learn proper pronunciation to get stronger, instead of grinding.

13:01
**Danko**: So you plan to make this game stateful and store some progress for it, right?

13:14
**Kir**: Yes. I thought of making it in a "Slay the Spire" way. You have runs, face different enemies, and if you die or complete the run, you start over but keep the experience gained and items unlocked. It is a rogue-like mechanic.

14:07
**Danko**: Do you want to store this progress between sessions, or just start each session from zero?

14:20
**Kir**: If a player simply quits, he would store the progress on the level. But if he dies or completes it, he would start over. He also always has the choice to start over via a button.

15:01
**Danko**: Do we want to introduce chests into this game? You can give loot directly from monsters when they die.

15:35
**Kir**: Yes, actually we can do that without chests.

16:09
**Danko**: It can be rogue-like over a single session. Every time the child has to start over, but you still keep the progress with words.

16:31
**Kir**: I would argue that in games for learning, it should be a game first to keep the player hooked. But your approach is also valid. We will keep it simpler, add the mechanics of looting from enemies, and store word progress.

17:38
**Kir**: What do you think about the initial visuals? How do you imagine the main character and monsters to look? More cartoonish or more realistic?

18:24
**Danko**: I like the Heroes of Might and Magic visuals. Monsters could approach each other like in real-world battles.

18:47
**Kir**: Would you like to stick with the pixelated style of the original games, or more cartoonish?

19:16
**Danko**: The pixelated versions have their vibe, and kids may like it. There are ready assets in the community. I think AI image generators are quite good at producing pixel art, so you can input current images and get a pixelated version.

20:27
**Kir**: It is a great idea. The pixelated look adds more personality to the game.

22:30
**Danko**: Regarding the Game of Colors, in the future version, the player will see words from the list instead of color names, right?

22:48
**Kir**: They would see the color names very small to remember them, but to choose a color, they would say a word from the list.

23:13
**Danko**: I think you can also use an activation strategy here. They pick a color name with a finger, choose an area in the image, and then activate the painting by pronouncing the word.

23:47
**Kir**: For complex pictures with many tiles, it might be tedious for a child to pronounce words for every single tile. They would get bored.

24:24
**Danko**: But when do they get to practice pronouncing words?

24:31
**Kir**: For pictures with many similarly colored tiles, we would make it simpler by asking for one string of words or a sentence for the whole color.

25:01
**Danko**: Maybe we can allow multi-select. A child can select several tiles and then activate painting them by pronouncing words. You can show an outline so they see what they selected.

26:06
**Kir**: What do you think about doing it like this: a player selects a color, says the words, and then has a 10-second timer to auto-paint the tiles they choose? Like dipping a brush in paint that runs out in 10 seconds.

27:22
**Danko**: So pressing a color activates the microphone, they say words, and get 10 seconds to paint. Yes, sounds reasonable. I like this approach.

28:13
**Kir**: Thank you very much. We would also like to look at our backlog right now.

30:11
**Kir**: We marked "Selecting a game" as 3 Story Points because the main problem is creating the games, while redirecting a button is just a simple value. Do you think it is reasonable?

31:25
**Danko**: It's up to you how you estimate the stories. The goal is to learn what your velocity is and how many story points you can cover in a sprint.

32:50
**Kir**: Right now we would like to discuss the scope of the second sprint. What features are critical for us to include?

34:46
**Kir**: Would you suggest adding word lists, or refining our games instead?

35:07
**Danko**: I think you should already start adding word lists. You have a month to complete the project, so you should plan which games you're going to implement.

36:19
**Danko**: I assume everyone in the team will prototype a couple of games and then refine them. You have five people in the team, right?

36:50
**Kir**: We have some problems with busy schedules, so we separated tasks. We have one main web coder, one designer, and others as testers and report creators.

37:21
**Danko**: The distribution of roles is important, but prototyping a game in an evening shouldn't be a huge problem. You can sit in Google AI Studio for an hour and prototype a game.

38:20
**Kir**: I see. It would be possible since those games are created by AI. We will do our best to reimagine our roles so more people act as developers trying ideas.

38:54
**Kir**: I think we discussed everything. We will most likely consult you on the backlog choices via Telegram, so it gives you more time to react and give a complete answer.

40:33
**Danko**: That's good. Thank you.

40:44
**Kir**: Thank you very much for your time. Goodbye.