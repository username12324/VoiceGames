Team mem. 2: [00:00:02] Hello. Before we begin, is it okay if we record this session for our academic report? Okay.

Team mem. 1: [00:00:09] Good day. Let's start our interview. So in the time between our previous and this interview, we did a lot of things actually. Yes. We thought about different games. We will revoke the old games. We implemented something new, some new features. Also we tried to implement pipelining, which kind of right now in its rudimentary state, it's kind of half working. So because of this we have some troubles with deploying actual games and but a lot of it works. So we decided to show you the video of one of the games it's not already uploaded. All the points that were made on the previous interview were addressed like addition of voice, like text to speech with English and Russian words, the revoke of voice, magic and color gate as well. And we thought about implementing some new games we implemented as of now three games. It is a voice angler, a game about fishing basically where you yeah, drop a fish. Not a fishing rod, but the bait into the water. You wait for the fish to arrive, then you press the bait. When the fish there's like a yellow triangle. Oh, and fish over here. And then you have to save in some time. What for? What words? What for? To pull out the fish, actually. Yeah. And yes, it is the voice angler. We have some more gimmicks in there, but it's not addressing right now. Of course, also, we added a really cool new game. It's a If you know what I'm talking about. It is a game. Right now it is called spell Mastery. Yeah. Quite creative. Yes, indeed. I can show it to you right now. Basically, it's the common tree in a game where you have to like when you move them, you have to say, I don't need this right now. And it is not a chromium browser. So I cannot use the voice function itself. I think my assistant can show it to you. But well, this is the gimmick of this game. So have.

Customer: [00:02:31] You managed to deploy.

Team mem. 1: [00:02:32] It? Yes, right now it is deployed. Yes. Okay.

Customer: [00:02:36] And do you use university GitLab?

Team mem. 1: [00:02:38] Yes. Of course. We use university for.

Customer: [00:02:41] For hosting the code?.

Team mem. 1: [00:02:41] The code. Okay. Yeah. We have some troubles with it because the pipeline right now isn't exactly working properly. There was one test that depended on the game, which, like, for some reason, it fails. So, I decided to just replace it with a dot for now that it just returns the success. I will fix it later, of course, but as of now, because of this, all the previous changes were deployed and failed as far as I understand. So we will redeploy everything. But right now we have the spell screen. We have the voice handler. I can clean the water right here, for example. And when the fish arrives there, yeah, we can click the power and save the boats.

Customer: [00:03:28] Okay. Does it work? Can it recognize the words.

Team mem. 1: [00:03:31] Yes, of course it can. It's not on my browser, but it can we check it out. It works. Yes, it will be used. Also we have a third game that we just just implemented. Just just just just just wait. Here it is. You just set this. So it has to do with sentence section. So you have to have the words. You have the words, you have the order. And you have to think in which order they are.

Customer: [00:04:07] And where do you keep images?

Team mem. 1: [00:04:09] Images. As far as I understand right now, they are loaded in the system itself, like just in the folder of the game. But later I think it would be possible to add them, for example, to both lists as a part of a list. Because like what this would be like this big file with different elements in it, different sections. And for example, there would be some section with images, custom images which can be replaced or cannot be replaced. For example, if you would like them to stay in default, you can do it like this. For example, have some default settings. Yeah, this is kind of how it works right now. What do you think of this game?

Customer: [00:04:52] Where are you going to store the images? In the browser?

Team mem. 1: [00:04:57] Most likely yes. Like on the local, maybe on the browser.

Customer: [00:05:03] Just put links to just like load it on the fly. That's for sure.

Team mem. 1: [00:05:09] We will think about we haven't thought about the implementation. We have the idea of this image. So it's not just in the folder. Later. I think it would be much easier for us actually to load them from the links. It would cause some trouble. It might cause some troubles later down the road because, for example, if some site calls and images would not be loaded. So we think maybe we would add some backup links for those images, like default ones. Because like when somebody creates his own word list, it's his responsibility to ensure that it works. Basically, the pictures he inputs are correct. And in this case, we will do our best to make our images in the best quality. That would work all the time from all the services. Yeah.

Customer: [00:05:56] Okay. There are clearly technical concerns.

Team mem. 1: [00:06:00] There's a lot of technical concerns.

Customer: [00:06:01] But think about that's why I didn't want to include images. Yeah. Yeah. So yeah, the the game concept is nice, but yeah.

Team mem. 1: [00:06:12] Yeah. Okay. We can maybe, for example, put some AI if we would like to integrate AI, like not in the game, but down the road when you would be maintaining it, you might integrate some AI tools, for example, and make it browse the internet for the pictures, for example.

Customer: [00:06:28] I would recommend to make this a could have idea right for the game and move it toward the end of the project.

Team mem. 1: [00:06:38] Okay. For now, it's kind of fit also in the voice and you have some time to work things out if you, if you kind of How much points do you get? Interesting.

Customer: [00:06:52] Yeah.

Team mem. 1: [00:06:52] Yeah.

Customer: [00:06:53] Beautiful feature.

Team mem. 1: [00:06:55] It keeps the players hooked.

Customer: [00:06:57] Yeah.

Team mem. 1: [00:06:58] Yeah. This is right now the games.

Customer: [00:07:01] Are.

Team mem. 1: [00:07:02] Most of them. We deleted the dots as you can see.

Customer: [00:07:05] So you you reimplemented

Team mem. 1: [00:07:10] Color match in a way. Yes. We limited it with the, our feature that we thought about about the same the world. And then actually you can also like listen to them, but right now I can't really do it because I'm not in chromium. But you can trust me. Well.

Team mem. 2: [00:07:29] Yeah, just in case. Yes, I can give you my laptop and you can test it. We also implemented that select-then-speak featur, that you mentioned last meeting.

Customer: [00:07:45] Okay. So I see the outline. You can choose green. Okay. Green. Green. First green is purple. Okay.

Team mem. 2: [00:07:57] Which part do you want to draw?

Customer: [00:08:00] So you need to to click several parts. Or what? So I can use green for four seconds. Okay.

Team mem. 1: [00:08:12] You can call it anything, for example, if you would like to.

Customer: [00:08:15] Okay. Green. So I selected it.

Customer: [00:08:21] Green.

Team mem. 1: [00:08:26] Yeah, I have time. Yeah.

Customer: [00:08:28] I have time. Can I undo?

Team mem. 1: [00:08:30] You can't really. So.

Customer: [00:08:32] Okay.

Team mem. 1: [00:08:33] It's the point of it actually to force children to say it time and time again. Yeah. Color active time.

Customer: [00:08:42] Yeah. I'm selecting blue.

Team mem. 1: [00:08:50] Blue.

Customer: [00:08:50] Not completely intuitive. Okay. Blue.

Team mem. 1: [00:08:53] As of now, it is kind of a prototype.

Customer: [00:08:56] Yeah.

Team mem. 1: [00:08:56] So we will work on it. Of course.

Customer: [00:09:00] Okay. The timer approach is pretty much convenient.

Team mem. 1: [00:09:08] Yeah. And now it painted you. You first choose, and then you say, yeah, right now, as you can see, brush is active and you can still paint something. For example, like this, you can repaint stuff. Okay, now you can say red. Red. Yeah. And now you also can tap some with few seconds. I'm not sure exactly what we plant. Yeah, we will rethink it.

Customer: [00:09:36] I am not sure if the user flow should be like this. Will be. The user should choose a color, then select some parts, then pronounce, or better like click a button to pronounce. I mean the, the timer should not start after pronouncing. So they, they have selected all necessary parts. Then the color. That's it. If they need to switch the color, select part pronounce to paint.

Team mem. 1: [00:10:11] Yeah. I actually thought about a different approach, but now we have kind of a mixed approach with selecting and then have a timer. I thought about just pressing, having timer and then like being in a rush to select all the required tiles to make it more interactive and more more engaging. In this case

Customer: [00:10:31] I thought about this game like as a more meditative. So they, they don't, they don't have to rush. They have time to paint it as they want. They can try various colors. I see.

Team mem. 1: [00:10:44] Well, we might try that. Yes. Of course.

Customer: [00:10:48] Okay. Yeah. Yeah. Could have feature have two modes in the game, but yeah, for now I think the timer is a bit redundant and a bit counterintuitive.

Team mem. 1: [00:11:07] Yeah. So you want it to be more like methodical, more like slow paced.

Customer: [00:11:13] Like and more like, like changes, changes, changes. Changes, changes changes. Then brown to commit. And then you select another color. Changes, changes, changes pronouns to commit. I mean, to, to paint like this.

Team mem. 1: [00:11:34] Okay. Will do.

Team mem. 2: [00:11:38] So also about feature "select-then-speak" implemented it in a Heroes of Voice and Magic.

Team mem. 1: [00:11:45] So change it a bit. Actually spice it up a bit the colors and the.

Customer: [00:11:50] Nice nice peaks.

Team mem. 2: [00:11:53] For example, if you want to choose some spell it okay. And only after we chose it microphone is on. And we can say that if we press one more time

Customer: [00:12:17] Okay, how do I know how to pronounce this in English? Where should I click?

Team mem. 1: [00:12:32] Yeah, right now this one in Russian, so we will add the double version. Of course.

Customer: [00:12:40] Of course. What is this? So here will be the English word. And here will be like, what? What what it does. The tech type or.

Team mem. 1: [00:12:51] I think I would say that there would be a Russian word which you can press to actually understand the translation. The attack. We can, for example, play some description around here.

Customer: [00:13:00] Okay. Yeah. You do have space here. Yeah.

Team mem. 1: [00:13:03] And even the redundant space, in my opinion. So we can change it. Right now, we don't have much of a game logic in a way. We can actually kill the enemies and get some loot from them.

Customer: [00:13:14] Yeah, it's it's okay for a prototype not to have a lot of logic. Okay. How do you. Yeah. Okay. Lightning. Werewolf. How did they attack exactly? Werewolf.

Team mem. 1: [00:13:32] Right now.

Customer: [00:13:33] Did i attack?

Team mem. 3: [00:13:35] Yeah, it shows with the red line read notification to you. When you spell the cast, they immediately attack you.

Customer: [00:13:46] But how do I know who I am attacking right now?

Team mem. 3: [00:13:50] It goes from the top to the bottom.

Team mem. 2: [00:13:53] Oh, so it's not choosable right now.

Team mem. 1: [00:13:56] Right now at this point, this point is not choosing later we will of course add choosing.

Customer: [00:14:01] Yeah. Please consider adding. Yeah, okay. Of course I going fire. Okay. I attacked werewolf attacks. But am I the werewolf attacked unicorn?

Team mem. 1: [00:14:16] No, he attacked you. He attacked unicorn? Yeah, that's how it works. They attack each other because they are chill, okay? They are friends.

Customer: [00:14:24] Tap to activate. Was that so? Okay. "Phenomenon". So I should have pronounced to earn some badge or something. Okay.

Team mem. 2: [00:14:40] "Волна".

Customer: [00:14:41] Werewolf attacks 12 damage.

Team mem. 2: [00:14:48] "Бегемот"

Customer: [00:14:50] "Hippopotamus", "hippopotamus",  bonus per hundred. Massive damage.

Team mem. 1: [00:14:57] Mighty.

Customer: [00:14:58] Okay. Okay.

Team mem. 1: [00:15:06] There you can see they are changing with time.

Customer: [00:15:08] Oh, okay. That. That's great. Okay. Okay. There happens some some bouncing here at this point of the screen. Not sure it's you, you UX friendly. Maybe this can be moved somewhere here or to the top of the screen. (regarding the microphone activity status)

Team mem. 1: [00:15:32] Yeah, we can do that.

Customer: [00:15:33] Yeah. Maybe you can also place these enemies as a triangle or something. For them to take less space and for the full game screen to fit the notebook screen. Yeah. Okay. Yeah. Okay. Good. That it. It's interactive and it's playable. Yeah. Yeah.

Team mem. 1: [00:15:59] This one is the best, in my opinion. Yeah. You can play that. It's the best one.

Customer: [00:16:09] Right. So should I switch them or what. How do I play them. Shield of light.

Team mem. 1: [00:16:18] Shield of light. Yeah.

Customer: [00:16:23] Okay. Wings of fire. Wings of fire. Tap mic. Okay, now it listens.

Team mem. 1: [00:16:38] Yeah, we should remove that.

Customer: [00:16:39] Rise and shine. Wow. Pretty impressive. Okay. Let's. How do I undo? Okay.

Team mem. 1: [00:16:54] You can just wait for it to act.

Customer: [00:16:59] Spirit of wind. Wow. Wow. Wow.

Team mem. 1: [00:17:07] You can see why I like this game. Yeah, it's the.

Customer: [00:17:10] Most level one. What will happen on the second level?

Team mem. 2: [00:17:15] For now, it's on the first level.

Customer: [00:17:19] Searching gems moves left. 18. What does it mean?

Team mem. 1: [00:17:24] Yeah. So you have some, a certain amount of moves up to which you just you get some points and they are shown to you later. I think we would make it so that you can pass on the on to the next level only when you gather a certain amount of points, basically. So you can see like score, target, target is 500. Right now you have 230. So after earning 500 or more, you will basically pass on to the second level. Yeah. Like in the most games ever. This is the best in my opinion.

Customer: [00:17:59] Yeah. Also like the mechanic. Okay. This one we, we, we looked at. Yeah. But I didn't try it myself. Okay. Click the water to cast. So I cast it.

Team mem. 1: [00:18:14] Now you wait a bit. Right now it's not exactly like perfect interactive when it comes to it.

Customer: [00:18:20] "I got it". 

Team mem. 2: [00:18:20] Yes, here we have some fishermen journal system where you can track.

Customer: [00:18:37] Why should I click now?

Team mem. 1: [00:18:40] It's a good idea.

Customer: [00:18:41] I didn't see a fish coming right now.

Team mem. 1: [00:18:43] It's not interacting with the fishes. It just showcases the general logic. It's a bit clunky, but soon. Okay, when those collide, it will catch them.

Customer: [00:18:56] Nice big fish. Nice big fish. Whoa!

Team mem. 1: [00:19:02] Yo!

Customer: [00:19:02] You catch? I got two fishes.

Team mem. 1: [00:19:05] Yeah.

Customer: [00:19:07] Epic, legendary...

Team mem. 2: [00:19:09] We have a rarity system. 

Customer: [00:19:09] Wow. That's pretty engaging. So, what is this? Am I standing on this?

Team mem. 1: [00:19:20] In a way, I think we might add some guy there or not, because it might interfere with the flow of the fish. But actually, like maybe it would be even cooler because people won't see fishes coming. They will see them only going.

Customer: [00:19:34] Right. But you, you may put a boat here. And fishermen can sit in the boat and so it won't like overlap these lines where fishes. Yeah. So like. Yeah. Like here.

Team mem. 1: [00:19:51] Okay. Good idea, good idea.

Customer: [00:19:53] We can remove this thing (talking about the fishing pier).

Team mem. 1: [00:19:55] Yeah. So above the waves.

Customer: [00:19:56] Yeah. Yeah, exactly. Above the lines. Okay. Yeah. Pretty cool game.

Team mem. 1: [00:20:04] Thank you very much. Right now we have four, like five of them basically with the fifth of them being the one that I showed you in the video. We will we thought about different games. We thought about like flight control simulator where you have for example, the world map and a bunch of planes flying around. And sometimes they will intersect. And then you have to, because that's what the actual flight control does. If somebody decides they need to make them go in different directions so that they would collide. Yeah. And it would like put some time like, oh, yeah, there's an emergency, you press it and you have to say, what if you say wrong words? For example, if you don't manage to make it on time, they will collide and you will lose some points. Otherwise you will get some points.

Customer: [00:20:49] Like this is an amazing concept.

Team mem. 1: [00:20:51] Yeah. And maybe if you just ignore it, somebody else will take it over or they will collide. I think it would be better for us to make it so that the player won't be so sad that they missed it. And the planes collided. Yeah. Also, we might add some, like, rare emergencies, like, for example, emergency landing. And then you press it and there's like, you need to say some difficult words because you need to direct a person to the thunderstorm to the landing point, for example.

Customer: [00:21:20] Something like that. Wow.

Team mem. 1: [00:21:21] Yeah. Like I'm not sure about the visual part, but the concept. Awesome.

Customer: [00:21:25] In my opinion, yeah, I agree.

Team mem. 1: [00:21:27] Yeah.

Customer: [00:21:28] You should definitely try it. If you have time. Yeah. Yeah. Okay. So here is the rating. Yeah. We plan to record the rating somehow. Is it just the visual?

Team mem. 1: [00:21:46] We might add it if like, the problem with that is that it has to collect it from somewhere. For example, from some users that are written it, if you will have some server, I think it would be possible for you to actually collect the data from the users and the satisfaction levels. We plan to make it a browser game as far as I remember. So the main progress of the games will be kept on the user side. But such a concept might just be sent because it is, in my opinion, just a simple Json query that.

Customer: [00:22:17] You.

Team mem. 1: [00:22:17] Send take a few data points to the backend, which would process it. Like if you have some server that sells because you will have some server.

Customer: [00:22:26] Yeah, yeah. But basically the user can rate each game without sending anything to the server.

Team mem. 1: [00:22:33] Yeah, I think so.

Customer: [00:22:34] Like after MVP, they may send, but like for the MVP, it's okay to store everything in the browser. Yes. Of course.

Team mem. 1: [00:22:42] Right now we don't exactly have the storing feature. We will make it shortly.

Customer: [00:22:47] Which one feature.

Team mem. 1: [00:22:50] This actually storing the progress.

Team mem. 1: [00:22:52] Okay. We plan to add this and we did the saving actually, because like the main saving point is progress in the world, not the progress in the games. The progress in the games is awesome, of course, but this is the main priority.

Customer: [00:23:06] Yes.

Team mem. 1: [00:23:07] So this will go hand, hand in hand.

Customer: [00:23:10] Okay, great. Thank you for presenting the games and progressing with the menu of games. Okay. Do we have anything else to discuss?

Team mem. 2: [00:23:22] Yes. For this sprint, we also wanted to add a dynamic word list, like a feature. And what else? So our main goals for now just To work harder on current games. Implement the backend more better.

Customer: [00:24:00] Yes, fix a couple of bugs in the facing. Okay. Any changes to the user stories you want to discuss or to your plans?

Team mem. 1: [00:24:14] Right now, we don't really have much of changes to the user stories. Yes, indeed. We might think some later, but right now, everything seems to go smoothly when the main selling point of our game is, of course, bodies and the saving of the progress. And we will see how it fits into our game if it will fit perfectly. I think I think we will keep it as it is, but if we will face some troubles, we will of course, first of all, contact you. And second of all, we will rethink our user stories and their scopes, especially if we don't have we won't have enough time due to some technical reasons. Like something taking too long. Yes.

Customer: [00:24:55] Okay. Sounds like fun.

Team mem. 1: [00:24:58] Thank you very much. Okay, this is it for the interview.

Customer: [00:25:02] Yes. Thank you. Thank you. That's all for today.

(Transcribed by Sonix.ai - Remove this message by upgrading your Sonix account today!)

