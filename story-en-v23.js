const STORY_EN = {
  "title": "The September That Was Never Sent",
  "guide": {
    "name": "Mr Rabbit",
    "hello": "Yeah, I'm the detective. Go ahead, I'm here.",
    "steps": [
      {
        "title": "Start by telling me what happened that night.",
        "body": [
          "On the night of September 16, Phil Chi fell from the second-floor connecting corridor of Nanchuan University's Literature Building. She survived the fall and is now recovering. Kavin Zhou, Caroline Xu, and Caesar Huo are all connected to what she went through that night. You were hired by her to figure out exactly what happened through online communication.",
          "Say hi to them first, and you can use clues from the diary to ask questions. Whatever you bring up in chat, I'll help you dig up the relevant info."
        ],
        "next": "Start chatting with Phil Chi →"
      }
    ]
  },
  "characters": [
    {
      "id": "lin",
      "name": "Phil Chi",
      "initial": "PC",
      "color": "#b9cbb8",
      "role": "Department of Chinese Language and Literature · Junior",
      "tag": "Want to be held back, but also want to walk away freely",
      "bio": "Editor for the Literature Society, and a candidate for a three-month residency at an off-campus writing workshop. She likes Kavin Zhou, but also longs to become someone who can sign her own work and choose her own future independently.",
      "hello": "Hi, is it too late to text? Will this bother you? I heard you're a detective, and I need a huge favor from you.",
      "intro": "I'm Phil Chi, a junior in the Chinese department at Nanchuan University. That girl who had the accident at the Literature Building... that's me. I deleted this line so many times just now; I had no idea how to start saying it.",
      "ack": "How are you feeling right now? Can you still talk about the night of September 16?",
      "opening": [
        {
          "npc": "A little better than a few days ago. I can hold my phone now. Some parts of that night I remember super clearly, but other parts just don't connect at all.",
          "reply": "Start by telling me the last thing you remember doing."
        },
        {
          "npc": "I was in the small practice room on the first floor of the Literature Building, then I got a phone call. It was way too noisy inside, so I walked toward the second-floor connecting corridor.",
          "reply": "What time did the call come in?"
        },
        {
          "npc": "The call log says 20:17, a landline from out of town. I needed to hear the requirements for the supplementary materials clearly, so I kept looking for a quiet spot.",
          "reply": "What happened after you got to the connecting corridor?"
        },
        {
          "npc": "The wind was really strong. I remember I was still on the phone, trying to find a place to write things down. There are a few parts after that I can't tell if I actually remember, or if I just heard other people talking about them after I woke up.",
          "reply": "Don't force it if you can't remember. Just say whatever you do recall; you don't have to strain yourself to dig it up."
        },
        {
          "npc": "Okay. After I woke up, I wrote down that call and everything from that day in a notebook. It was super messy at first. I even rewrote every single line over and over.",
          "reply": "Let's start with these notes you made that day. We can talk about older stuff later."
        }
      ],
      "welcome": "I found the entries from right before and after that phone call. Let's start with this page first."
    },
    {
      "id": "zhou",
      "name": "Kavin Zhou",
      "initial": "KZ",
      "color": "#b6c9d5",
      "role": "Department of Architecture · Junior",
      "tag": "Mistook silence for care",
      "bio": "Member of the Photography Club. He knows Phil Chi's daily habits really well, but he's scared of the idea that she might have a future where she doesn't need him to take care of her anymore; he also went along with Caroline Xu getting close to him.",
      "hello": "Hey. Phil Chi sent me your contact, said you're a detective. Do you have time to chat right now?",
      "intro": "I'm Kavin Zhou, a junior in the architecture department, in the Photography Club. She probably already told you about me... or maybe not.",
      "ack": "Start with that night. Where were you before the accident happened?",
      "opening": [
        {
          "npc": "I was at the photo shop off campus at 20:07. I have the receipt, so I didn't make that time up later.",
          "reply": "Did you stay in the shop the whole time after that?"
        },
        {
          "npc": "I hung around for a while. All the photos were already wrapped up, but I asked the clerk to trim the edges again, and I didn't leave until that was done. You'll have to check the later payment record for the exact time I left.",
          "reply": "What did you see when you got back to campus?"
        },
        {
          "npc": "There were already a bunch of people gathered. The security guards and other students got there before me. The group chat said I was the first one there, but that's not true.",
          "reply": "Did you see Phil Chi at that point, or talk to her on the phone?"
        },
        {
          "npc": "I only sent her a text asking where she was before I got back to school, and she never replied. I never arranged to meet her at the connecting corridor, and I never got a call telling me to come over there.",
          "reply": "Alright, we'll check the texts and payment records together later. Don't mix up the timelines in your head."
        },
        {
          "npc": "Okay. I wrote down what I was doing that night after it happened, even why I dragged my feet getting out of there. Looking back at it now, I still don't really want to read it.",
          "reply": "Let's look at that entry for that night first. You can explain later why you wanted to give her those photos, we can take it slow."
        }
      ],
      "welcome": "I found the page about the photo shop, and the receipt is still there too."
    },
    {
      "id": "shen",
      "name": "Caroline Xu",
      "initial": "CX",
      "color": "#d5bcaa",
      "role": "Department of Journalism · Junior",
      "tag": "Refuses to only be a bystander in other people's stories",
      "bio": "Photojournalist for the campus journal, Phil Chi's roommate. She likes Kavin Zhou, but also values Phil Chi as a friend; she once made her own judgments sound like they were what Phil Chi herself thought.",
      "hello": "Hey, are you the detective Phil Chi told me about? She gave me your contact info. I hesitated for a while before I worked up the courage to add you.",
      "intro": "I'm Caroline Xu, a junior in the journalism department. I take photos for the campus journal, and I'm also Phil Chi's roommate. Usually I'm the one pestering other people to answer questions, but when it's my turn, I'm actually kind of nervous.",
      "ack": "Let's talk about that day first. Did you meet Phil Chi before the accident?",
      "opening": [
        {
          "npc": "Yeah, I did. Around 20:00, we talked for a bit on the second floor of the Literature Building, then we started fighting. I'm not gonna hide that part.",
          "reply": "After you fought, where did you go?"
        },
        {
          "npc": "We split up at 20:05, and I went downstairs to the equipment room. I didn't follow her. The entry in the log is 20:06, and the admin was there at the time.",
          "reply": "How long did you stay in the equipment room?"
        },
        {
          "npc": "Until around 20:22. Two other students from the campus journal came by to pick up stuff in between, and we sorted out batteries and memory cards together, so it's not just me who remembers that timeline.",
          "reply": "When did you find out something bad had happened?"
        },
        {
          "npc": "I only went out after I heard the commotion outside. I didn't see the fall happen. I've said that so many times, but people still keep saying I was right there following her the whole time.",
          "reply": "Okay, I've got that noted. If you didn't see it, just say you didn't see it. You don't have to fill in the gaps for anyone else."
        },
        {
          "npc": "I wrote down everything we yelled about that night later. Some of the stuff we said was pretty harsh... but we did say it, and I never deleted any of it.",
          "reply": "Let's look at the notes for that night first. We can talk about what was going on between you two earlier later."
        }
      ],
      "welcome": "The part at the staircase is right here. Let's cross-check the times and all the places I went first."
    },
    {
      "id": "xu",
      "name": "Caesar Huo",
      "initial": "CH",
      "color": "#c4beda",
      "role": "Department of Music · Senior",
      "tag": "Got way too good at acting like everything's fine",
      "bio": "Lead singer of the campus band, he has previously written music together with Phil Chi. Usually he talks super casually, but when he's being serious, he'll always hide behind a joke first.",
      "hello": "You there? I heard you're a detective. Phil Chi sent me your contact, I thought she was messing with me at first.",
      "intro": "Caesar Huo, senior in the music department, I sing in a band. Just got out of practice, my fingers are still stiff, sorry if I typo anything.",
      "ack": "We can talk about how you two know each other later. First, where were you the night of September 16?",
      "opening": [
        {
          "npc": "I was in the small practice room on the first floor of the Literature Building, testing out a new song with Phil Chi. The recording equipment was running the whole time.",
          "reply": "When did she leave?"
        },
        {
          "npc": "20:17, she picked up the call and said she couldn't hear anything clearly in the room, so she was gonna go to the second-floor connecting corridor. I didn't follow her; I stayed in the practice room.",
          "reply": "What did you hear after that?"
        },
        {
          "npc": "First there was a really weird noise, then a few seconds later I heard someone yell outside. When I played the recording back, that was around 20:19.",
          "reply": "Did you see what happened on the connecting corridor?"
        },
        {
          "npc": "No. By the time I ran out, people were already rushing toward the stairs.",
          "reply": "Alright, let's listen to the audio first, then check the timeline against that."
        },
        {
          "npc": "I wrote down what happened in those few minutes too. When other people asked me about it before, I always brushed it off with some line about a performance. I never told the full story.",
          "reply": "Send it over. No rush, just say it bit by bit."
        }
      ],
      "welcome": "I found the notes from that night's song test, they're saved right next to the audio recording."
    }
  ],
  "chapters": [
    {
      "title": "What really happened that night",
      "subtitle": "Start with all the places everyone went to, the things they heard, and the times they wrote down on September 16.",
      "date": "09.16 — 09.20",
      "objective": "Sort out the full sequence of events on the day of the fall through private chats first, then read each person's personal notes from that day. Only after you verify all eight clues in this chapter can you move on to talk about the umbrella, the photos, and all the words that no one got to say out loud that night.",
      "entries": [
        {
          "who": "lin",
          "title": "No one ever asked where I was going",
          "date": "Sept 20, 2024 Addendum",
          "weather": "Sunny",
          "text": [
            "Addendum from September 20, sunny. It's the third day after I woke up. The sun is blindingly bright, and the white hospital walls make all those messages in the group chat look even uglier. The nurse asked if I wanted my phone taken away. I said just a little longer. The group chat says I \"did that over relationship drama,\" says I planned to run off with Caesar Huo, says that phone call was him pressuring me to make a choice. Every single one of those stories feels totally foreign, but every single one of them has my name attached to it. The cup on my bedside table bumped against my phone. The screen went black, but I was still staring at the spot where those lines had just been.",
            "That phone call was from the writing workshop, {c13|urging me to submit the supplementary materials and confirm whether I had been selected}. The professor said I had passed the preliminary review. I had to submit the signed commitment form and a scan of my ID within 24 hours. There would be an online interview after I confirmed I'd attend. The workshop lasts three months, in that small coastal city in the next province over. It's not even the same city Caesar Huo is going for his exchange program. We never even talked about traveling there together.",
            "Why did I go to the connecting corridor? The answer's super boring, the people making up all those wild stories are probably disappointed: it was way too noisy outside the first-floor practice room, people were moving speakers around, no one was on the second-floor connecting corridor at that time, and the signal was good. I needed to hear the professor on that out-of-town landline tell me the exact deadline. I never met up with anyone there, and I didn't storm up there out of control after a fight. The wind was really strong, the sound of rain mixed with the rustling of trees, I was walking toward the wall side while I was on the phone.",
            "No one pushed me. I didn't lose my mind after fighting with someone. Between 18:00 and 20:00, me and Caroline Xu did have a really unpleasant talk, but we already split up at 20:05; the call I got at 20:17 was from the workshop. The call log and my application emails still exist, the school is still investigating that corridor. I know exactly why I picked up that phone, but I have no idea what exactly went wrong with the facilities there. All those rumors don't care about any of that, they just squashed my two-page letter into one stupid gossip line.",
            "The worst part is that I know some of those people. We had classes together, lent each other pens, we'd say hi in the hallway. They'd go in the group chat asking if I ran off with someone, like they were just asking what's for dinner. I clicked on one person's profile, wanted to DM him asking where he heard that garbage, but typed a few words and backed out. I put my phone down on the bedside table, but a second later I reached for it again. I already knew the next text would probably be the same garbage, but I was scared there was some new version of the rumors I hadn't seen yet.",
            "Caesar Huo texted me asking what I needed, I told him don't explain our relationship in the group chat for me. He said he gets it. We worked together, admired each other for a few moments, that's all. \"Admiration\" doesn't need to be twisted into an elopement. Dragging him into the rumors isn't fair to him, and rewriting my application to make me sound like I was just chasing after someone would be a total insult to all those late nights I spent writing.",
            "I'm willing to make public all the stuff that actually matters: where that call came from, how far my application went, and why I was on the connecting corridor. There was no fight and no chase. But my love letters, the full application draft, and my private chats, I don't have to lay all that out just because everyone's curious. That letter hadn't even been read by the person it was addressed to, and the rumors already tore it to pieces. Clearing my name doesn't mean I have to empty every drawer and let everyone rummage through my stuff; it just means I put out the actual timeline that relates to what happened. I care so much about getting that boundary right now.",
            "When I was practicing walking today, the nurse asked if I wanted to rest, and I said a little more. After I sat back down, I remembered I still had workshop materials to submit, and immediately asked where my phone was. All that stuff's been spinning around in my head nonstop. I'm scared the deadline will pass, scared the professor will think I'm dropping out, but also scared if I explain too much it'll look like I'm begging for sympathy. I can even rewrite the line that says I want to keep applying a dozen times. It's not like what they say about me not caring about anything anymore.",
            "I opened my memo app today, and suddenly remembered when I picked up that call, I was patting my pockets looking for a pen. There are multiple versions of the materials; I was scared I'd mix up which one I had to submit, and I'm used to writing things down, so I ended up typing it in the memo. When I opened that unfinished note now, there's no one's name in there at all, just the attachment format and the first few letters of the professor's email address. It's totally mundane. But that mundanity just pulled me right back into what my life was like that day.",
            "I left that unfinished memo there; I never filled it out completely. It only has the first few letters of the professor's email and the attachment format. Looking at it, I remembered I was worried about missing one single letter back then. There was a gala that day too, a letter I hadn't sent out yet, and the conversation I never finished with Caroline Xu. All that stuff was piling up all at once. It's all a messy jumble. Right after I wrote down the attachment format, the next line was about the gala. I'm not gonna organize it. That afternoon was already like that, a bunch of unfinished things all crowding my brain at the same time."
          ],
          "clue": "c13",
          "recollectionAt": 8,
          "wordCount": 1105,
          "recallCaption": "Memories of that night"
        },
        {
          "who": "zhou",
          "title": "I was late",
          "date": "Sept 18, 2024 Addendum",
          "weather": "Rainy",
          "text": [
            "Addendum from September 18. I haven't slept well these past two days, and I keep thinking about the photo shop when I wake up. I'm scared I'll mix up the timeline in a few days, so I'm writing it all down now. That night at 19:55, Caesar Huo texted saying the gala got rescheduled last minute, and Phil Chi was probably near the Literature Building. I was at the photo shop at 20:07, I have the receipt. Staring at the receipt, I keep replaying the second I paid, like I can skip over all that time I wasted after that. But I really did stay in the shop for a super long time.",
            "The clerk had already packed up my photos and handed them to me, but I pointed and said {c10|trim the edges a little more}. That tiny white border was totally fine. I remember he asked me how much to trim off, and I couldn't even say, just waved my hand. He took them back to cut again, I stood next to the counter, my phone kept lighting up then dimming. If I said I was only waiting for the photos to finish that would be a lie. I'm the one who told him to do extra work.",
            "I was scared to see Phil Chi. A few days before I heard she might leave town, I felt all tight in my chest and never asked her about it. I was also scared Caesar Huo already said something to her, and she was gonna confront me about it. But none of that has anything to do with that tiny white border on the photo, nothing at all. I just found something I could do to kill time, drag it out until I could think of the first thing to say to her. But I never figured that line out.",
            "I know they wrote songs together. When she explains why a melody has to stop, she gets so serious; sometimes I don't get it, and I just feel like that's a place I can't follow her to. So I even assumed that the writing workshop thing was connected to him too. They're in totally different cities, but I still cared. Looking back now, I try to skip over those parts, but I end up writing them down anyway. Standing there holding the photos not wanting to leave that night, it wasn't just because I was scared of the rain.",
            "Around 20:12 the photos were trimmed and repackaged, and I was still by the counter, flipping through photo albums and looking at frames, going through one after another. I texted Phil Chi \"where are you\" in the middle of that, no reply. I paid for the album at 20:21, and I didn't leave until 20:22. Those times all match the records. I didn't run straight back to campus as soon as I got the photos; before I left I even tucked the paper bag inside my jacket. I dragged my feet in that shop, and I really did buy that album.",
            "By the time I got back to school, there was already a crowd. Someone said I was the first person there, but I wasn't. The security guards and a few other students were right up front; when I got there I could only see the back of the crowd, my legs felt all wobbly, and I had no idea which way to go first. That line \"trim the edges a little more\" kept playing in my head. I've gone over it so many times, like if I could just erase that line from that day, everything after that would turn out different.",
            "But I don't even know what would've happened if I got back earlier. She never arranged to meet me at the corridor, I never got any message like that. We still have to find out exactly what went wrong with the facilities. But I can't stop thinking, what if I never asked the clerk to retrim those edges. I keep thinking about it over and over, until it feels like I actually saw that other version of events play out. But that version never happened.",
            "I stuck the receipt back in the notebook and saw the letters written on the back of the photo, and I suddenly didn't want to look at it anymore. I hid behind one tiny detail for so long, and when it was actually time to talk to her, I was still hiding. I'll put the photo away for now. I have to dig up the payment records later, just staring at that older receipt won't help anything. I haven't even opened my phone bill, and I closed the photo album first. As for Phil Chi, I don't know when she'll be ready to listen to all this, and I don't even know if I can say it out loud to her.",
            "Wait, I remember the clerk recommended a bunch of frames to me. I asked him which ones didn't collect dust easily. He pulled two out from under the counter to show me. I was already thinking about whether it would fit on her dorm desk, but I was also scared it'd be too obvious when I gave it to her. That part doesn't seem to relate to the timeline, but it proves what I was actually doing back then. I wasn't hanging around the shop waiting for an urgent message, I was overthinking how to give her that photo.",
            "I've been writing this page forever. The water next to me got cold, and I picked it up and realized I never took a sip. Writing up to here, I noticed that every two sentences I try to add a line saying I didn't mean to be late. But I chose to stay there longer, no one stopped me. The light was on, the checkout counter was right there, and I could've left any time. All the sounds I heard later, all the stuff other people told me, I wrote that down separately; I'm not mixing it with this page. The edges of the paper are all crumpled from me flipping it, I'm not gonna look at the photos again tonight."
          ],
          "clue": "c10",
          "recollectionAt": 8,
          "wordCount": 1043,
          "recallCaption": "Memories of that night",
          "diaryNotice": "I found the notes I made from that day at the photo shop, and I've gone back and flipped through them a few times later."
        },
        {
          "who": "shen",
          "title": "The fight by the staircase",
          "date": "Sept 19, 2024 Addendum",
          "weather": "Rainy",
          "text": [
            "September 19, writing down the part at the staircase. I've replayed it in my head so many times now that some lines feel like I rewrote them later, so I need to write it down before I forget which version is real. That day around 20:00, I ran into Phil Chi on the second floor of the Literature Building. She was holding a folder and first asked me if I told Kavin Zhou to stop pressuring her. I said yes. I didn't pretend I didn't do it. Her face went cold immediately.",
            "She asked {c11|why did you speak for me without asking}. She only asked me to check the form, not decide what version of what to tell Kavin Zhou. My face was burning, but I snapped back, asking her how, when she knew I liked him, she could still ask me to help pass the tickets and pick out photos. I get mad just reading that line now. But back then I didn't regret it. I felt like I was finally saying all that stuff I'd held in forever. She frowned, but I kept talking anyway.",
            "I did all that helping her pass tickets and take photos, and I felt miserable doing it. But every time she asked if it was okay, I said it was fine. If I acted like everything was alright, then turned around and blamed her for not noticing how I felt, that makes no sense. But I didn't care if it made sense back then; I just said whatever line I knew would shut her up. The hallway had echoes, and I heard my own voice was super loud, but I didn't stop.",
            "She said I couldn't use her words to push Kavin Zhou away, and I said she couldn't act like she didn't know everyone was walking on eggshells for her. Writing that line down again, I realize it's way harsher than I remembered. It was just the two of us standing on the staircase, neither of us willing to lower our voice. We fought, we were both mad, she didn't want to listen anymore, and I was being stubborn, refusing to back down first.",
            "We split up at 20:05. She walked toward the connecting corridor, and I went downstairs to the equipment room. I didn't block her way, there was no grabbing, and I didn't chase her. I remember that part super clearly. I didn't make it up later to explain myself. The camera strap was digging into my shoulder, and I kept switching it to the other side the whole walk over. My hand was still shaking when I got to the sign-in desk. The admin asked me to read out the equipment number, and I misread it once.",
            "The check-in was at 20:06, and I left at 20:22. The borrowing-and-returning record is there—two students from the campus journal also dropped by in between. We sorted out batteries and memory cards, talked through the reflector board, the camera positions for the next day, and who would be in charge of borrowing the spare light. The administrator even asked me to sign my name halfway through, and my handwriting came out a little crooked. I oddly remember all those trivial details clearly. The borrowing and returning log was spread on the counter, the administrator passed me the pen, and I put it back in the narrow gap after signing. I was definitely in the equipment room back then, and I did a whole bunch of odd jobs there too.",
            "When I later found out something bad had happened, the camera in my hand nearly slipped and fell. My first reaction was to rush outside, but for a split second I froze, too scared to move—afraid she would see me. I was terrified that she was hurt, but also scared that other people would ask what we had been arguing about just now. Those two thoughts popped up one after the other, and neither of them ever went away. Thinking about it still makes me feel sick to my stomach, like my genuine worry for her was tangled up with a tiny, selfish part of me that was only looking out for myself. I can't wash that part off no matter what I do.",
            "I did say those awful things, and I can't deny it now that it's brought up again. But after we split up, I went straight downstairs. I didn't follow after her. No amount of apologizing over and over can explain those two things clearly. Phil Chi doesn't want to talk to me right now, and I accept that; but if someone says I tailed her after we separated, that's a lie, and I won't stand for that. Let me get those timestamps straight first—we split at 20:05, I entered the equipment room at 20:06, and left at 20:22. I'm jotting these down in the page margin so I don't mix up the order of events next time I try to recall.",
            "When I got to the part about the folder in her hand, it hit me—there was clear tape along the edge of that folder, the one I patched up for her last semester. The clip had cracked, so the papers would fall apart and scatter the second you tugged at them. I wrapped a loop of tape around it for her, and even teased her about why she wouldn't just get a new one. She was holding that exact folder that day, but I had the nerve to yell at her to her face that she never thought about anyone else. Thinking about that tiny little object now hurts way worse than remembering what I shouted at her. She was holding it the whole time, but I never even noticed back then.",
            "We knew exactly what the other person hated hearing the most. She hated being accused of only letting other people take care of her, and I was terrified of being told that I didn't matter at all. So during the fight, we deliberately targeted those sore spots. I can barely keep writing this far in my memories, but if I stop, in a few days all I'll be able to say is that I had a bad attitude that day. That's the lamest, easiest line to throw out. It wasn't just a bad attitude. I have to remember every single cruel thing I said; I can't make her repeat it for me later."
          ],
          "clue": "c11",
          "recollectionAt": 8,
          "wordCount": 1088,
          "recallCaption": "Memories of That Night",
          "diaryNotice": "I found that page. I was furious back then, and jotted down a ton of harsh words."
        },
        {
          "who": "xu",
          "title": "Interrupted Audition",
          "date": "2024 / 09 / 16 · 20:19",
          "weather": "Thunderstorm",
          "text": [
            "I pieced together this section from September 16 later, using the audio recording as reference. I saved three separate backups, kept the original filenames, and marked down the timestamps first based on the device data and call logs. That night, we were doing an audition in the small rehearsal room on the first floor. The door wasn't fully latched, so the thunder and footsteps from outside got picked up on the track. Phil Chi was sitting on the old couch, said the chorus part sounded good, and then told me she didn't want to start dating me. I knew I should note the exact time, but that line was the first thing that got stuck in my head.",
            "She said it clearly, no excuses like \"I've been too busy lately\" or \"we can talk about it later\". She said she really wavered for a moment when we were working together, that it was rare to find someone who could understand all those pauses we left in our work; but being understood doesn't equal wanting to date someone, she had her own residency plans and a whole bunch of personal stuff to sort out. My first response was \"It's okay\". It came out so fast it sounded like I had rehearsed it beforehand. I even forced a small smile right after, scared the air would turn awkward. The words \"it's okay\" came out way too smoothly. She looked right at me, and I didn't even have a single other thing prepared to say next.",
            "I asked her if it was because of Kavin Zhou. She told me not to turn her life choices into some test between two guys. I got a little annoyed back then and wanted to say we'd been writing songs together for so long, how was it possible that I wasn't even qualified to be a part of that comparison. I didn't say it in the end; I knew it sounded childish. But I didn't buy what she said right away, and I have to write that down too. I nodded really fast, like nodding that quickly would prove I didn't care that much at all.",
            "At 20:17, she got an incoming call from an out-of-town landline number, said she couldn't hear clearly in here, and headed to the second-floor connecting corridor to take it. Before she walked out, she told me I didn't need to wait for her, as she still had to get ready for the gala after the call. The door clicked shut softly, leaving me all alone in the rehearsal room. The recording device was still on, since we were in the middle of laying down vocal references. I didn't wrap things up right away. I sat there replaying the words \"it's okay\" over and over in my head, and the more I thought about it, the more it felt like I was lying to her, and lying to myself too.",
            "At 20:19, right after {c12|the creak of old metal components} sounded in the file—no music, just the sound of a fastener or hinge that came loose after some part was strained—someone shouted from downstairs a few seconds later. There was no arguing in between, no sounds of chasing, and no other person's voice anywhere nearby. I had no idea what had happened at that moment. I grabbed the recording device and bolted outside, and there were already people in the hallway rushing towards the staircase.",
            "I was on the first floor at that time, and the people by the rehearsal room door as well as the device logs can confirm that timeline. I handed the original file over to the school later, but kept a separate marked excerpt with clear timestamps. The full recording has all the stuff we talked about for the lyrics, plus the private things she told me—we can't just dump that whole file into the group chat like it's a regular rehearsal clip. When I was digging for the backup, I heard us casually chattering about takeout in the opening part, and suddenly I didn't dare keep playing the file.",
            "But I have to admit an even more embarrassing truth. When people first asked me what we had been talking about right before, I said we were discussing the performance. We did talk about the show and our songs, so that statement wasn't a complete lie—but it completely erased the part where she turned me down. The person asking didn't press for more details, so I just kept going with that safe, easy answer. I didn't tamper with any of the technical evidence, but I edited my own verbal account. I even felt relieved when I handed in the audio recording, like just because the file was complete, my own statement was honest too. But that word \"performance\" kept bugging me the more I thought about it; it perfectly hid the part of the conversation I couldn't bring myself to talk about.",
            "I listened to that recording again just now. Right before the strange noise, you can hear the distant rain, the soft click of the door closing, and then me shifting the chair. No background music, no sound of me sprinting after her. I'm writing this so plainly because that's exactly how the facts went—there's no dramatic, exciting version here. My phone screen lit up for a second; it was the drummer texting asking if I was still coming along. I didn't reply. Back then I had no idea how badly she was hurt, and my hands were shaking so bad I fumbled and failed the unlock twice.",
            "While listening back to the earlier part of the recording, all I could picture was her winding up the headphone cord. When the cords get tangled, I usually just crumple the whole mess into a ball, but she'd gently untangle every knot and set the headphones down on the desk neatly. I was watching her the whole time, mentally rehearsing little jokes I could crack, making sure I could react to whatever she said. But when she spoke to me seriously, the only thing I could say was \"it's okay\". I barely even let myself feel sad, and I never properly responded to the part where she said she had wavered for me.",
            "The first time I forgot my lyrics on stage, I immediately told a joke. The audience laughed, and that awkward moment was over. I've always handled things that way ever since, cracking a smile whenever things get embarrassing. But when Phil Chi finished speaking, she was looking right at me, not waiting for me to crack a stupid joke. Looking back now, I don't think I even said \"give me a second to process this\"—I just rushed to tell her I was totally fine. But I wasn't fine; I was actually pretty hurt. The words coming out of my mouth didn't match what I was feeling at all, and even that smile I flashed felt like it didn't belong to me. I hit pause on the recording when I was listening back, and sat there for ages before I pressed play again."
          ],
          "clue": "c12",
          "recollectionAt": 8,
          "wordCount": 1194,
          "recallCaption": "Memories of That Night",
          "diaryNotice": "I found the notes I wrote back then, saved together with the audio recording."
        },
        {
          "who": "lin",
          "title": "The Unsent Letter",
          "date": "2024 / 09 / 16 · 18:40",
          "weather": "Shower Rain",
          "text": [
            "September 16, 18:40, shower rain, two hours before the gala. I hid in the unused editorial office on the second floor of the Literature Building, writing a letter. The desk lamp had a loose connection; it flickered every few minutes like it was annoyed at how slow I was writing. My opening line stayed the same: \"You still owe me a rain-free movie date\", and it was for Kavin Zhou. I was dead sure of the opening, but rewrote the second half of the letter over and over. Because I was trying to cram two different things into one letter, and those two things tangled together hurt like sharp thorns.",
            "On the first page, I wrote down those light, specific little moments: the blue umbrella, the polaroid photos, hot cocoa, movie tickets, and that trick he has—every mess he runs into gets handled so smoothly it looks like it never even happened. I wrote about him putting down his umbrella and running straight out into the rain, and how I saw him do it but didn't call him back. I smiled a little while writing that part, but the smile died fast. Those details made the letter sound way too much like a plea: \"Please keep taking care of me, please wait for me, please keep me in your usual spot.\" After writing that, I thought that's not what I really wanted to say at all, so I lightly crossed out the last two lines—you can still see what's written through the paper.",
            "The second page was all about the workshop I wanted to join. I moved the line \"I want to go out and try something new\" from the very end of the page to the front. If he only read the first page, he'd think this is just a regular love confession note. No, that's not right. I can't only let him see the part of me that wants to be loved—he has to see the part of me that wants to leave too. I wrote: \"{c9|If I leave for three months, would you still want to get to know the version of me that comes back?}\". This isn't asking him to promise to wait for me. I'm asking if he can accept that I'm not just some fixed object stuck in his life forever.",
            "I could hear the band doing sound checks outside the window; Caesar Huo sang the same line over and over so many times I started singing along in my head. I knew Caesar Huo probably had something he wanted to say to me, and I was a little nervous about running into him. But this letter wasn't for him. I never even wrote his name anywhere in it. Every time I wrote the word \"you\", the only person I was thinking about was Kavin Zhou. I mumbled the letter out loud once by accident, and immediately cringed at how cheesy it sounded—thank god there was nobody else in the editorial office.",
            "18:55, Caroline Xu came up to borrow spare batteries. She saw the letter paper and asked if I was writing to Caesar Huo. I froze for half a second, shut the paper closed, and said \"I'll tell you later\". That half-second of hesitation wasn't an admission—it was just that I wasn't ready to let anyone read the second page yet. She might have misunderstood, or maybe my sudden motion to close the paper stung her a little. We didn't say anything else to each other after that.",
            "After she walked out, I flipped the second page over to cover the first line, and zoned out for a while. It's not that I didn't want her to know, it's just that I'd just finished writing this, so I wasn't used to the idea of other people seeing it yet. Why didn't I just tell her straight up that the letter was for Kavin Zhou? Maybe my brain just didn't catch up fast enough. I kept thinking I'd explain everything slowly after the gala, but there were draft manuscripts piling up on my desk, and people were yelling downstairs for everyone to get to their positions—there wasn't a single thing I could sit down and finish peacefully.",
            "19:10, I folded the two pages of the letter over, didn't even put it in an envelope. I planned to wait until the gala ended, find a spot where it was just the two of us, and show him both pages. I didn't need him to answer right away, and I wasn't trying to make him stay with me. What I really wanted to ask him was: \"I like you, but I also want to go out and chase my own path. Can you still see me as a whole person, instead of some stupid either-or quiz question?\"",
            "19:10, I tucked the letter into my portfolio, but when I zipped the bag halfway up I reopened it, just to check if I had crumpled any of the words. People downstairs were hurrying everyone to get to their performance positions. I knew it was time to leave, but I still picked up my pen to add one last punctuation mark. There were two useless draft sheets left on the desk, one of them only had the opening line written down. I was gonna throw them away, but then I folded them up and brought them along too. The two official pages were almost as messy as the drafts; one word got rewritten twice to the point I could barely recognize my own handwriting. There wasn't enough time to copy it all over neatly, so I just folded them up and went.",
            "Looking back on that afternoon later, the first thing I ended up remembering wasn't the letter at all—it was that half-dead pothos plant on the editorial office windowsill. No one watered it over the summer break, so when we came back in September someone tied a wooden stick to it, and its crooked stem finally stood straight. I kept staring at it while I was writing the first page, thinking I was waiting for someone to hold me up like that; but when I got to the second page, I got stubborn, wanting to cross that thought out entirely. I didn't have any of this figured out that afternoon. I just foolishly hoped Kavin Zhou could read through that messy tangle of conflicting feelings for me. That's pretty lazy of me, I realize that now.",
            "I laid the two pages side by side. There were way more scribbles and cross-outs than I remembered, and one line on the second page got squashed right on the crease. The question mark at the end of the first page was fully blacked out, and there's a huge empty gap at the top of the second page. I didn't fix any of that; if I did, it wouldn't feel real anymore. This isn't some calm, carefully crafted statement. It's the messy scribble of a person panicking to say two different wishes out loud at the same time. I didn't rewrite it or make it neater today. I even left that blacked out question mark exactly how it was. When I tucked it back into my notebook, I carefully avoided the crease—the paper's already gotten pretty thin."
          ],
          "clue": "c9",
          "recollectionAt": 8,
          "wordCount": 1227,
          "recallCaption": "Memories of That Night",
          "diaryNotice": "I found the old notes I wrote around the time I penned that letter."
        },
        {
          "who": "zhou",
          "title": "Back of the Receipt",
          "date": "September 20, 2024 Addendum",
          "weather": "Cloudy",
          "text": [
            "September 20, cloudy. I dug out my e-bill. I sat on my bed this morning scrolling through every single entry one by one, and I almost clicked that receipt timestamped 20:07 again. That receipt only proves I was at the shop at that time. It can't tell anyone where I was at 20:19. There are more entries further down the bill list, but I never had the guts to click through to them. I knew all the records were on the exact same page, but I dragged my feet until today to finally make myself look.",
            "This is {c14|the payment record at 20:21}, the money I spent buying a photo album. The store clerk also said he remembers me hanging around the counter the whole time—trimming the photos, waiting for them to print, picking out an album, I didn't leave until about 20:22. I didn't step out to wander around and come back later. I wrote down the shop name and their contact number separately. I was worried he wouldn't remember me before I called, but when he said he recalled how long I took picking out the album, I just wanted to hang up the call as fast as I could.",
            "My hands were shaking when I exported the bill records. I know I didn't cause that accident, but I still didn't want to show any of this to Phil Chi. She'd find out that I wasn't in any hurry to meet her back then, that I was dragging my feet on purpose. I was scared to hear her say she was leaving, and I was scared she'd start talking about Caesar Huo. But worst of all, I was terrified she'd just reply with a cold \"oh\" after reading all this, not even bothering to ask why. Writing this far down, I realize I've always cared so much about what she thinks of me.",
            "People in the group chat are saying I was the first one to get there, that I held her and waited for the ambulance to arrive. When I saw that message, I typed out the words \"That's not true\" but never hit send. The words \"not true\" were still sitting in the input box, no other words followed, the cursor just blinking over and over. For a split second, I caught myself thinking—maybe it's fine if they all keep believing that. Like if people think I did something really important, all that slow, dawdling stuff I did earlier wouldn't matter anymore. I locked my phone, and I didn't quit that group chat.",
            "The truth is, when I got there, the security guard was already clearing the scene, and another classmate had already called emergency services. Caesar Huo came over from the first floor, and Caroline Xu showed up from the direction of the equipment room. I can't list out exactly who got there first, but I know for a fact I wasn't the first one. All I did was hand someone a jacket, that's it. Just because that small action actually happened doesn't make all the extra stuff the group made up later real.",
            "Every time I try to explain why I got there late, I just make a mess of it. One second I'm saying I wish I'd arrived earlier, the next second I'm in a rush to insist I wasn't anywhere near the scene. Those two sentences right next to each other sound weird even to my own ears. I can copy down every single timestamp from the bill one by one, but when I get to the part explaining why I dragged my feet for so long, I end up adding extra unnecessary excuses. I don't want to get all nervous and muddle everything together, making it sound like I'm admitting to everything, but also saying nothing at all.",
            "I finished typing out the correction for the group chat message. The very first line says I wasn't the first person to arrive, and asks everyone to stop spreading that version of the story. I wrote down what the security guard and other classmates did, and what exact time I left the shop. My cursor's hovering at the very end of the message, but I still haven't hit send. It's not that I don't know I should send it. I'm just thinking, once I post this, everyone's gonna ask why I didn't say any of this sooner. There's no nice, clean explanation for that—other than the fact that I saw all the rumors earlier, and chose not to correct them.",
            "The photo's still tucked in my book, and the name on the back was never finished. It's not the right time to give that to Phil Chi now; she's still recovering, I can't dump a bunch of stuff on her and make her reply to me. I took clear separate photos of the receipt and the bill first, I'm not naming the files some vague, confusing name this time. After I dropped both images into a new folder, I realized I'd rearranged their order so many times. Now whenever I hear someone say \"it's nothing\", I don't even know how to respond.",
            "The store clerk was super polite when he called me back. He even asked if I liked the photos and if the album was the right size. I froze for a second, then said they were great. He has no idea that this whole thing has been keeping me up at night for days—for him, I was just another student who took way too long picking out stuff. I asked him to confirm what he remembered, he said he'd be happy to, and even offered to reissue a copy of the receipt if I lost mine. I said I didn't lose it, I've kept it this whole time.",
            "When I was little, my dad told me to keep the receipts for every book I bought. I used to think it was annoying, but I ended up sticking to that habit. But this time, I only wanted to hold onto the one receipt that was easiest to explain. I didn't even want to look at the other bill records. Now all of them are spread out on my desk, nothing dramatic's even happened. My roommate came in and asked if I wanted a bowl of noodles. I said yes, told him not to put too much chili in it. Before the noodles get back, I'm gonna send that correction message to the group. I'll get this one thing done first, I won't put it off for later again."
          ],
          "clue": "c14",
          "recollectionAt": 8,
          "wordCount": 1104,
          "recallCaption": "Memories of That Night"
        },
        {
          "who": "shen",
          "title": "The Deleted Line",
          "date": "September 19, 2024 Revised",
          "weather": "Overcast",
          "text": [
            "September 19, revised draft. The edit history for that document on my computer is still there; I crossed out a whole line earlier: {c15|“I wish it was only me and Kavin Zhou tonight.”}. Once you close the revision tracking window, that line disappears, and I almost convinced myself I never wrote it. When I reopened the file, my heart started racing. My mouse hovered over the delete button for ages, but I never clicked it. It's just a single line, but it sticks out so badly.",
            "When I wrote that line, I was only thinking about the gala—wanting one less ticket to hand out, not wanting him to ask me where Phil Chi was, just wanting a little time where he was talking only to me. I wasn't making some kind of actual plan, and I never wanted anything bad to happen to her. But I did selfishly hope that she wouldn't pop up right in the middle of me and Kavin Zhou that night. I can't sugarcoat it and say I just wanted some attention for myself, like she was never part of that thought at all.",
            "We split up at 20:05 that day. I went downstairs to the equipment room, checked in at 20:06, and didn't come out until 20:22. Around 20:12 in the middle of that, two campus journal students came to pick up the reflector board, and we chatted a little about the interview the next day. The administrator remembers me being there, and the check-in record is all logged. While I was sorting out the batteries, I kept pressing the battery level indicator, annoyed that one of them was charging way too slow. I've always remembered those timestamps clearly, but that awful line I wrote kept pushing all those details out of my head.",
            "I kept replaying it over in my head, trying to figure out exactly what I wished for when I wrote that line. I wanted her to show up a little later, or not hang out with us that day—something like that. I know I'm nitpicking at words a little, but that's the honest thought I remember having. I can't act all fake honest and claim I wanted some terrible thing to happen, when that's never what I had in mind. That's not being truthful at all.",
            "When I heard what happened, that exact line I wrote was the first thing that popped into my head. I know writing a dumb line of text can't make a real-life accident happen, but I was absolutely terrified for a second there. The chair in the equipment room was so hard. I remember standing up and sitting back down over and over, and someone called my name but I had to ask them to repeat what they said. For those few seconds I couldn't think straight; all I could do was keep replaying what I'd just written.",
            "Some people twisted that line into something way worse. When I saw what they were saying, I pulled up the original line to compare, and I even checked the punctuation mark. I wanted to argue back, but I knew the second I opened my mouth they'd keep pressing me to say how much I hated Phil Chi. I crossed that line out from the main text, but kept the revision history intact. I wasn't trying to leave some sly hint; I just had no idea how to write this part without making it look like I was lying and pretending I was completely innocent.",
            "After Phil Chi woke up, the thing I feared most was her asking me why. If she yelled at me I could probably fire back, but if she asked me calmly and gently, I'd probably freeze up and have nothing to say. Why was I such good friends with her, but still selfishly hoped she'd disappear for a little while? The answer's not that hard to guess, but it's so hard to say it out loud. My kindness towards her wasn't fake, and that jealous, petty little thought I had that night wasn't fake either. I still haven't found a way to say that without sounding totally messed up.",
            "I already found the equipment check-in records, and I need to explain the full story of that fight too. But every time I think about that private line getting screenshotted and passed around, I get panicky. My computer was turned on, and my roommate walked behind me—I immediately switched back to my desktop, but she was just going to grab her water bottle. After she left, I reopened the document window. That line was still sitting right there, so I shrunk the font size down and immediately felt stupid for doing that.",
            "Back in high school I covered so many embarrassing lines in my diary with adhesive tape. When I was cleaning the bookshelf after graduation, the tape had yellowed, and some of the words started showing through the sticky residue. I laughed back then at how childish I was. Now that it's all on my computer, my hand still hovers over the delete key. Turns out I'm still the same person; it's just that covering up a line now doesn't require me to cut up strips of tape with scissors. My old diary's still at home, and I wonder if my mom flipped through it when she was moving my books.",
            "I typed out a whole long message to Phil Chi a little while ago, saying how scared I was, how guilty I feel, how I can't sleep—but before I hit send I deleted every word, and only asked her if she's feeling any better. She's supposed to be resting and recovering right now, not stuck fixing my stupid emotional knots. I copied that unsent long message back into my notebook, pasted it right after that crossed-out line. It looks even messier now, but I'm not deleting it tonight. I still need to say that apology to her properly in person later, when she's willing to listen—not dump it on her while she's still too tired to argue back."
          ],
          "clue": "c15",
          "recollectionAt": 8,
          "wordCount": 1024,
          "recallCaption": "Memories of That Night"
        },
        {
          "who": "xu",
          "title": "Beyond the Excerpt",
          "date": "2024 / 09 / 20",
          "weather": "Overcast",
          "text": [
            "September 20, overcast. The strange noises and shouts in the recording excerpt are kept; no key sounds were cut out. But earlier when I was asked what we talked about before the audition, I answered {c16|\"the performance\"}, and that line wasn't the full truth. We talked about the song, and also about her and me. I chose to leave the latter part out; I didn't forget about it. Today I opened our chat, saw that exact line still there, and suddenly I really didn't want to look at my own reply anymore. No one else pushed the question further, so I just went along and didn't bring it up.",
            "We did talk about the performance, the lyrics, that half-beat pause. But after she left for the connecting hallway, I was still sitting there. What actually nailed me to the spot was that she had just turned me down. If I'd told the full truth back then, that she didn't want to start a romantic relationship, and right after that she took the workshop phone call, the timeline would line up perfectly, no empty gap left for people to guess there was a fight. I knew that difference, but I picked the safer version to say. Writing it down now, there's nothing left to argue for myself.",
            "Also, don't tell him that line yet. The rumor got all twisted anyway. What she said was her resident project materials weren't fully submitted yet, and we shouldn't let anyone else pass the message to Kavin Zhou for now. She hasn't decided when she's going to tell him herself. Right before that line, she also said, \"I haven't decided if I should tell him right now.\" It's not eloping together, not making some ambiguous secret with me. It's just a choice she hasn't finished making yet. Somehow as the rumor spread, that most normal part vanished, leaving only those few words: don't tell him yet.",
            "I didn't correct anyone, because being mistaken for the person in on the secret felt a little good. That little thrill was so tiny I could pretend it wasn't there, but it definitely was. She just rejected me, and then in the gossip I ended up being the one who knew all the inside stuff. I even opened that message a few times, knowing full well everyone got the wrong idea, but I didn't correct them right away. Writing it down now, I realize that little bit of smugness lasted way longer than I was willing to admit to myself back then.",
            "The original file and the device timestamps are all there, and the person outside the rehearsal room can also confirm I was on the first floor. I sorted those out super quick, but when I got to the part where she said she didn't want to date me, I stopped. I went to rename the file first, then messed with the export settings, and after all that messing around I still had to write that line. The folder got more and more organized, but the statement draft was still empty. I stared at those lines. I knew I wasn't too busy, and I wasn't stuck for more accurate words either.",
            "The band group chat is fighting today about whether to release the full uncut recording. Some people say that'll have the biggest impact. I immediately said no. It has her unreleased work and private conversations in it. Releasing the whole thing isn't chasing the truth; it's just another kind of gawking. The people who need to verify the facts can listen to the original files, and the parts that need authorization get checked with her. Just because I'm already embarrassed, that doesn't mean I get to drag her business out for everyone to gawk at. That doesn't contradict me admitting my account was incomplete.",
            "I listened to those few seconds where she turned me down again. She was so respectful, said she wavered a little when we were working together, but she didn't want to mistake mutual understanding for romance. A more decent version of me would have listened properly, not immediately brushed it off with \"it's fine\". She also said this wasn't a choice between me and Kavin Zhou. I nodded along, but in my head I still put myself in the running for her. She made everything clear, I just didn't catch it, and I can't pin that on her.",
            "Her name still stays on the program as lyricist after everything. What she wrote is what she wrote; those things don't get erased just because of all this mess. I also have to confirm with the person in charge of the program list again that we can't take her name out just because of the rumors. I'm gonna sort out the version history tomorrow, note exactly which lines she rewrote, and which rehearsal we settled on which pause. That'll work better than yelling in the group chat about how talented she is.",
            "I scrolled back through my files, and the first rehearsal recording is still there. There's a huge chunk of us arguing about whether to get spicy on the takeout. It's zero artistic value, and I never deleted it. Listening to it a while today, I finally admitted I kept it because it's time we spent together, not because it could prove she had a crush on me. Mistaking a memento for evidence was the stupid mistake I almost made. We argued about that takeout for ages, you can even hear someone yawning on the recording, and I ended up listening all the way through it.",
            "She used to complain my filenames were messy, full of stuff like \"v2 final\", \"v2 definitely final\". She turned on track changes for the lyric document, said that's the only way you can tell which lines you edited. I thought that was such a hassle. This time I marked out all the earlier and later versions myself; I won't let a single performance overwrite everything. After I finished the statement, I read it all the way through, and deleted the parts where I tried too hard to make excuses for myself. The final version isn't long at all, and it's way uglier than the first drafts. Save it like this for now; I can't use \"the file's hard to find\" as an excuse anymore."
          ],
          "clue": "c16",
          "recollectionAt": 8,
          "wordCount": 1056,
          "recallCaption": "The memories of that night"
        }
      ]
    },
    {
      "title": "Scroll the timeline back",
      "subtitle": "Now that the outline of what happened that day is clear, go back to the time when all these relationships started shifting",
      "date": "09.12 — 09.15",
      "objective": "Chase back from the leftover questions of that night: why the letter never got sent, why the photo never got picked up, why the passed-on message got twisted. Talk through these old stories first, then unlock the diaries from September 12 to 15 page by page.",
      "entries": [
        {
          "who": "lin",
          "title": "He left his umbrella by the entrance",
          "date": "2024 / 09 / 12",
          "weather": "Light rain",
          "text": [
            "September 12, rainy. It started drizzling at 3:30, and I checked the weather app over and over on my phone, that's why I remember. Actually you can walk back through the library's covered connecting hallway, which adds only five minutes to the trip. I didn't take that route. I just stood at the entrance of the Literature Building, pretending to wait out the rain. Really I was just waiting for Kavin Zhou to get out of class. I already knew exactly what time his class ended, but I still pretended to casually glance at my phone, the screen lit up again and again.",
            "We've known each other for way too long. Long enough that saying I \"waited for him\" sounds weird even to me. Freshman year club recruitment, the Literature Club and Photography Club shared the same table. I showed up late, he pushed the only dry chair to me, and sat on a cardboard box himself. Later he helped me shoot event photos, helped me format photos for the school publication, and everything could be explained as just friends. But do friends count down the minutes till their crush gets out of class while standing in the rain? Ugh, if I hadn't run into him that day, I probably would've been disappointed anyway. I wasted all my free time that afternoon just waiting there.",
            "He ran over from the Third Teaching Building, didn't even wear his hood, his hair was all damp. He put {c1|that blue umbrella} down by my feet, said he had things to do, and had to go. I asked him \"What about you?\" and he just waved, said his place was super close. He didn't dare look at me for long, really, only a second or two. I held the umbrella handle, and my heart was beating so embarrassingly fast.",
            "When I got to the corner, I saw him running through the rain with his books tucked to his chest, his whole back soaked dark. He didn't have a second umbrella at all. The handle was still wet, so I wiped it with my sleeve, then realized my fingers were wet too. I was stupidly happy right then. Happy, and then immediately scared — how could I be this ecstatic over one single umbrella? I wanted to ask him why he only had one, why he brought it to me, why he didn't walk with me. I didn't ask a single one of those questions.",
            "Down by the dorm entrance, Caroline Xu was taking photos of the raindrops on the awning. She saw the umbrella and smiled, asked if Kavin Zhou gave it to me. I said he was just passing by. She didn't push that, and pulled up her camera playback for me to see: one string of raindrops hanging off the edge, about to fall but not quite. She said the hardest moment to catch is that exact point; you know they're gonna drop, but once they do, you realize the hanging moment was the best part. I didn't say anything back. Sometimes she sees way too much, and I never know how to reply to that.",
            "That night I was writing the personal statement for the residency program, and deleted the opening three times. The prompt was \"what do you hope to confirm after leaving your familiar surroundings\". I wrote, I want to confirm if I can finish a full project independently under my own byline, with no one else's help. After I finished writing I looked up toward the balcony, thought of that blue umbrella, thought of his back as he ran off through the rain. Liking someone, and wanting to go off on my own — why do those two things feel like two sheets of paper I can't lay out on the same table at the same time, for me?",
            "I almost typed \"let's walk together next time\", but in the end I only sent \"thanks\". He replied right away: don't get soaked. Three words, I read over and over, even scrolled up our old chats to see if he used to say that. I scrolled all the way back to last month, then realized I was being ridiculous, flipped the phone face down, then picked it up again anyway. Back at the dorm I propped the umbrella open on the balcony, and every time I walked past I couldn't help glancing at it. My roommate asked whose it was, I said Kavin Zhou's, said it super fast, like if I rushed the name nothing about it would feel off.",
            "I set an alarm before I slept, ten minutes earlier than usual, so I could run into him when I returned the umbrella the next day. But then I worried it'd look too obvious, fumbled around in the blanket for a good excuse, and figured I could say I was going out to get breakfast. The umbrella wasn't dry yet, drips kept falling from the balcony. I didn't text him again, scared he'd ask why I was still awake. Even setting an early alarm felt like I had to overplan it, and half my homework page was still blank. If I really run into him tomorrow, I'll probably only manage a \"good morning\" again.",
            "I just scrolled my contacts and stopped on his name; I already know his number by heart, but still clicked open his contact note. Under his name I still have three words: brought tape. Recruitment day I wore new shoes that rubbed blisters, and I was sitting by the booth and didn't want to stand up. He didn't ask if my feet hurt, just split the sign-up sheets in half, said \"you can sort them sitting down\". Back then I didn't have a crush on him, it didn't feel like anything. Now thinking about it, I'm straining to remember what color the tape was, and I totally forgot how many people we signed up that day.",
            "I dug out the group photo from that year too, you can see he carried chairs for other people too. I stared at it for ages, felt a little twinge of acid in my chest, then decided the photo was fine. It wouldn't play along with me, wouldn't twist a guy who's nice to everyone into someone who's only special to me. I still don't have the guts to ask him. I didn't edit the note, deleted the words \"brought tape\" then typed them back in, like if I leave them there, those days weren't all that long ago. Turns out even back then, I was hoarding all these totally useless little things."
          ],
          "clue": "c1",
          "recollectionAt": 8,
          "wordCount": 1103,
          "recallCaption": "Old Pages of September",
          "diaryNotice": "September 12, right here. Back then I only dared write all this down in my notebook."
        },
        {
          "who": "zhou",
          "title": "Outside the Viewfinder",
          "date": "2024 / 09 / 13",
          "weather": "Overcast",
          "text": [
            "September 13. I stayed in the darkroom till the cafeteria was about to close. The batch I was developing were shots from the Literature Club sharing event, and I made an extra print of Phil Chi looking down at her manuscript. The photo paper was clipped to the drying line; all the others next to it were event photos I had to submit, only this one didn't need to be turned in. I even hung it further back on purpose. When my roommate came to get her keys, I stepped over to block it, then immediately thought that was so stupid. He's not even looking over there.",
            "I originally wrote Phil Chi's name on the back of the photo, but after writing it I thought it was too obvious, wiped it off, leaving only a {c2|C}. One letter looks like a catalog number, no explanation needed. But I knew full well who that was for. Back then I came up with a bunch of cover stories, even thought up a few English names just in case someone asked. No one asked. I fussed over it so much I rubbed the paper fuzzy. The front of the photo is still fine, she won't notice.",
            "We met on recruitment day, and only got close later when we were laying out the school publication. Once the printer broke, and she squatted on the hallway floor arranging a stack of pages right after she finished stacking them all neatly, then a passerby knocked the whole pile over. I thought she'd get mad, but she looked up first and said it's okay, then started picking them up. Halfway through she suddenly cursed at the printer. I held in a laugh and went to borrow tape. After she complained she squatted back down to sort, muttering quietly to herself. Compared to how she looks holding a manuscript at events, that little moment is the one I remember most.",
            "She handed me her half-drunk hot Americano and asked me to check if it had cooled down. That kind of thing happened a few times, and I overthink it every single time. Sometimes she just asks me to grab something else for her, and I tell myself maybe it's just convenient. I can tell every single event photo apart, but I can't tell what these little gestures mean. Eventually I stopped overthinking it. I'm happy when she comes to find me, and when she doesn't, I find an excuse to ask her something.",
            "Caroline Xu came to pick up the school publication photos this afternoon and asked which finish was better, matte or glossy. I said either is fine. She didn't leave, and said hanging out in the darkroom is nice because you don't have to make small talk nonstop. My tweezer paused for a second. I got what she meant. I'm not that oblivious; I just had no clue how to respond, so I started rambling that the school publication would be ready tomorrow, and that a few shots needed redeveloping. She just wanted me to say something, anything, but I just repeated the delivery time for tomorrow again.",
            "She said I always dodge hard questions by talking about work, and said it with a laugh. I laughed too and pretended not to get it. I don't know how much that hurt her, but I noticed that after she left with the photos, she didn't send her usual long list of edit suggestions. The chat was totally quiet all night. I opened the chat a couple times, and in the end I didn't text anything. I was scared if I said anything, she'd bring up what she said earlier.",
            "I texted Phil Chi tonight to ask if she needed help taking photos at the next Literature Club event. She took ages to reply and said no, she'd arrange it herself. I asked again if the time was still unconfirmed, and she replied a single \"yeah\". I stared at that word for so long. My charging cable was plugged in, my phone hit 80% battery, and I was still staring at that one word; I memorized the date right above it too. I know she was probably just busy, but I couldn't get that thought through my head.",
            "Later I clipped the photo in a book, and I didn't read the book. My roommate called me for dinner, I said wait a minute, and by the time I got to the cafeteria only the last window was open. I bought a gross fried rice, sat down then realized I left my phone back in the darkroom. That second I didn't even panic; I finished my food first then went back for it. There were no new notifications on the screen. I threw away the takeout box, then pulled the photo out of the book and looked at it again.",
            "Sorting old memory cards, I found a blurry rejected shot she took of me. The thumbnail is all smudged, but I recognized it instantly. I'm at the cafeteria prying open chopsticks, my face is out of focus, and the price board on the wall behind me is crystal clear. She was gonna delete it, but I said keep it so I can analyze why it blurred. There's nothing to analyze, her hand shook. I've swapped out my memory cards so many times since then, but I copied that photo over every single time. She probably forgot that shot even exists, but I still remember exactly what I was eating that day.",
            "Next to it is the school publication folder Caroline Xu organized; all the specs, uses, and deadlines are neatly written down. I texted her \"received\" so many times, and barely ever said \"thanks for the hard work\". I overthink a blurry photo for ages, but when Caroline Xu sorted out all the files and marked every deadline clearly, I just took it for granted. She didn't have to do that for me. Those three words aren't hard to type, but when I opened the chat box, I got scared she'd pick back up on that conversation from that afternoon. There's nothing left in the files to sort, but I'm still clicking every single one open."
          ],
          "clue": "c2",
          "recollectionAt": 8,
          "wordCount": 1037,
          "recallCaption": "Old Pages of September",
          "diaryNotice": "Found the note from that day in the darkroom, the C mark is right there."
        },
        {
          "who": "shen",
          "title": "The Same Hot Cocoa",
          "date": "2024 / 09 / 13",
          "weather": "Cloudy",
          "text": [
            "September 13. I took a detour today. Normally going to the equipment room is faster via the east gate, but I ran into Kavin Zhou who said he was buying hot cocoa, so I said I was heading that way too. That was a total lie; the equipment room is in the opposite direction, and I didn't even glance that way when we hit the fork in the road. The whole walk I was making small talk, bringing up the school publication photos and saying the camera lens looked dusty again. He replied super earnestly. I felt so happy for a second, and thought the day was going great, at least I wouldn't have to make up an excuse to text him.",
            "The store window was foggy, I stood by the door, glancing every time someone walked in. I was scared Phil Chi would show up. She never said she was coming, but I was still nervous. Kavin Zhou felt the side of the cups and handed me the one that was the perfect temperature. I took it and acted totally normal. Right then I was thinking, at least this one is for me. I kind of want to delete this line. It's obvious he just handed it to me casually, but I held it the whole walk back, and didn't even want to crease the little indent on the paper sleeve.",
            "I never told Phil Chi out loud I have a crush on Kavin Zhou, but she definitely knows. We've been roommates forever, there's no way she hasn't noticed. She once said, \"The worst part is when someone is naturally nice to you, you never know if you're overthinking it.\" Back then I teased her, and said even the Literature Club chats sound like poetry. Now I wish I could take that line back. Turns out when it's me, I'm just as much of a mess.",
            "Kavin Zhou asked the cashier {c3|if the other cup was made without whipped cream}, then asked for an extra paper bag, saying the drinks won't get cold on the walk back to campus. I asked him how he remembered that detail. He said Phil Chi doesn't eat whipped cream, and her stomach is sensitive. Only after that did he glance at me, and added \"don't you two live in the same dorm?\" I laughed, and said yeah. I had no clue what other face I could've made right then, and the corner of my mouth went stiff for a second.",
            "I know all those things too: Phil Chi hates hot drinks, doesn't let people read over her shoulder when she's writing drafts, always spreads out the umbrella ribs to dry it properly. But just because I know all those things, doesn't mean he'll look at me more. I still have to follow along when he talks about her, act like all three of us are close friends, and no one's feeling left out. I held my cup so tight, I didn't want him to notice I barely took a sip. The temperature was totally fine; it wasn't even too hot.",
            "On the way back he asked what she's been busy with lately, said she skipped the Photography Club regular meeting. I said she's always glued to her laptop, so he'd have to ask her for details. I heard myself say that, and felt a little proud: I didn't snoop for him this time. But when we got to the fork, he said he's heading that way, and I started panicking again, wondering if my reply was too cold. If I won't help him ask about Phil Chi, did I just run out of things to say to him?",
            "That night Phil Chi texted to ask which shop the hot cocoa was from. I sent her the photo, two cups set side by side, one no whipped cream. She asked if Kavin Zhou bought one too, and I said yeah. She went right back to editing her materials, didn't ask anything else. But I stood there holding my phone for ages, no clue what I was even waiting for. Waiting for her to get jealous? Or waiting for her to say she doesn't like him? She didn't say any of that, and I felt even worse.",
            "I named that photo \"The Same Hot Cocoa\" when I saved it, and right after typing I thought that was so cringey. They're not the same, they're two separate cups. But I didn't change the name, like I'm admitting the photo didn't turn out like I hoped, and I still didn't want to delete it. That cup was sweet all the way to the last sip, so I poured a little water in it to rinse it. Threw the paper cup away, kept the photo. Never posted it to my socials, scared he'd see it, and scared he wouldn't care when he did.",
            "Woke up at midnight to wash the cup, the faucet ran for ages, and I suddenly remembered last year when the dorm water got shut off. Phil Chi came back with a basin of water, her sleeves soaked all the way up, and gave me half of her hot water first. I was rushing to finish an interview piece, super cranky, and she didn't even try to cheer me up, just left an orange candy on my desk. I still remember the candy wrapper was under my keyboard; when I found it later it was already flattened. All the nice things she did for me when no one was watching, not even Kavin Zhou. I can't act like none of that ever happened.",
            "Thinking about all those nice things she did for me made me even more confused. That no-whipped-cream cup popped back into my head. It still hurt, and all those good memories didn't make the ache any lighter. After moping I felt stupid for being petty. Writing photo captions for the school publication is easy, just the shop name, the price, done in a few words. But in this notebook, I'm writing down even the tiny detail of him feeling the cup's temperature. Phil Chi rolled over in her bed, so I quickly dimmed my screen. She was just sleeping uncomfortably, she wasn't looking at me. But I still felt guilty; I don't know how to talk to her about this without it sounding like I'm asking her to hand him over to me."
          ],
          "clue": "c3",
          "recollectionAt": 8,
          "wordCount": 1071,
          "recallCaption": "Old Pages of September",
          "diaryNotice": "This is the page, the day we bought hot cocoa."
        },
        {
          "who": "xu",
          "title": "The Second Ticket",
          "date": "2024 / 09 / 14",
          "weather": "Sunny",
          "text": [
            "September 14. I didn't leave after rehearsal, sat down on the basement floor of the activity room. That old AC unit kept blowing paper around, the edge of Phil Chi's sheet music kept lifting up, she pressed it down with her water bottle, and left a little circular water ring on the page. When the tickets came out, she smiled way more obviously than usual when she realized we actually got to perform at the school anniversary gala. My hand was totally steady when I handed her the second ticket, but I was faking it.",
            "I wanted to tell her: \"This one was only for you.\" I already had the words at my lips. She took it and first checked the seat number, then looked up and asked if {c4|she could hold onto the extra one since Kavin Zhou wanted to come along}. Really, she asked so naturally, not testing me, not even glancing at my face for a reaction. That casualness is way worse than a rejection, at least a rejection leaves you a little room to struggle. I immediately said sure, even added \"I'll save you guys good seats later\".",
            "I remembered last year's song submission drive, she was looking for backing tracks for a poetry recital, tiny budget, super strict requirements, the music couldn't overpower the speaker's voice. I thought that was cool. First run through, she changed \"the wind blows through the hallway\" to \"the wind stops in the hallway\", said the first one sounds like a cheap drama soundtrack, the second one feels like something you're holding back from saying. I deliberately pulled back on the chords right then, and we both looked up at the same second. That exact moment stuck with me for ages.",
            "After that we wrote three full songs together. She can argue over one single word with me all night, even make the breath marks match the exact feeling of the line. Over that little pause right before the chorus, we fought for half an hour. I said the audience won't even notice it, she said even if they can't name it, they'll feel it. She said it so sincerely, I even sang that line twice extra just to try to hear the difference she was talking about. I fell for that way of thinking hook line and sinker; I thought if we could argue over one half beat, I was already super close to knowing every part of her.",
            "She gets the melodies I write, and she always edits other people's drafts really carefully. I knew all that back then, I just never let myself follow that train of thought. After I gave her the ticket, I even walked her through the seat angle, telling her that the stage was totally clear from there. She listened so intently, and as I rambled on, I found myself wondering: when Kavin Zhou shows up, will he end up sitting right next to her? I kind of regretted saying yes so fast, but I couldn't very well suddenly tell her I didn't have the ticket anymore. By the end, I'd even walked her through which exit would be most convenient. She never asked about any of that, I just... didn't want the conversation to end that quickly.",
            "Outside the equipment room, Caroline Xu was waiting for me to return the microphone. She asked if I could get Kavin Zhou to help her take backstage photos for her on the night of the gala. I didn't pretend to miss what she meant. The two of us stood at the end of the hallway, both carrying our stuff, each lost in our own thoughts. I said okay, but asked her to leave me some time after the show, because I had something to say. She asked me what if Phil Chi already has someone she likes in her heart. I didn't answer, and went to sign the microphone back in.",
            "While I was filling out the form, I was still mentally counting the time: the show ends, pack up the gear, then find her. Caroline Xu listed a few spots for the backstage photos, and I memorized all of them. Nobody had ever asked if Phil Chi would be willing to stay a little later, but I was already worrying if ten minutes would be enough to say everything I needed to. When I got back and saw the times scribbled on the back of the sheet music, I tried to erase them, but they wouldn't come off completely. Leave it for now. I still need to practice before the performance; I can't keep my bandmates waiting.",
            "That night, I tucked the extra ticket into my lyric book, and the edge of the paper pressed down right on a breath mark. I tried to write what I wanted to say on the back of it, but I stopped after two lines, scared that Phil Chi would flip through it and see the note the second she picked up the ticket. So I found a separate piece of paper, wrote it out, folded it up, and decided I definitely wouldn't pull it out on stage. There'd be so many people in the audience—if she said no, she'd have to say it in front of everyone. I thought through that scenario today, and decided I really shouldn't put her through that hassle.",
            "When I tidied up the sheet music, I saw that pen again, and remembered the night we locked up the room. I'd bitten a little mark into the pen cap, and I felt it as I picked it up. The security guard was rushing us to finish up, so she borrowed my pen to write her revision notes, and when she gave it back the next day, she'd replaced the ink cartridge with a new one. I brought it up to the drummer, and he said she's always been that meticulous. I said yeah out loud, but as soon as he wasn't looking, I put the pen away in a box I barely ever used. There used to only be extra picks in that box, and I even specially cleared a spot just for the pen. Later, I thought about taking it out to use a few times, but every single time I ended up grabbing a different pen.",
            "That ticket was hard to look at, too, because it poked a hole in something I'd been clinging to. I thought I wouldn't have to say it outright—that even just the little unspoken understanding in our songs would let her hear what I meant. She didn't misread anything. I wrote two meanings in every single line, and stupidly hoped she'd only pick out the one I wanted her to. Now I took the pen out of the box and clipped it back to the sheet music. A pen's supposed to be used to write things, not treated like some sacred relic. If I really love a good song, I should at least nail that pause tomorrow, perfectly."
          ],
          "clue": "c4",
          "recollectionAt": 8,
          "wordCount": 1174,
          "recallCaption": "The Old September Page",
          "diaryNotice": "Found the page where the ticket was tucked. Looking back, I definitely overthought everything."
        },
        {
          "who": "lin",
          "title": "Shortlist",
          "date": "2024 / 09 / 15",
          "weather": "Sunny",
          "text": [
            "September 15, sunny. {c5|My application materials for the residency shortlist are finally complete}, my palms were totally sweaty the second I clicked upload. Three months, out of town, a writing workshop, a small coastal city. Not running off with someone, not hiding from someone. Caesar Huo forwarded the posting to the group chat, and all he wrote was \"This seems like something you'd apply for.\" The writing sample, the personal statement, the recommendation letter—all of them I rewrote over and over by myself.",
            "The results still have to go through blind review, so I might not even get in. But after I submitted it, I couldn't close my email, I refreshed it every few minutes even though I knew there was no way they'd reply that fast. The confirmation email already came in, but I still couldn't rest easy. The files were already uploaded, but I was scared I'd attached the wrong thing, so I downloaded everything and re-opened it to double check. I named the zip file something super plain; I didn't dare label it \"final version\"—I already had three other files named that exact thing before it.",
            "When I first started freshman year, I always let the word \"needed\" push me around. No emcee for the event? I'll do it. Nobody knows how to do the layout? I'll learn it. A friend's busy? I'll cover their shift. Kavin Zhou would always pop up right in those moments—fixing my spreadsheets, bringing me food, holding an umbrella for me. Being taken care of felt warm, but after a while I started overthinking: does he like me, or the version of me that's always mature, never causes trouble? This residency feels like a window I want to push open, to see if I can stand steady all on my own.",
            "I showed my application materials to Caroline Xu, and asked her to help me check if I'd missed anything. She looked through it super carefully, pointed out that the reference's email address was formatted wrong, then asked me—are you really leaving for three whole months? I said it's only the shortlist. She paused for a second, then said it'd be good even if I got selected. I have no idea what she was thinking about in that second, probably Kavin Zhou, probably our dorm where we always leave notes for each other on our desks. I never asked.",
            "I didn't tell Kavin Zhou. At first the reasons felt totally solid: the results aren't out yet, I don't want to drag everyone else into worrying; my work hasn't been published yet, I don't want to go blabbing about it everywhere; he's busy cranking out his design model, so I shouldn't distract him. Writing this down now, I have to admit there's another, more embarrassing reason—I wanted to see if he'd notice on his own, if he'd take the initiative to ask what I've been up to lately. I treated the silence like a test. That's such a twisted way to think: I hate it when other people make me play guessing games, but here I am making up a test for him.",
            "I had so many chances to tell him that afternoon. When Kavin Zhou asked what I wanted for dinner, I could've easily gone with it, said that I'd finished my application materials and wanted to get something nice to eat. But I just kept waiting, waiting for him to figure it out first. But he can't see my email, obviously. I waited forever and he never asked, so I ended up sulking about it to myself. I screenshotted that dinner question of his, but later I realized I didn't even know why I did that, so I deleted it. We ate dinner on time anyway, and I left half my greens untouched.",
            "When I passed the rehearsal room at dusk, they were testing out their new song. There's that half-beat pause right before the chorus, and I could tell exactly where Caesar Huo stopped just by listening to their breathing. I'm so grateful for that kind of unspoken understanding you get when writing songs together, but it never made me want to hand my whole future over to someone. The more my work gets understood, the more I want to find out: without all that understanding, can I still write a whole, complete sentence?",
            "When the submission success email popped up, my first reaction was to take a screenshot, but then I froze on the share menu. Caroline Xu already saw my materials, my advisor knows, and only Kavin Zhou still doesn't. I couldn't think of a single line that felt right, so I ended up not sending it to anyone. That night, he texted to ask if I'd eaten, and I almost blurted it out—until I only replied that I already had. The screenshot stayed in my photo album, tucked next to a blurry photo of a homework assignment notification I took that day. I had to scroll for ages to find it later.",
            "The umbrella I hung up to dry is still on the balcony; I remembered I have to return it tomorrow, and suddenly I felt kind of guilty. I never once brought up the application to him face to face. I didn't pick the advisor I was closest to as my reference. I hesitated outside her office door for two whole days before I knocked. She asked why I chose this specific workshop, and I recited a whole script of official introductions, but she cut me off and said, \"I want to hear your real reason.\" I sat there on that tiny little chair, and said it out loud for the first time: I want to go somewhere where no one knows who I am, and try it. After I said it, I felt like a huge weight lifted off my shoulders.",
            "The advisor didn't write the recommendation note for me. She just told me to go back and get the short story I've always wanted people to read. I gave her that piece I've never dared to submit anywhere. On the way back to the dorm, I walked past the photography club, and I'd already half-stepped inside before I pulled back, scared he'd laugh at me for getting excited before I even got accepted. I could work up the courage to knock on my advisor's door, but I turned into a total coward the second I got to the photography club entrance. I was scared he'd tease me for being over the top before results are even out, but even more scared he'd just say something casual like \"that sounds great.\" My phone vibrated in my pocket. I thought for a second it was him, but it was just an email alert. I didn't open it until I walked out of that hallway, and it turned out to just be a spam ad."
          ],
          "clue": "c5",
          "recollectionAt": 8,
          "wordCount": 1154,
          "recallCaption": "The Old September Page"
        },
        {
          "who": "zhou",
          "title": "She said don't bother her for now",
          "date": "2024 / 09 / 15",
          "weather": "Overcast",
          "text": [
            "September 15, I messed up the model again. The window I cut was wider than the blueprint said, so I have to replace the entire piece. My roommate asked if I didn't sleep last night, and I said basically. I did sleep, I just kept checking my phone. Those few lines Caroline Xu sent me were still in the chat box. I kept scrolling back up to them, and the more I read them the more uncomfortable I felt. I re-read what she wrote once more, and realized that the lines I kept replaying in my head didn't even match what she actually typed. It's only a few words, how did I overthink it that far?",
            "I asked her what Phil Chi's been busy with lately, why she hasn't come to the rehearsal room, and barely replies to my schedule messages. She said Phil Chi wants to focus on her own stuff for now, and told me not to push her. What I read at the time was {c6|Phil Chi is telling me to keep my distance}. Those words never came directly from Phil Chi's mouth. They never even showed up exactly in that paraphrased message. But that's the voice that got stuck in my head, and the more I thought about it the more real it started to feel.",
            "I never asked Phil Chi. I typed out \"Do you not want to see me?\" once, but it sounded way too harsh, so I deleted it. Then I typed \"Text me when you're done,\" but that sounded like I was rushing her, so I deleted that too. I flipped my phone face down on the desk, but less than two minutes later I picked it back up. Asking her directly would've been the easiest thing in the world, but I always double-checked the tone before hitting send, until there was nothing left on the screen. I was so scared she'd actually reply yes, and then I wouldn't even be able to pretend I didn't get the hint.",
            "I've always been really good at looking after people, or at least that's what everyone says. I know who forgot their stuff, I know when to go grab food, and I never make people thank me for it. But these past two days I realized I don't totally not want anything back. I want her to get used to coming to me. I want her to think of me first, whenever something comes up. Now she's started arranging everything on her own, and even though I say that's great, my heart feels empty for a second.",
            "That afternoon I went to the photo shop, to look at the group photo sample I sent for printing. The clerk asked if I wanted to crop the edges, and I said leave it as it is. In the photo, she's looking down at her watch at the literary society booth, and I'm next to her holding up a poster; we're standing pretty far apart. But that's the one I like the most. The clerk told me to come back tomorrow for the official print, I agreed, and didn't take it with me that day. I jotted down the pickup reminder in my phone, so I wouldn't forget tomorrow when I'm busy with the model. I left the sample there, and glanced back at it once more before I walked out.",
            "The photography club had a meeting. Caroline Xu sat across from me and brought up a few campus magazine story ideas. I barely reacted to any of them. When the meeting ended, she asked if I was still thinking about that line, and I said no. She said again that she didn't tell me to get lost; she just thought Phil Chi needed some space. I could've asked her then what exactly Phil Chi said, but I didn't. I just nodded, like that would put the whole thing on hold. But of course I went back and re-read all the messages again as soon as I got home.",
            "Those two movie tickets are still tucked in my book; I bought them last week. I was gonna wait till Phil Chi was done with everything to go together. I even picked out the seats. I never asked her what day was free, or if she even wanted to see that movie. Back then I could just say \"I happened to have an extra ticket,\" and she usually wouldn't call me out on it. It just hit me now that twice she said she was busy, and I added that the tickets were about to expire. She showed up both times, and I was so happy about it back then.",
            "I took the tickets out and laid them on my desk, thought about returning them, but that felt like admitting there's no chance. In the end I stuffed them back in the book. Writing this down makes me annoyed at myself—no matter what I do, I always leave myself an out, and I never figure out anything for sure. I didn't text Caroline Xu again tonight. It's not that I suddenly saw the light; it's that I don't know what else I could get out of asking her. I'm scared whatever she says will make me overthink the whole night all over again.",
            "I flipped to the page with the photo in it, and suddenly remembered my high school deskmate asking me to go to an art exhibition. Back then it was exactly like this—the words were right on the tip of my tongue. First I asked who else was coming, and when I heard it'd just be the two of us, I immediately said I had a family thing I couldn't get out of. I stayed home the entire day anyway. Later she never asked me out again, but I even told other people I regretted missing it, like it was just a delayed train, not that I made up an excuse to avoid going. Writing this down now, it feels so familiar—I'm not any different from that version of me right now.",
            "I just opened Phil Chi's chat box again, and this time all I typed was \"What've you been busy with lately?\" No emojis, no \"It's fine if you don't wanna talk about it.\" I haven't sent it yet. I stared at that line, and it feels totally normal, but my finger won't move off the send button. I put my phone on the other side of the desk. First I'll fix the window on the model. I'll check it again once the glue dries. At least this time, I didn't open someone else's chat first to ask if she still wants to see me."
          ],
          "clue": "c6",
          "recollectionAt": 8,
          "wordCount": 1123,
          "recallCaption": "The Old September Page"
        },
        {
          "who": "shen",
          "title": "A Message Left For Her",
          "date": "2024 / 09 / 15",
          "weather": "Night Breeze",
          "text": [
            "September 15, I barely had an appetite for dinner. Phil Chi asked me if there was any missing field in her application form, and I said I fixed the email address. She replied \"Thank god I had you.\" Hearing those four words, I almost blurted out what happened that afternoon, but I just stared at my rice bowl and pretended nothing was wrong. I barely touched my vegetables, but I messed up all my rice by stirring it too much. She was complimenting me so innocently, and the more she talked the more fidgety I got. That thing I said this afternoon already passed hours ago, and I still haven't dared to bring it up.",
            "She only handed her application over to me so I could proofread it. When Kavin Zhou texted me asking what's going on lately, I told him {c7|She wants to focus on her own stuff for now}, then added that he shouldn't push her. The first part matches up with her being busy with her application materials, and the second part was totally my words. She never asked me to pass that message along. I knew exactly what those words would do—they'd make Kavin Zhou back off. I wasn't totally unaware of that before I hit send.",
            "He replied \"Got it,\" after a really long pause. I stared at those three words. First I felt bad for him, then... I actually thought this might be for the best. He probably won't go look for her tonight. I wasn't over the moon about it, but my chest felt a little looser. The second I realized what that relief meant, I wanted to shut the chat window immediately. I stopped for ages after writing that word \"looser.\" I tried to think of a different way to phrase it, but that split second of relief came way before any of the regret hit later.",
            "When we first moved in together freshman year, I was kind of jealous of Phil Chi. She can say no to things she doesn't want to do. Her voice is soft, but no matter how much other people pester her, she'll just shake her head. I'm always scared I'll ruin the mood, so I end up agreeing to everything, then go back to the dorm and complain about it. She told me to just say no next time, and I said okay, but the next time it happens I still can't do it. Then Kavin Zhou started going out of his way for her, and I started wondering—why am I going through stuff too, but he only ever notices her?",
            "That afternoon I made up excuses for myself, like she's so busy, and covering for her like that isn't a big deal. But I never forwarded our full chat history to her, and I never want her to know. If I was really helping her, why wouldn't I dare show her what I wrote? I can't answer that question. I stuffed my phone under my pillow, but a second later I pulled it out again to check if Kavin Zhou sent a second message. He didn't.",
            "Phil Chi's never been mean to me. When the film developed all black, she sat with me for ages to figure out what went wrong; when I felt too sick to get out of bed, she filled up a hot water bottle for me. I remember all that, but remembering it never stopped me from typing those words that afternoon. Even writing about it now feels awkward, like as soon as I say she's been nice to me, I have to promise I'll do better later. Right now I don't wanna make any promises, I just wanna get everything straight.",
            "After dinner she got back to editing her application materials, and I opened a photo on my laptop beside her, zooming in and out on the same spot over and over. She asked if my screen was broken and why I kept staring at that one area, so I said I was checking for noise. Just another little lie. Actually I was listening for her to stop typing, waiting for a perfect moment to bring all this up. When she finally got up to get a glass of water, I just looked back down at my desk. By the time she came back from washing up, I still hadn't said a word.",
            "The chat history's still there; I didn't delete it. I copied that line right here, half from her and half added by me—tomorrow I'm gonna make that clear. The second I wrote the word \"tomorrow,\" I didn't even believe myself. I've pushed this away so many times already today. I was gonna write \"I'll definitely say it tomorrow,\" but I deleted that line too. I already tried telling myself I'd definitely say it so many times today, and I still chickened out every single time. Phil Chi's water mug is sitting on the edge of my desk. When she comes back to grab it, that'll be another chance.",
            "When I flipped through some old photos, I found the files from that photography assignment we were rushing to finish last year. Kavin Zhou came to return my camera, so I deliberately left a parameter issue there to make him ask me for help. He actually sat down to help me, and I was over the moon for ages. Then I looked up and realized Phil Chi was there the whole time, and I got grumpy all of a sudden. That's so ridiculous; he was helping me with my assignment, but I was counting how many times he looked at her. Nobody had any idea how chaotic my mind was that whole night.",
            "I used to think if I never confessed I'd never trouble anyone, and I could just hide my feelings. But that message already got sent, Kavin Zhou read it, and Phil Chi still thinks I only fixed her email for her. I keep telling myself everyone who's got a crush feels this crappy sometimes, but being uncomfortable never makes it okay for me to send that message for her. I re-read the chat log again; it's still there. Tomorrow, if she asks about her materials, and all I say is the email's fine... that's still me hiding from it. I wrote that thought down, and it didn't make me feel any better at all."
          ],
          "clue": "c7",
          "recollectionAt": 8,
          "wordCount": 1071,
          "recallCaption": "The Old September Page"
        },
        {
          "who": "xu",
          "title": "The Pause In The Lyrics",
          "date": "2024 / 09 / 15",
          "weather": "Sunny",
          "text": [
            "September 15, the ceiling lamp kept buzzing, and it made my temples throb. Outside the equipment room, Caroline Xu and I waited to sign our gear back in—she's checking out a camera and stabilizer, I'm returning the microphone. On the surface we were chatting about checking in and out, but then she asked if I could help her find a moment after the gala where Kavin Zhou's alone. I said sure. She also promised she'd help me keep Phil Chi behind after the performance. We were actually negotiating a trade-off, and neither of us thought it was weird—at least, not back then.",
            "I even told her seriously that she shouldn't let Phil Chi leave immediately after the curtain call, and she said the whole photoshoot thing could naturally lead her away. We both said the word \"naturally\" out loud once. Who even arranges that kind of \"natural\"? Writing those plans down now, the more I read them the more awkward they feel. But back then we thought we had everything perfectly mapped out—ask nicely, leave time for her to talk, no pressure, like as long as the steps look decent, the messy feelings underneath don't even matter.",
            "Phil Chi insists that {c8|the half-beat pause} before the chorus can't be any shorter. The anniversary gala's schedule is super tight, so I suggested we trim it a little, scared the audience's cheers would cut it off. She shook her head, saying when people are about to say something that matters, they always pause first—that's not silence, that's the line finding its way out. I got convinced again, and the keyboardist laughed at us for arguing over half a beat. But as soon as rehearsal ended, I started overthinking: in that half-beat pause, is she thinking about Kavin Zhou?",
            "She never told me who she's thinking about during that half-beat. I'm the one who always assumes it's Kavin Zhou. Once she showed me a new line she wrote, and my first reaction wasn't to think how to sing it, but to ask who it was about. She said \"It's a song, just listen to if it flows right first.\" I laughed it off then, like it was just a silly joke. She didn't drop any hints at all. Most of that stuff was all in my head, and I started taking it way too seriously. When I listened back to the recording later, I heard my own laugh, and even I thought that silly question was totally out of line.",
            "Last month when we were recording the demo, she wrote a line that goes \"don't decide the dawn for me,\" and asked me if it was too blunt. I joked that it sounded like she was cussing someone out. She didn't laugh, and said maybe she really is cussing at people who are nice to her, but always keep picking the direction she should go for her. My first thought was that her family was meddling in her life again; I never thought for a second she was talking about me. Later when I was putting the sheet music away, that line popped back into my head, and my fingers paused on the edge of the paper. That person she's talking about? It might just be me too.",
            "Caroline Xu asked me, if Phil Chi picks Kavin Zhou, am I still gonna get on stage? I said yeah, the song's not a love confession. We stared at each other, both trying to figure out how much of that line was true. During rehearsal, I saw Phil Chi tucking a ticket into her bag, and I still couldn't stop wondering who the other one was for. My mouth says the music's just the music, but my eyes never lie. I even saw exactly which pocket of her bag she slipped the ticket into, and I completely zoned out what my bandmates were saying after that.",
            "I wrote down all those so-called natural arrangements: who gets called away to take photos, who stays behind, which exit everyone uses. It looks so awkward on paper, like we choreographed all of these people as part of some show. If Phil Chi saw this, she'd probably ask why I just didn't ask her directly. I know she'd say that, but I still thought asking straight up was too big of a risk, so I went all the way around the houses instead. It sounds kind of exhausting writing it down, but I was totally hyped to plan all of it back then.",
            "Last full run-through, I kept my eyes on the strings, and Phil Chi came in perfectly right after that half-beat pause. The band said that take was solid. We recorded it one more time, and when we listened back, I didn't spend the whole time overthinking what I was gonna say after the gala. The drummer even asked if I had something on my mind, since I messed up two parts. I said yeah, let's do it again. The song can't keep everyone waiting for re-do's just 'cause I've got personal stuff going on. We packed up the gear later than usual that day, and I was starving the whole walk home.",
            "Today I pulled up the files for all those songs, and the modification dates stretch down a super long list. Scrolling through them, I ended up counting how many late nights we spent together working on this, and once I finished I thought that was pretty stupid. She's not gonna fall for me just 'cause we have a bunch of old music files. Today I found the very first rough recording, where there's a part where I messed up the strum, and she didn't laugh at me—she just said let's do it again. That's care for the work, not a promise. I used to mix those two things up all the time.",
            "Caroline Xu sent me the route map, and I deleted the marker that I specifically put in to make them take the long way, leaving only the equipment hallway open. She asked what changed, and I said let's not waste their time. As soon as I hit send I regretted it a little—now that little gap's gone, and I'm gonna have to ask Phil Chi directly if she's got time later. Before deleting it, I zoomed the map in and out so many times that my finger slipped and I almost hit undo. I'm not as chill about it as I thought I'd be. I never touched that half-beat pause on the sheet music, that's something we practiced together, so it's not the same thing as this."
          ],
          "clue": "c8",
          "recollectionAt": 8,
          "wordCount": 1111,
          "recallCaption": "The Old September Page"
        }
      ]
    },
    {
      "title": "Who should the letter go to?",
      "subtitle": "The investigation's out. A single repair record alone will never pay back what we owe.",
      "date": "09.23 — 09.28",
      "objective": "Cross-reference the school's conclusion with that day's notes and previous relationships, then talk through recovery, apologies, staying, and goodbyes.",
      "entries": [
        {
          "who": "lin",
          "title": "Reopen the window",
          "date": "2024 / 09 / 23",
          "weather": "Sunny",
          "text": [
            "September 23, sunny. The school's investigation conclusion is out: the fixing component of the literature building corridor guardrail failed. The calls, recordings, and alibis of everyone involved have all been cross-checked, and there is no evidence to back up those claims of chasing, conflict, or anything of the sort. {c17|The maintenance record} has cleared my name of all those baseless assumptions. I read those pages so slowly, scared I'd somehow end up reading a story someone else had arranged for me again. My hands holding the phone were shaking a little, and the text was dense, so I swiped up past a line and had to scroll back to find it again.",
            "I didn't cry after reading the notice; the first thing I felt was exhaustion. This past week, I've spent so much energy proving I didn't lose control, didn't elope, and didn't spiral over a single remark. But proving it was an accident doesn't make the pain any less, and our relationships won't automatically go back to how they were. The only good thing is that the facts are finally out of the hands of random strangers in the group chat.",
            "I'm making public whatever should be public: the timeline, location, guardrail maintenance, call origins, and that there was no chasing or conflict. These things concern campus safety and other people, so they deserve to be known. The love letter, the full application, and private chats are not for public view. The recipient of the letter hasn't finished reading it yet, the application contains unpublished works, and the chats hold things my friends only told me, not a crowd of onlookers.",
            "Some people are saying even at a time like this I still refuse to release the letter. I saw that message and didn't reply—not for lack of words, but because I was too tired. That letter was for Kavin Zhou, and there are several lines in it that make my face burn even now when I read them. I don't want a bunch of strangers dissecting it word by word. When sorting through attachments, I deliberately moved the letter to a separate folder. Just the thought of someone opening the call log and scrolling onto it by accident makes me sick.",
            "Kavin Zhou's payment timestamp, Caroline Xu's equipment log, and Caesar Huo's recording all check out. But after going through all of this, I didn't immediately feel like chatting with them. The group chat messages are still there; I tapped into them then closed the app. I thought once everything was clear I'd feel relieved, but right now I still don't really feel like talking, and I have no idea who to reply to first. At least now I know my discomfort talking to them doesn't have to be tangled up with guessing exactly what happened that night anymore.",
            "You can see the playground from the window of the rehab room. Today I walked a little more than yesterday, the nurse praised me, and I felt a little happy, then got so tired I didn't want to speak. Caroline Xu texted to ask about meals, I replied slowly, and she didn't rush me. Back in the day, we'd chatter away about all kinds of nonsense while eating, but now we're being polite even picking what to order over the phone. I don't want to force things back to the way they were, and I don't want to interpret every ordinary care she sends as an apology.",
            "I emailed the workshop to ask if I could keep my candidate spot, and that my departure date would be decided based on my recovery and the school's advice. The teacher wrote back quickly, saying the judging had nothing to do with the accident, and they'd give me a reasonable amount of time. I cried when I read that line. It reminded me: besides being \"the girl who fell from the building that night,\" I'm also a writer who submitted work and got noticed by the judges. It's been so long since anyone reminded me of that.",
            "I organized all the documents that needed to be cross-checked in order. Some names looked too similar so I labeled them again. One of the photos came out blurry so I retook it, messing around until my wrist ached a little. The letter and full application won't be sent to anyone for now; they contain my unpublished work, and I don't want people reading them ahead of time just because of this incident. Today I just want to sort all these out, then get some sleep. No more checking the group chat before bed—I said that to myself once this morning and failed, so I'll try again tonight.",
            "After going through all the notes, I pulled the curtains open a little. There's a narrow ledge by the hospital room window for holding cups; the past few days I always pushed my cup far in, scared it would tip over. Reaching out today, I realized I'm still being that careful. My body remembers what happened, and it won't be okay instantly just because there's a conclusion on paper. I don't have to force myself to cheer up, or keep saying I'm fine just to put my friends at ease. I still nudged my cup further inside. After that, I sat leaning against the pillow for a while, listening to the rumble of the cart wheels rolling back and forth down the hallway.",
            "The workshop teacher's email is still pinned at the top of my inbox, unarchived. A few days ago, every time I opened my phone people were asking me about that night, and today someone finally asked if I still wanted to revise that draft. I said yes. I don't really have the energy. I opened the document and edited two lines before getting tired, but I still hate to close it. Stopping after two lines counts as progress. I'll open it again tomorrow when I'm well-rested; I still want to change the main character's name, so there's no need to look through the dictionary today."
          ],
          "clue": "c17",
          "recollectionAt": 8,
          "wordCount": 1013,
          "recallCaption": "Late September",
          "diaryNotice": "I jotted this down the day the conclusion came out. Honestly, I didn't feel relaxed at all that day."
        },
        {
          "who": "zhou",
          "title": "Writing out the full name",
          "date": "2024 / 09 / 24",
          "weather": "Sunny",
          "text": [
            "September 24, sunny. The back of the photo is all written now, and I put {c18|Phil Chi's full name}. Just two short words, but I erased and rewrote it so many times the paper got fuzzy; the nib kept catching on that spot. I spread scratch paper on the desk and practiced the name a few times first, scared the formal writing would come out crooked. The more I cared, the worse it went, and eraser crumbs scattered everywhere. After finishing it, I still didn't feel suddenly relieved; I was still wondering if I should show it to her.",
            "I corrected what I said in the group chat this morning. I wrote that I wasn't the first person to arrive, the security guards and other classmates got there earlier, and I didn't leave the photo shop until 20:22. I deleted the explanatory paragraph after that; I didn't say how frantic I was later. Some people replied \"got it\", others said nothing. It was quieter than I expected. Yet I kept opening the app every few minutes, scared someone would press for answers, and also scared no one would care about me at all anymore.",
            "I got downstairs to the rehab center, didn't go up, and texted Phil Chi to tell her I'd been putting this off. I wrote all about why I was dragging my feet, what I was afraid to hear. She took ages to reply with just \"got it\". I stood downstairs the whole time, wanting to add another line, but had no clue what to say. I used to send that short line to people all the time, but I never knew how hollow it feels on the receiving end. Later I bought a bottle of water and sat on a bench outside.",
            "I stared at that \"just got it\" message from her for ages. Turns out I was still waiting for a \"that's fine\", waiting for her to let this go first. I knew I shouldn't rush her, but my hands were already typing \"I don't want to make you sad\". I deleted it. She definitely knows I don't want to make her sad right now, but I still did all those things. Explaining it all over again would probably just make her read one more long text from me. I put my phone away, drank half the bottle of water, and it was no longer cold.",
            "I talked to Caroline Xu by the playground for a little while this afternoon. She brought up passing messages first, so I said we could talk about that later, because I had something to tell her too. That day in the darkroom, I understood exactly what she meant, but I kept asking for her help afterwards and never clarified. I told her the person I like is Phil Chi. The second those words left my mouth, I knew it was too late—especially when she nodded and said she'd known for a long time, but still wanted to hear me say it myself.",
            "She said whenever I run into a hard question I talk about work, and I'll still ask her for photos normally when I need them. I remember every single thing she said; I can't pretend I don't. I was going to say we're friends, then I didn't. Calling us friends right now feels like using that phrase to make her not take it to heart. She stared at the running track for a while, then said we can handle the school journal stuff in the group chat from now on. I said okay, and didn't ask if things could go back to how they used to.",
            "On my way back to the dorm, I ran into a classmate who asked why I looked so worn out. I said I just had some stuff going on. He didn't push further, and I actually felt relieved. I don't want to go find someone after this to judge and say I already apologized, why is she still acting like this. She's not making things hard for me; she just isn't responding to me the way she used to. Walking back, I almost texted \"made it to the dorm\", but the second I typed it I realized that was wrong. After deleting the message, I held onto my phone the whole walk.",
            "I scanned the photo, and I'm not sending the physical copy right now. If I mail it over, she'd have to figure out how to reply, and that's one more hassle for her. It's true that I really want her to know I wrote out her full name. The scanned version is the first photo in my album, so I see it every time I open my phone. I tried to send it so many times, then thought better of it and closed the share page. I want to wait until she's willing to talk about the photo to show it to her, not make her get hit with it out of nowhere while she's busy doing something else.",
            "Writing this down, I remember when I was little my family always praised me for being mature, mainly because I almost never turned people down. Later I treated that like a good trait—help whenever I can, speak with room for everyone, make sure no one feels awkward. Caroline Xu said today she'd rather I was straightforward that day. I almost wrote that telling her would still hurt. Good thing I didn't, that would've just been arguing back, and she's already been hurting for so long.",
            "After finishing the name, I breathed a sigh of relief first, like a huge weight I'd been dragging around was finally off. But looking at that photo, I know that's not the case at all. There are still things I didn't explain properly, and people who don't feel like talking to me right now—none of that can be fixed by a single photo. Tonight, the model group asked me to fill in some artwork, so I went. I looked for the ruler forever, and found it under the table. I finished the stuff due tomorrow first, left my bag with my phone inside, so I wouldn't keep checking it nonstop."
          ],
          "clue": "c18",
          "recollectionAt": 8,
          "wordCount": 1039,
          "recallCaption": "Late September",
          "diaryNotice": "I finished writing that name on the back of the photo. I jotted down a paragraph in my notebook that night too."
        },
        {
          "who": "shen",
          "title": "The page that belongs to me",
          "date": "2024 / 09 / 25",
          "weather": "Sunny",
          "text": [
            "September 25, sunny. I sent the screenshot to Phil Chi, and circled {c19|the part marked as my own judgment}. All she asked me to do was review the application, but I told Kavin Zhou not to pressure her, and later he took that as meaning stay away. I separated the original words from the stuff I added later and rewrote it several times, not to change the facts, but because I kept wanting to add a line about how bad I felt back then. In the end, I deleted all of that.",
            "My opening line was going to be \"Listen to me first.\" I looked at those words and instantly knew it was wrong, like I was telling her to sit down and hear me out before she even saw what I sent. I changed it to \"notes documented here, this part was added by me\". After that, I told her she didn't have to reply right away. The second I hit send, I started waiting for a response, even though I was the one who wrote no need to reply immediately. I set my phone on the bed, and kept picking it up again every time I went to wash a cup.",
            "At noon, she replied, saying she would read the notes, but that her feelings would take time to sort out. The thing that hurt the most for her wasn't that I liked Kavin Zhou, it was that I spoke up for her without asking. I read the message over and over, had no idea what to say back, and finally wrote got it. I didn't ask if we could still be friends. That question hung in the input box for ages, because I was scared if I asked, she'd have to spend more energy dealing with my problems again.",
            "Back then our chats weren't like this—whoever saw the other's takeout arrive would send a random heads up, and we could pick up any fragmented conversation. Today I even had to think twice before sending a sticker, wondering if it looked too casual. Her profile pic is still the same one, but that chat window feels so much farther away. I know the fact that she didn't block me means she's already giving me space, but it still hurts. I have to get through this pain on my own; I can't tell her to hurry up and get back to normal for me.",
            "I sorted all the materials that could be used for the investigation cross-check: the equipment room checkouts, the administrator's logs, the classmates' statements, all covering the window from 20:06 to 20:22. The private stuff is filed separately: that crossed-out line, our dorm chats—no accidentally forwarding the whole folder. I relabeled every filename one by one, and even though I saved them before, I kept fumbling to find them. After sorting, at least next time I need something I won't panic rummaging through my photo album.",
            "Some people online are saying refusing to make everything public means you're hiding something. I don't have the energy to reply to everyone. I messed up passing a message, and Phil Chi and Kavin Zhou deserve to know that. If they need to cross-check their whereabouts that night, the records are there. But who I do or don't have a crush on is not something every group chat member has the right to ask about. A while back, I might've forced myself to write a long explanation, but today I glanced at those comments and just closed the app. I was still mad after closing it, so I went to splash cold water on my face.",
            "In the evening I went to the darkroom to pick up my photos. I wasn't picking them up for the school journal, and I didn't check first if Kavin Zhou was there. Walking past the door, I remembered that time I told him how nice it felt to hang out here, and he shifted the topic straight to work. Back then I made excuses for him, saying he's just bad at chatting. Later I realized, he and Phil Chi never ran out of things to talk about. I didn't stay too long today, grabbed my photos and left, my heart didn't lighten up all at once.",
            "Phil Chi texted later and asked if we could get a meal together when she's feeling up to it, to sort things out clearly—she didn't mean we'd patch everything up instantly. I agreed. Then I immediately tried to look up a restaurant, but I stopped; the time isn't even set yet. I closed the menu page. I keep falling back into my old habit, wanting to arrange every single detail so I can skip that awkward gap as fast as possible. This time I'll wait for her, no need for me to make up some thoughtful excuse.",
            "I flipped through our freshman year dorm group photo, half the little string lights were broken, but we hung them up on our bed curtains anyway, and Phil Chi was laughing so hard she could barely hold her phone. I almost sent it to her, saying how good the old days were. Then I didn't. It's not that those days were bad, or the photo shouldn't be seen—it's that sending it now feels like pushing her to remember how nice she was to me. I'll keep the photo to myself, and as for the string lights, I have no clue what box I stored them in.",
            "When I was printing the exhibition photos this afternoon, the printer jammed. My first instinct was to find Kavin Zhou, but in the end I called the equipment manager. He walked me through the steps on the phone, and the paper came out fine. It wasn't hard at all; I just used to use tiny little things like that as an excuse to talk to him. After fixing it I didn't feel super independent or anything, I just hung the photos up to dry, then checked the color of the next one. I still haven't finished picking the ones for tomorrow, so I made a new folder and moved the printed ones in. There was a little piece of paper scrap on the desk, I had to sweep twice to get it clean."
          ],
          "clue": "c19",
          "recollectionAt": 8,
          "wordCount": 1054,
          "recallCaption": "Late September",
          "diaryNotice": "I reread those diary entries from that time myself."
        },
        {
          "who": "xu",
          "title": "After the last song",
          "date": "2024 / 09 / 25",
          "weather": "Evening Breeze",
          "text": [
            "September 25, evening breeze. Putting the full recording, payment log, equipment registration, and maintenance record together, we can finally tell what happened that night and what didn't: no clipped audio, no chasing or fighting, and no one turned her leaving into running away with me. What broke was the guardrail. The rest of it is all the messy, unaddressed parts of our feelings that none of us sorted out properly. I put this line at the very top, so I don't ramble on with all my emotions later.",
            "I organized the extra conversation details I needed to add, sent them to Phil Chi to confirm first, then I'll append them to the investigation materials. That she explicitly turned me down in the rehearsal room, answered the workshop call at 20:17, and said no one else should relay messages for now—all of that will be documented. The words turned down still feel weird to write; I rewrote the phrasing several times to say didn't choose me instead, but that just felt more convoluted. Whatever, I'll just write was turned down. Facts don't stop being real just because you rename them.",
            "The final draft of the program list was sent out, {c20|the lyricist's name is still properly credited}. After the show was rescheduled, some people asked if we should swap it out, saying it'd cut down controversy. I said the lyrics are still her lyrics, how can you take her name off? The other side didn't push it, and asked me to double check the formatting. I went over every line, her name was correct, and I sent the two comments marked on the old draft over too. This isn't something Phil Chi should have to remind me to do, she's got other stuff to take care of right now.",
            "After confirming the program list, I was going to screenshot it for her, and typed I kept your name for you. The more I looked at that line, the more wrong it felt—what do you mean I kept it for you? Those lyrics were written by her in the first place. I deleted that line, and just told her the final draft was out, the name and all the work had been double checked. After sending it, I still waited for her reply, and even secretly hoped she'd give me a compliment. But I can't twist basic decency into some big favor I did just to get a thank you from her.",
            "The keyboardist asked if we should make the next track edgier, write about being rejected in a way that feels satisfying. He was joking, and I laughed, then actually tried writing two lines, but it felt totally awkward. It was like if I wrote it to make myself look hurt enough, I could frame her saying no as her doing something wrong. I threw the draft away, didn't show it to the rest of the band. They're waiting for me to hand in a usable chorus, not some bitter rant.",
            "I renamed that audio clip, got rid of the misleading old title, marked clearly where the original file is, and noted which parts can be shared. Being technically honest is easy; you just hit submit. Being honest with people is trickier—you have to admit I used the performance to hide the fact I got rejected, and that I briefly enjoyed being the insider in all the gossip. That second part still makes me pause when I type it, but after pausing, I have to keep writing.",
            "Tonight I walked around the playground alone, and the banners were flapping loudly in the wind. A week ago, I thought if she picked Kavin Zhou or chose to go far away, I'd lose. Looking back now, what I lost was a hypothetical I never actually had. The appreciation she gave me when we collaborated was real, and her turning me down is real too—those two things don't have to cancel each other out. I've known that truth from writing lyrics before, but when it was my turn to live it, I had to walk in such a big circle to get it.",
            "I need to wrap all this up before leaving campus: the shared files, unfinished arrangements, program list confirmations—so the band members won't blow up my phone looking for stuff. We still have to perform the song, and there are two beat cues I haven't nailed yet. I'm stopping writing here, I'll take my guitar out and practice for a bit. Not to record some fancy goodbye for her, it's just that the band already reminded me last time that if I mess up again they're gonna get annoyed. I'm annoyed at myself too; why do I rush the beat even when I'm trying my best to get it right.",
            "While flipping through the program list, I found her earliest comment. For one random line of lyrics I scribbled, she left three different accent options, back when we didn't even know if they'd be used. I can still tell which words she added later, the pen ink was a different shade. I flattened that page, put it back in the sheet music folder, and didn't take a separate photo to send her. She probably still remembers that, I don't have to text her every time I recall it so she has to send back an emoji.",
            "While packing my bags yesterday, my mom called to ask if I had too much stuff. I said the heaviest stack is all sheet music. She asked why I don't just keep scans, and I said there are handwritten notes on them. She didn't ask who wrote them, just said to pack them carefully. I love that answer so much, I don't have to frame whose handwriting it is or what our relationship was like as some sort of win or loss. When I open these sheets later, I want to look at what parts I still need to practice, not tally up whether she was touched by me. Before I leave, I'll flatten all the page corners, so when I flip through them in the new place none of them are curled up."
          ],
          "clue": "c20",
          "recollectionAt": 8,
          "wordCount": 1034,
          "recallCaption": "Late September",
          "diaryNotice": "Packing my stuff before leaving campus, I found this page."
        },
        {
          "who": "lin",
          "title": "Separate the two things",
          "date": "2024 / 09 / 25",
          "weather": "Sunny",
          "text": [
            "September 25, sunny. I had a video call with the workshop teacher today; the online interview can be pushed back a week, and my stay duration can also be negotiated depending on my follow-up check results. I sat there for a long time after hanging up, then suddenly got scared the camera was still on, so I double checked right away. I still want to go, I really do. The required paperwork is written down on a sticky note, I'll sort through each item once the follow-up check results come out. The sticky note is on the edge of my desk, its corner was curling up, so I pressed it flat again. The several dates the teacher mentioned are all jumbled together, I'll need to check the school calendar later.",
            "Kavin Zhou messaged me, asking if I'm feeling up to it, if we can talk through those two things in the letter. He said he'd listen, and wouldn't make decisions for me. Reading that line made me so nervous I almost flipped my phone over. I still like him. Liking someone isn't a light switch you can just turn off, it won't go out just because I keep telling myself I'm independent.",
            "{c21|Accepting the invitation to talk and responding to his feelings are two completely separate things}. I wrote that down on paper, but the second I actually go to text him, I get flustered. The workshop needs me to confirm timelines and paperwork, Kavin Zhou wants to know if we can have a proper talk. I switched back and forth between the two chat windows so many times, I almost typed my reply to the teacher in his message thread. In the end, I just replied to the email first. No one's pressuring me, it's just that when I think he might be waiting for me, I keep wanting to answer both things at once.",
            "I waited for him to ask me to stay. I have to write that down, so I don't act all cool and pretend I didn't later. If he said \"don't go,\" I'd probably have gotten a little burst of happiness, because that would mean I was the one he picked. But if I really stayed just for that line, every time I hit a writer's block, missed home, or fought with him later, I'd secretly think: \"I gave this all up for you.\" Love would turn into a debt, and independence would turn into resentment. I know myself way too well.",
            "Today he didn't say don't go. He asked what the workshop focuses on, what the city's climate is like, how I'm arranging the three months, and when the follow-up check form is due. I felt a little twinge of disappointment for a second, then it hit me: isn't this exactly what I've always wanted from him? Don't ask when I'll be back first, ask what kind of person I'm trying to become. Humans are so weird. You get the exact answer you wanted, and you still have to mope a little.",
            "Today I don't want to drag Caroline Xu and Caesar Huo's stuff into this letter anymore. If I write too much, Kavin Zhou will probably read it and forget which point I'm even trying to make. I moved those paragraphs to a different document, not deleting them, and I'm not over it or anything—I just want to talk about me and him right now. Halfway through writing, I rambled off-topic again, and it looked so tedious even to me. Back in writing class my teacher always said my openings were way too long. Now even letters to other people have that problem.",
            "On the second page, I added a line: \"This isn't a guarantee asking you to wait for me, nor a notice telling you to let go.\" After writing it, I thought it felt a bit too formal, like a line I'd read somewhere before, so I scribbled another line next to it: \"I haven't figured it out yet, but I wanted to tell you.\" The rest of the space was left blank. I didn't polish it into something nice. The few lines on the first page where I wrote that I liked him weren't deleted, and reading them still made me feel flustered. I flipped the paper over for a while, then flipped it back; the words wouldn't disappear on their own.",
            "Tomorrow I want to tell him that we can give this a shot, but I need to confirm the details for the workshop first. I also have a follow-up medical checkup coming up, and lately I don't have many hours of the day where I feel fully alert. I'm scared I'll get tired halfway through our chat, and when I'm tired I get irritable easily. I don't want him to talk to me earnestly only for me to just reply with \"mm-hmm\". Delaying our talk a little makes me worried he'll overthink it, but I really want to pick a time when I can listen to him properly the whole way through. As for what will happen after I listen, I can't answer that right now.",
            "I grabbed two sticky notes, one for the follow-up checkup, leave request, and workshop, the other for the message to Kavin Zhou. Things didn't immediately become crystal clear after I split them up, but at least I didn't have to jump to another problem before finishing the first. I stuck the first note on the edge of the table and folded the second one once. Writing his note was a little tricky, so I rewrote the opening several times. Finally I set it aside to go eat, and when I came back it was still there. Things didn't get worse just because I put off thinking about it for half an hour.",
            "My mom asked if she should send me some oatmeal, saying she wasn't sure if the kind near the hospital would suit my taste. I said yes, and specifically asked for the old brand I used to eat. I suddenly remembered when I was little, I refused to bring the oatmeal she gave me to a competition, went hungry the whole night outside, and didn't admit it when I got back. Now I'm happy to take it. Thinking about the sticky notes, then the oatmeal, my mind's been wandering all day, jumping from one thought to another. The note still isn't finished, my water's getting cold, so I'll go pour myself a hot cup first, then come back and figure out how to start the message to Kavin Zhou."
          ],
          "clue": "c21",
          "recollectionAt": 8,
          "wordCount": 1100,
          "recallCaption": "Late September"
        },
        {
          "who": "zhou",
          "title": "The Second Movie Ticket",
          "date": "2024 / 09 / 26",
          "weather": "Sunny",
          "text": [
            "September 26, sunny. I opened and closed the ticket-buying page over and over, never completing the payment. In the past, I would've picked the exact time and seat, then taken {c22|the second ticket} to ask her out, acting like I just happened to have an extra one. But now that I was actually going to ask, I had no idea how to start. In the end, I only messaged her to ask if there was any film she wanted to see after her follow-up checkup, and which day would work for her. After I sent it, I double-checked to make sure there wasn't a single line that said I already bought the ticket.",
            "She said she couldn't sit for too long right now, and we could talk about it after her checkup. I replied okay. And that was it. I thought I'd be really unused to it, and I was—my fingers tapped back into the ticket app to check if there were still seats left. After I did that, I laughed at myself. She hasn't even locked in a date, so what day was I stressing over? I closed the page and went to get my freshly washed clothes. There was a patch on the collar that didn't get clean.",
            "Later I messaged her to ask what the workshop was specifically about. The first line I almost typed was \"When are you coming back\" again, but I deleted it halfway and asked about the courses instead. She sent a long paragraph, covering non-fiction writing, community interviews, public reading sessions, plus coordinating school coursework, and her follow-up checkup paperwork still wasn't fully sorted out. I only knew it was a three-month program before; I never really asked for details. Turns out she's already mapped out so many things for this.",
            "I didn't quite get the community interview part, and assumed it was just finding a few people to chat with. She said no, and explained how to select interviewees and prepare properly. Halfway through listening, I almost jumped in to give her advice, then remembered I actually knew nothing about it, so I just kept asking questions. We ended up chatting for a really long time, all about the class schedule, even covering which classroom each session was in. But I really enjoyed listening to her talk, way better than trying to guess what a single \"mm-hmm\" from her meant.",
            "I dug up the old tickets too, the two I bought last time. I couldn't bear to throw them away, so I put them back in my book and didn't send her a photo. I didn't want her to look at expired tickets and feel like she owed me a movie. I used to do that all the time, send a line like \"what a shame\" with a silly emoji, and make it look like a joke. She said she'd make it up to me next time, and I got all giddy right away. Thinking back now, maybe she felt a little awkward back then too.",
            "Caroline Xu is preparing the film exhibition, and I saw the messages in the group chat. I almost DMed her to ask if she needed help setting up the space; my fingers had already typed out the whole message. But in the end, I only replied clearly in the work group about the process for borrowing equipment. She doesn't reach out to me privately now, and I shouldn't keep tossing her new topics every few days so she has to wonder what I want. I know it's easy to say all this, but I still habitually tap on her profile picture sometimes, and I have to remind myself not to.",
            "This weekend I planned out my model building project progress first. I didn't clear my entire schedule waiting around for Phil Chi. If she's free, we can make plans together; if not, I've got my own stuff to do. I'm not pretending to be busy on purpose. I realized that the more free time I left open before, the more I'd stare at my phone waiting for messages, and even a line like \"go do your own thing\" would come out sounding pressuring. She might not have noticed, but I knew I was sulking a little when I sent those lines.",
            "Walking past the photo shop, I saw they'd put up a new landscape exhibition poster on the glass, all shots of the seaside. I stood there looking for a minute, and remembered her saying the wind was super strong at the workshop location. I still feel a little twinge of jealousy; I didn't suddenly turn into a totally carefree person. But today my first thought was wondering if she'd take photos to show me, instead of trying to figure out how to make her not go. I want to hold onto that little difference, so I don't slip back into old habits in a few days.",
            "When I was little, my dad signed me up for a photography class; he told me only after he paid the tuition. He said I'd definitely love it, and I really did. But some weekends my friends asked me to play basketball, and I never dared say I could skip class, because the money was already spent. Before, when I thought about this, I only remembered how he supported my hobbies. It's only recently that I remembered how nervous I was to speak up back then. I hate being arranged for without asking, but when I was buying the tickets I only cared about whether she'd be happy to see them.",
            "I'm not booking the movie right now. I'll ask her myself when she's willing to talk about it after her checkup. Before, I always tried to sneak around to find out what she was thinking, but this time I didn't click on anyone else's profile picture. My phone only has our chat thread open. Tonight she sent me a page of her class schedule. I asked her who she planned to interview, and she replied with a long message. I didn't steer the conversation back to the movie. Finally she said she should go to sleep, and I said goodnight. Nothing got confirmed, but this time I didn't scroll back through our whole chat history before heading to wash up."
          ],
          "clue": "c22",
          "recollectionAt": 8,
          "wordCount": 1054,
          "recallCaption": "Late September"
        },
        {
          "who": "shen",
          "title": "A Photo With No One In It",
          "date": "2024 / 09 / 26",
          "weather": "Cloudy",
          "text": [
            "September 26, I got up at six to go to the breakfast stall. When my alarm went off I really didn't want to move, scared the trip would be for nothing, but I still brought my camera. The steam from the steamer lined up perfectly with the light above the shop entrance, so I stood off to the side waiting for the owner to step away, and captured {c23|a photo with no one in it}. There's porridge, rising steam, and the just-bright sky. When I sorted through the photos back at my place, that was the first one I kept. I dropped it in the candidate folder, left the other few for tonight to sort out, and only left this one displayed on my screen for now.",
            "Before, every time I went out to shoot I'd automatically look for where Kavin Zhou was. When I shot events I'd get photos of him being busy, and when we took group photos I'd try to stand as close to him as possible, then after developing I'd still show the photos to other people. It's not that I don't love photography, it's just that back then there was always that extra thought of him in my head. This time after I finished the shoot I realized I hadn't checked to see if he sent any messages the whole morning. Then back in the dorm I checked once more, so I didn't completely forget about him. When there were no new messages, I went back to look at my photos again.",
            "Phil Chi said she wanted to come see the exhibition, and I said sure, then quickly added don't bring Kavin Zhou for me. I typed that line for so long, scared it made me look like I was still hung up on everything. But I am still hung up! Right now seeing them both standing in front of my photos together would make me feel awful. She replied okay, I'll come by myself, no extra questions. I breathed a sigh of relief, and almost added an explanation, but in the end I didn't. She already got it, no need for me to ramble on.",
            "But what if he shows up on his own? I got distracted thinking about that. Part of me hopes a little, but I'm also scared that if he really comes, I won't be able to pay attention to anyone else's work. It's better not to invite him. I used to always say everyone's welcome to come, then secretly wait for people to realize I actually didn't mean it. Thinking back, that must've been exhausting for everyone else. Today at least I didn't hide my frustration behind \"whatever\" and make people guess what I really meant.",
            "That evening I asked Phil Chi if she wanted congee or noodles, and she said light noodles. I'd already planned to buy congee, since I thought congee would be better for her while she recovers. When she said noodles, I remembered I used to hate it when other people ordered things for me and then said it was \"good for me\". When I bought it, I also asked to hold the scallions, and made a note to ask first next time. It's just a bowl of noodles, I don't want to treat it like we're already back to being close.",
            "I named the exhibition Outside the Viewfinder. I picked the empty chair, the playground after rain, the lamp by the equipment room door, and this morning's breakfast stall. There's one photo I really love, but someone said it doesn't fit with the rest of the set, and told me to take it out. I was a little upset, and set it aside to look at again. I'd rather spend extra time thinking about whether this photo should stay, instead of worrying about which one Kavin Zhou looks at first, or if he praises the one I put the most effort into.",
            "But habits don't change that fast. I still pause when I walk past the hot cocoa shop, and the red light in the darkroom still makes me think of him. I'm not planning to punish myself every single time I think of him. Today I sent all the photos to the exhibition group chat, people gave me a few good color correction suggestions, and I edited them until they looked much better. At least now I don't need to wait for him to say it's nice to know a photo turned out good. I want to hold onto that feeling first.",
            "Phil Chi said she'd come on a quiet weekday when there aren't many people, and lock in the date after her follow-up checkup. We can hang out for a bit after we see the show. I said okay, and didn't immediately ask if she's forgiven me. We still talk more politely than before, there are pauses between our lines, and I don't know if we can ever go back to how things were. I really hope one day when we eat together, she'll complain like usual that the shop I picked is too far, or I take too long ordering, no pauses every two sentences. I know that's not possible right now, and I don't want to rush her anymore.",
            "After I took that best photo this morning, I actually tapped into Kavin Zhou's profile, already selected the photo to send, but I didn't hit send. When I backed out, I was a little reluctant, thinking he'd probably love that beam of light. Then I sent the photo to the exhibition group, someone pointed out the right side of the steam was overexposed, and suggested adjusting the details. I edited it carefully for half an hour, and when I looked up, the urge to send it to him privately had passed. No big dramatic moment, just half an hour went by.",
            "Phil Chi video called me to ask if the lighting was okay; she said she wanted to come visit soon. I turned my phone around to show her the new picture frames I bought, and we both went quiet for a little bit. She said the frames looked good, I said they were cheap, and I almost bought the wrong sizes. After hanging up, I wrote the exhibition labels, wrote Caroline Xu in the author section, and double-checked there were no typos. I have to get up early tomorrow, so I set my alarm ten minutes earlier—I almost missed the steamer opening fresh this morning. After setting the alarm, I charged my camera battery too, scared I'd forget to unplug it when I rush out tomorrow morning. There are two unopened frames on my desk, I'll deal with them when I get back tomorrow."
          ],
          "clue": "c23",
          "recollectionAt": 8,
          "wordCount": 1124,
          "recallCaption": "Late September"
        },
        {
          "who": "xu",
          "title": "The Song With No Recipient",
          "date": "2024 / 09 / 28",
          "weather": "On the Train",
          "text": [
            "September 28, on the train heading to an exchange event. The trees outside the window slide past in rows; there's a patch of trees all tilted at the exact same angle, like they've been blown by wind from the same direction their whole lives. I shared my new song in the group chat, and Phil Chi didn't reply right away. At first I wondered if she was at her checkup, if she was with Kavin Zhou, if she was still upset that my last few messages weren't very clear. Halfway through overthinking that, I got bored, stuffed my phone in my bag, and watched the trees instead.",
            "This song was originally written for her, the melody grew out of that half-beat pause during our rehearsal, and every line carried little things I thought she'd understand. After she rejected me, I was too scared to open the project file for days; hitting play felt like listening to my own silly unrequited love. Then I rewrote the chorus, deleted all the pronouns that only pointed to her. A song made for someone to sign for, finally turned into {c24|the song with no recipient}.",
            "Love can have a name, but a goodbye doesn't need to be signed back by the other person. That's a lyric I used to sing to other people no problem, but walking through it myself showed how hard it is. When she didn't reply, I thought she must be judging it. If she replied with \"it sounds nice\", I'd probably wonder if she was just being polite. She already said things very clearly back then; it's me who kept misreading rejection as \"to be confirmed\". My phone vibrated again, a group message, I picked it up, read it, then put it back.",
            "When the train went through a tunnel, the carriage went dark, and the window turned into a smudged mirror. I saw myself holding my guitar case, my face not as sad as I imagined. I submitted my evidence, signed my name, said all the unspoken lines, separated the program schedule from my personal stuff. After doing all that, I still want to know the answer, obviously. But today I can choose not to ask. Maybe next stop I'll be dying to open the chat window again, but first I zip up my bag, and my phone vibrates one more time inside.",
            "The first to reply in the group was the keyboardist, saying the revised beat was great. A little later, Phil Chi replied two words: sounds good. I stared at the screen for a few seconds, then replied thank you. I didn't push her to ask which line she liked best, or DM her the other private version. Two words are just two words, not a secret code, not some hidden entrance to something delayed. Putting my phone down properly is way harder than writing that chorus. I'm at that point, I double checked, there really are no new messages, okay then.",
            "The first time we rehearsed her modified line about the wind stopping in the hallway, I still sang it. No need to delete that, the line's well-written. I tried humming a little, the person next to me glanced over, so I shut up right away and forgot I wasn't in the rehearsal room. My guitar case kept bumping my leg no matter which way I shifted it; in the end I just hugged it. My phone still had battery, I didn't go look for a charging port, and I wanted to use this section of the ride to jot down a few lines of unfinished melody.",
            "The announcement called out the next station, the person next to me opened a pack of cookies, and the whole carriage suddenly smelled sweet. I took out my notebook to write the new song title, no romance themes first, write about those tilted trees outside the window. The first few lines I wrote were really bad, so bad I laughed at myself. Bad is okay. Before, even the jokes I told in front of her I'd rehearse first, scared they weren't funny enough. Now writing a first draft for my future self, I finally let it be as messy as it is.",
            "When the train pulls in tonight, I need to back up the project files, send out the rehearsal schedule, and check the new venue. Having no recipient doesn't mean no one is listening. The listeners can be strangers, my bandmates, future me, or someone who hasn't showed up yet. Phil Chi will still be an important name, but I don't have to pretend she doesn't matter anymore. She doesn't have to be the destination of every song, though. Today it took me about ten seconds less to put my phone down than it did yesterday. Ten seconds counts.",
            "Before I left, I typed out a huge long goodbye message in the group, and even wrote \"thank you for appearing in my September\", but when I read it back I cringed so bad I never sent it. In the end I only updated the group with the shared file location and noted which tracks still needed work. That long message is still in my drafts. I haven't deleted it yet, because I'm scared later I'll think I should send it. The announcement reminded everyone of the arrival time, and I just realized I haven't eaten a single hot meal since this morning. I closed the draft, looked around to find where the dining cart is, and when I asked the passenger next to me, my stomach rumbled first.",
            "The person next to me saw my guitar case and asked if I was heading to a show. I said I'm going for an exchange workshop and still have to practice. I didn't mention who I used to collaborate with, or all the stuff that's happened lately. I suddenly like that introduction—talking to someone who doesn't know Phil Chi, Kavin Zhou, or Caroline Xu at all, I get to talk about my own stuff first. I still haven't found a rhyme for the first line of my new song, and there's no rush to send it to anyone to ask. I'll get to the station first, buy something hot to eat, and tomorrow I'll go meet the people at the new rehearsal space."
          ],
          "clue": "c24",
          "recollectionAt": 8,
          "wordCount": 1054,
          "recallCaption": "Late September"
        }
      ]
    }
  ],
  "clues": {
    "c1": {
      "label": "That Blue Umbrella",
      "who": "lin",
      "question": "You could've taken the covered corridor, so why were you still waiting by the entrance?",
      "reply": [
        "The rain wasn't heavy, and you could easily walk back through the covered corridor. But I just stood by the entrance, checking my phone over and over.",
        "He ran over from the third teaching building, set the umbrella down by my feet, and said he still had things to do. Later I saw him run off in the rain himself."
      ],
      "choice": [
        "You just wanted to wait for him, right? That's nothing to be embarrassed about.",
        "He went out of his way to give you the umbrella, so he must like you."
      ],
      "after": [
        [
          "You noticed that, huh?",
          "I thought I was hiding it pretty well."
        ],
        [
          "You feel the same way, right?",
          "But he's nice to everyone else too, so I couldn't be sure."
        ]
      ]
    },
    "c2": {
      "label": "The C On The Photo",
      "who": "zhou",
      "question": "Who's C? Why didn't you just write their full name?",
      "reply": [
        "I took that photo the day of the sharing session. I printed an extra copy in the darkroom, the one of her looking down at her script.",
        "I wrote her full name on the back at first, then erased it, leaving only a C. When Caroline Xu came to pick up her photos, I didn't bring it up at all."
      ],
      "choice": [
        "You only wrote a single letter—were you scared other people would figure it out, or scared she would?",
        "It's better not to say things out loud. At least no one feels awkward that way."
      ],
      "after": [
        [
          "I was scared she would figure it out.",
          "If someone else asks, I can make up a random excuse, but if she asks, I'd definitely spill the truth."
        ],
        [
          "That's what I thought back then.",
          "But after Caroline left, she never talked to me again, so it didn't turn out any less awkward anyway."
        ]
      ]
    },
    "c3": {
      "label": "Hot Cocoa Without Whipped Cream",
      "who": "shen",
      "question": "He tested the temperature for you and remembered Phil Chi's dietary preference. What went through your mind back then?",
      "reply": [
        "I took a detour to go with him to buy hot cocoa. He felt the side of the two cups, and passed me the one that was the perfect temperature.",
        "When he ordered the second cup, he asked them to hold the whipped cream, saying Phil Chi can't have it because her stomach's sensitive."
      ],
      "choice": [
        "You thought he specially picked that nice warm cup for you, but the whole walk back he was just talking about Phil Chi.",
        "Don't think too much. He was just being polite."
      ],
      "after": [
        [
          "Yeah.",
          "I still had to reply to his rambling, or he would've noticed I was upset."
        ],
        [
          "It's easy for you to say.",
          "I knew all that, but I was still so happy in that moment."
        ]
      ]
    },
    "c4": {
      "label": "The Second Ticket",
      "who": "xu",
      "question": "When Phil Chi asked you for the second ticket, what were you thinking?",
      "reply": [
        "The anniversary event tickets got handed out, and I gave the second one to her, originally planning to say a few words to her then.",
        "She asked if she could reserve the other spot for Kavin Zhou, saying he also wanted to go. I said yes, and even offered to help pick good seats for them."
      ],
      "choice": [
        "You wanted to spend time alone with her, but the first thing she did was mention Kavin Zhou. That's hard to respond to.",
        "You already had the ticket, that's the perfect time to make a move!"
      ],
      "after": [
        [
          "Yeah. I even replied okay right away.",
          "I typed it so fast, like I had the response pre-written."
        ],
        [
          "She's bringing Kavin Zhou.",
          "What \"perfect time\" are you even talking about?"
        ]
      ]
    },
    "c5": {
      "label": "Residence Program Shortlist",
      "who": "lin",
      "question": "You applying for that residence program, was that your own decision, or did you do it because of Caesar Huo?",
      "reply": [
        "I submitted my own application on September 15. Caesar Huo shared the open call in the group chat before, just saying it seemed like a good fit for me.",
        "The city the program is in is different from where he's going for his exchange. I never told Kavin Zhou I applied, not once."
      ],
      "choice": [
        "The application's your business. But you didn't tell him, so were you also waiting for him to ask about your work on his own?",
        "When you have a crush on someone, you should tell them something big like this before you leave, right?"
      ],
      "after": [
        [
          "A little bit.",
          "Every time he asks if I've eaten dinner, I keep wondering why he doesn't ask what I've been busy with."
        ],
        [
          "I wanted to tell him, but not to get his approval though.",
          "What if he tells me I can't go?"
        ]
      ]
    },
    "c6": {
      "label": "\"She wants to not be disturbed right now\"",
      "who": "zhou",
      "question": "That line Caroline Xu forwarded, why did you take it as Phil Chi rejecting you?",
      "reply": [
        "I thought she was sick of me at the time. Caroline told me to let her focus on her own stuff first, and not to push her.",
        "I typed Are you avoiding me, then deleted it."
      ],
      "choice": [
        "But none of that came directly from Phil Chi. You never asked her yourself, right?",
        "My roommate said it, so it must be roughly what she meant."
      ],
      "after": [
        [
          "I never asked.",
          "But what if she said she doesn't want to see me?"
        ],
        [
          "That's what I was scared of back then.",
          "Caroline lives with her, so she must know her way better than I do."
        ]
      ]
    },
    "c7": {
      "label": "A Message Spoken For Her",
      "who": "shen",
      "question": "You knew Phil Chi never told you to say that. Why did you pass that message on to Kavin Zhou anyway?",
      "reply": [
        "Phil Chi only asked me to help check her application form; she never told me to say anything else to Kavin Zhou.",
        "I told Kavin Zhou she didn't want to be disturbed right then, and told him not to go pester her. I definitely added my own thoughts into that message."
      ],
      "choice": [
        "Phil Chi never said any of that, but you made Kavin Zhou think it was exactly what she wanted.",
        "You were trying to help. It's not that big of a deal."
      ],
      "after": [
        [
          "... Yeah.",
          "If he goes and asks Phil Chi directly, he'll know I made that all up."
        ],
        [
          "No. Don't make excuses for me.",
          "I just didn't want him to go find her back then."
        ]
      ]
    },
    "c8": {
      "label": "The half-beat pause in the lyrics",
      "who": "xu",
      "question": "What were you thinking about when she added that half-beat pause? And why did you end up discussing it with Caroline Xu later?",
      "reply": [
        "She insisted on keeping that half-beat. I tried singing it once, and she looked up at me. Right then, I wondered if she might like me even a little bit.",
        "I talked over the performance tickets with Caroline Xu privately; I never asked Phil Chi or Kavin Zhou about it."
      ],
      "choice": [
        "You two already arranged the whole schedule, and Phil Chi doesn't even know about it, right?",
        "She already gets you so well, just put in a little more effort!"
      ],
      "after": [
        [
          "I have no idea.",
          "I even planned out exactly what I was going to say. I never thought she might not want to hear it at all."
        ],
        [
          "I used to think it was going to work out soon too.",
          "But then she was talking to me seriously about the lyrics, and my head was somewhere else entirely."
        ]
      ]
    },
    "c9": {
      "label": "The second page of the letter",
      "who": "lin",
      "question": "Why did you write that you would be leaving for three months in the love confession letter?",
      "reply": [
        "I was scared that if he agreed and then found out I'd be gone for three months, he'd think I hid it from him on purpose. So I wrote about the workshop on the second page.",
        "I folded it up, but I never gave it to him before the gala."
      ],
      "choice": [
        "Then give him both pages together. Don't make him guess.",
        "If he likes you, he'll wait for you."
      ],
      "after": [
        [
          "That's easy for you to say.",
          "What if after reading it all he only asks when I'm leaving?"
        ],
        [
          "If he's willing to wait, I'd be so happy.",
          "But I don't even know if he likes me yet."
        ]
      ]
    },
    "c10": {
      "label": "The photo shop delay",
      "who": "zhou",
      "question": "It's true you went to pick up the photos, but why did you make the clerk keep trimming the edges afterwards?",
      "reply": [
        "I walked in at 20:07; the receipt is here. The photos were already wrapped up, but I asked the clerk to trim the edges one more time.",
        "I didn't pay for the photo album until 20:21, and left at 20:22. When I got back to school, there were already people crowding downstairs."
      ],
      "choice": [
        "Apart from the receipt, tell me why you dragged your feet and wouldn't leave back then.",
        "Isn't proving I wasn't at the scene enough?"
      ],
      "after": [
        [
          "I was scared to face her.",
          "I was afraid she'd say she was leaving the second she opened her mouth, or bring up Caesar Huo. The photos were all ready, but I kept making up things to stall."
        ],
        [
          "Let's leave that part about picking up the photos for now.",
          "I kept the receipt and all the payment records."
        ]
      ]
    },
    "c11": {
      "label": "The argument at the stairwell",
      "who": "shen",
      "question": "What on earth were you two fighting about back then?",
      "reply": [
        "She asked me why I passed messages to Kavin Zhou for her without asking. So I asked her, since she knew I liked Kavin Zhou, why she still made me help her pass the tickets and pick up the photos.",
        "I went downstairs at 20:05, registered at the equipment room at 20:06, and didn't come out until 20:22. Two people from the school journal came to pick up items halfway through."
      ],
      "choice": [
        "First tell me what happened after you left. Who was in the equipment room with you?",
        "You two fought that badly, so it's normal that other people would suspect you."
      ],
      "after": [
        [
          "The custodian, and those two school journal students who came to pick up things later.",
          "I was messing around with batteries and memory cards the whole time. I didn't walk out until 20:22."
        ],
        [
          "So you think it was me too?",
          "I went straight to the equipment room after heading downstairs. You can ask everyone who was there at the time."
        ]
      ]
    },
    "c12": {
      "label": "The strange noise at 20:19",
      "who": "xu",
      "question": "What was that sound in the recording? Did you see anything when it happened?",
      "reply": [
        "I have no idea what that noise was. When I got out, people were already running towards the stairs. I didn't see what the second floor looked like.",
        "The recording starts with us doing a test play. At 20:17, she said she was going out to take a call; then there's that strange noise, and a few seconds later someone shouted."
      ],
      "choice": [
        "Let's write down these timestamps first. We'll figure out the cause when we get the test results.",
        "Isn't that noise already enough to prove something?"
      ],
      "after": [
        [
          "Okay.",
          "The original file is still here. All the sounds before and after are preserved."
        ],
        [
          "Prove what exactly?",
          "I've listened to it so many times, and I still can't tell what made that noise."
        ]
      ]
    },
    "c13": {
      "label": "The workshop phone call",
      "who": "lin",
      "question": "Was that phone call related to Caesar Huo?",
      "reply": [
        "At 20:17, the workshop called from an out-of-town landline, said I passed the preliminary review, and told me to submit supplementary materials.",
        "The rehearsal room was too noisy, so I walked up to the second floor with my phone to find a quieter spot."
      ],
      "choice": [
        "Let's check the call and application records first. You don't need to show the letter to anyone else.",
        "If you want to clear your name, just release the whole application. Do it quickly."
      ],
      "after": [
        [
          "Okay, thanks.",
          "I was worried you'd make me hand over that letter too."
        ],
        [
          "There's still my unpublished work in there.",
          "Do I really have to post everything?"
        ]
      ]
    },
    "c14": {
      "label": "The 20:21 payment record",
      "who": "zhou",
      "question": "The receipt only proves you were in the shop at 20:07. Why do you still need the payment record?",
      "reply": [
        "That later payment was for the photo album, at 20:21. I was standing right at the counter to pay for it.",
        "When I got back to school, the security guard and a few students were already there. The group chat said I was the first one to arrive. I saw that, but I didn't say anything to correct it."
      ],
      "choice": [
        "The payment was at 20:21, so you got back later, and you weren't the first person on the scene.",
        "Everyone was worried about her. That little misunderstanding doesn't matter, right?"
      ],
      "after": [
        [
          "Yeah, I wasn't the first one.",
          "When I arrived, the security guard and those students were already there."
        ],
        [
          "... Let's just talk about the timestamps first.",
          "Paid at 20:21, left the shop at 20:22."
        ]
      ]
    },
    "c15": {
      "label": "The deleted angry line",
      "who": "shen",
      "question": "Why didn't you completely delete that crossed-out sentence?",
      "reply": [
        "There's a line I deleted in the document revisions: \"If only Kavin Zhou and I were the only ones here tonight.\"",
        "I deleted it once, then undid the delete. From 20:06 to 20:22 I was in the equipment room; the custodian's log and those two students who came to pick up items can all confirm that."
      ],
      "choice": [
        "That line is harsh, but you can't use it as proof that you did something.",
        "Why did you even keep such a cruel line?"
      ],
      "after": [
        [
          "It's good that you can look at it objectively.",
          "Now every time I see that line, it takes me right back to that night."
        ],
        [
          "I do want to delete it.",
          "But deleting it would be like I never thought that at all, and I know I did."
        ]
      ]
    },
    "c16": {
      "label": "Beyond the excerpt",
      "who": "xu",
      "question": "The recording wasn't edited, so why do you still think you weren't telling the whole truth?",
      "reply": [
        "The recording isn't cut; the strange noise and the shout are both there.",
        "Earlier someone asked what we talked about before the test play, and I only said \"the performance\". I left out the part where she just rejected me."
      ],
      "choice": [
        "I get what's going on with the recording now. You left that part out because you didn't want anyone to know you got rejected?",
        "I already handed in the recording, so there's no need to explain more, right?"
      ],
      "after": [
        [
          "Yeah.",
          "Who would want to tell every single person they just got turned down?"
        ],
        [
          "Let's wrap this part up for now.",
          "I have a backup of the file, just come find me when you need it."
        ]
      ]
    },
    "c17": {
      "label": "The guardrail maintenance record",
      "who": "lin",
      "question": "Now that we confirmed it was an accident, what stuff can we let everyone know?",
      "reply": [
        "The school announced that the corridor guardrail's fasteners failed. The phone call, the recording, and several people's timelines have all been cross-checked already.",
        "We can post the maintenance records and timelines. But I don't want the love letter, application, and chat logs posted in the group chat."
      ],
      "choice": [
        "Fine, we won't make the letter and private chats public.",
        "Everyone cares about this, so full transparency is the right way to go."
      ],
      "after": [
        [
          "Good.",
          "I really don't want to walk around campus later and have everyone know what I wrote in that letter."
        ],
        [
          "But I already said I don't want them made public.",
          "Did you not hear me, or do you just think this doesn't matter?"
        ]
      ]
    },
    "c18": {
      "label": "The full name",
      "who": "zhou",
      "question": "Did you write the full name on the photo? What else are you planning to say to her?",
      "reply": [
        "I did. Both words of Phil Chi are there.",
        "I want to tell her I like her. It's just those few words, but I still don't dare to actually send it."
      ],
      "choice": [
        "It's fine as long as you say it clearly. Whatever her response is, you have to wait for her to decide.",
        "You've been so sincere about this, so she owes you a proper answer."
      ],
      "after": [
        [
          "Mm.",
          "Just thinking about waiting for her reply is already making me super nervous."
        ],
        [
          "I want to know the answer soon too.",
          "But she's still recovering right now, so I can't keep pestering her."
        ]
      ]
    },
    "c19": {
      "label": "The exact words of the message passed",
      "who": "shen",
      "question": "Did you make things about passing that message clear to Phil Chi? What did she say back to you?",
      "reply": [
        "I sent the screenshots to Phil Chi. I circled every line to mark which one was her original, and which one I added myself.",
        "She hasn't replied to me yet."
      ],
      "choice": [
        "Wait for her reply first, don't send a ton of messages one after another.",
        "You already apologized, so she should have replied by now."
      ],
      "after": [
        [
          "How did you know I still wanted to send more?",
          "I just typed out a whole long message, but I haven't hit send yet."
        ],
        [
          "Do you also think we've waited way too long?",
          "Never mind, she's still not fully recovered; she probably doesn't have time to check the messages."
        ]
      ]
    },
    "c20": {
      "label": "Signature and goodbye",
      "who": "xu",
      "question": "You still left her name on the program list. Did you do that hoping she'd come back?",
      "reply": [
        "At first maybe a little bit. I hoped that when she saw her name, she'd think of me.",
        "Later when we revised the program list, someone asked me how to write the lyricist's name, so I just wrote Phil Chi. She really is the one who wrote the lyrics."
      ],
      "choice": [
        "She wrote the lyrics, so it's only right that her name stays on there.",
        "You're such a great person, she might regret it later."
      ],
      "after": [
        [
          "Mm, all the revised versions she did are still saved.",
          "She wrote those lines in the chorus too."
        ],
        [
          "Stop comforting me like that.",
          "It sounds like I just kept her name there waiting for her to regret everything."
        ]
      ]
    },
    "c21": {
      "label": "Separate the two things",
      "who": "lin",
      "question": "What did the workshop say? Has Kavin Zhou reached out to you lately?",
      "reply": [
        "The workshop said the online interview can be pushed back a week, and the exact time will depend on how the reexamination goes.",
        "Kavin Zhou said he wants to talk, but I haven't replied yet. These two things have been tangled up in my head nonstop."
      ],
      "choice": [
        "First lock in the dates for the reexamination and the workshop, then talk to him slowly later.",
        "If you like him, just stay here, don't overthink it."
      ],
      "after": [
        [
          "Yeah, that's the only way.",
          "I get tired so easily lately; I lose all my energy after chatting for a bit."
        ],
        [
          "But I still really want to go.",
          "I revised the materials so many times, I finally got this opportunity."
        ]
      ]
    },
    "c22": {
      "label": "The second movie ticket",
      "who": "zhou",
      "question": "How do you plan to ask her out this time?",
      "reply": [
        "I've opened and closed the movie ticket page so many times, but I didn't buy it ahead this time.",
        "I just sent her a message asking if there's any movie she wants to watch after the reexamination, and what day works for her."
      ],
      "choice": [
        "Wait for her reply first, don't buy the ticket ahead then say \"I just have an extra ticket\".",
        "Buy the ticket first, then she can't really say no."
      ],
      "after": [
        [
          "How did you even know I was gonna say that?",
          "I almost sent that exact line again."
        ],
        [
          "What if she just doesn't know how to reject you politely?",
          "Then it'd be super boring sitting together like that."
        ]
      ]
    },
    "c23": {
      "label": "A photo with no one in it",
      "who": "shen",
      "question": "Do you still think of him sometimes? What's your plan for how to get along with Phil Chi now?",
      "reply": [
        "I dug out the old photos; when I see the ones he took, I still pause to look for a little while.",
        "For Phil Chi, I first asked if she'd like to come to my photo exhibition, I didn't say we have to make up right away."
      ],
      "choice": [
        "It's normal to still think about him, don't beat yourself up for it.",
        "If I was over him, I shouldn't be thinking about him at all."
      ],
      "after": [
        [
          "Hearing you say that makes me feel so much better.",
          "I thought if I still thought about him after all this time, that made me kind of pathetic."
        ],
        [
          "So I guess I'm not over him yet.",
          "You can't just decide to forget someone and have it happen that easily, right?"
        ]
      ]
    },
    "c24": {
      "label": "The song with no recipient",
      "who": "xu",
      "question": "Did you post that new song yet? Has Phil Chi listened to it?",
      "reply": [
        "I sent the song to the band group chat; I didn't send it to her privately. A little while later, she replied with two words: Sounds good.",
        "I didn't press her for more after that, and I didn't send any other versions."
      ],
      "choice": [
        "She said it sounds good, so let's leave it there for now. Don't rush to send another follow-up line.",
        "If you show your feelings a few more times, maybe she'll change her mind."
      ],
      "after": [
        [
          "I was gonna ask which line she liked the most.",
          "But after seeing what you said, I put my phone down."
        ],
        [
          "What else am I supposed to say anyway?",
          "She already replied, it's just not the answer I was hoping for."
        ]
      ]
    }
  },
  "endings": {
    "open": {
      "title": "Sending September to tomorrow",
      "tag": "Ending 01 · The Open Letter",
      "body": [
        "They only released the authorized timelines, maintenance records, and necessary evidence. They didn't hand over the love letter, residency application, or private chats to the gawking crowd. When the rumors died down, every single one of them was finally rid of the fake role that other people forced on them.",
        "Phil Chi accepted the residency spot, and the exact departure date will be negotiated based on her recovery progress. She first asked Caroline Xu if he wanted to come to her photo exhibition, and also accepted Kavin Zhou's invitation to go see that rescheduled movie with him later. The first question Kavin Zhou asked her was \"What do you want to write?\" instead of \"When are you coming back?\"",
        "Caesar Huo posted a song with no recipient from his train. That September didn't predestine anyone's future, but Phil Chi finally handed over both pages of her letter."
      ]
    },
    "quiet": {
      "title": "Blank space is also an answer",
      "tag": "Ending 02 · The Postponed Letter",
      "body": [
        "The truth was clarified, but Phil Chi asked the workshop to reserve her spot, so she could prioritize her recovery and schoolwork first. She's not starting a relationship right now, and she doesn't demand that anyone forgives or gets forgiven immediately.",
        "Kavin Zhou stopped constantly giving her unasked-for care, Caroline Xu kept working on her photography exhibition, and Caesar Huo left campus as planned. Every invitation needs to be asked for anew; no one gets to rely on the default rule of \"this is just how we've always been\".",
        "Some relationships don't get fixed after one single conversation, but they got the breathing room they needed. Taking things slow is also an answer."
      ]
    },
    "distance": {
      "title": "Through a sheet of glass",
      "tag": "Ending 03 · The Sealed Letter",
      "body": [
        "The cause of the accident was still confirmed, but the constant invasive questioning and making assumptions for each other made them pull back all their other private pages. Caroline Xu sealed her revision records, Caesar Huo stopped adding the conversations outside the recorded excerpt, and Phil Chi put that two-page letter away.",
        "There's no new malice, just exhaustion. When every single word you say feels like it's being interrogated, sincerity will shrink back inside its parentheses.",
        "You found out what happened, but you never kept asking them what they were willing to give up. Next time, listen all the way first, then ask \"May I know?\""
      ]
    }
  },
  "ui": {
    "nav": [
      [
        "diary",
        "▤",
        "Diaries"
      ],
      [
        "chat",
        "◌",
        "Chats"
      ],
      [
        "clues",
        "⌕",
        "Clues"
      ],
      [
        "people",
        "♧",
        "People"
      ]
    ],
    "helpTitle": "Talk about the present day first, then go back to the past",
    "help": [
      "You are a detective that Phil Chi reached out to for help, and you are only referred to as \"you\" in the game. You are in a different location, and will never meet the four characters offline; you find the truth of what happened through online messages and the records they send you.",
      "① First greet them and talk through the five events of the current day, then unlock the first diary of the day; you don't need to find any clues before you can start talking.",
      "② After you check the eight topics in Chapter 1, you will unlock the past memories; Chapter 2 and Chapter 3 still follow the rule of chatting first, then unlocking the diaries.",
      "③ The three chapters in order are the events of the day, past memories, investigation conclusions and what comes after; there are eight diaries in each chapter, all written by the characters for themselves.",
      "Your progress is saved in your current browser. Old clues, choices, endings, and read pages are all preserved, so you can pick up from the unfinished chapter after refreshing."
    ],
    "finalQuestion": "The facts are already clear now. How do you want to sort out this September?",
    "finalChoices": [
      "Only release the authorized facts, and let them finish their own confessions, apologies, and goodbyes",
      "Pause the questioning first, leave time for recovery, residency plans, and friendships",
      "Make all private pages public, let everyone judge for themselves"
    ],
    "wrong": "Read the diaries first, find the clues that belong to this case."
  },
  "recalls": {
    "1": {
      "lin": [
        {
          "npc": "That letter is still here. I just pulled it out to look at it again, and I still don't dare to give it to him.",
          "reply": "When did you first decide you wanted to write it to him?"
        },
        {
          "npc": "I can't pinpoint the exact day. It was raining on September 12, and I was already waiting for him to finish class back then.",
          "reply": "Did you keep the stuff you wrote those few days?"
        }
      ],
      "zhou": [
        {
          "npc": "I've wanted to give her the photo for ages, I just never got the chance.",
          "reply": "When did you get the extra copy printed?"
        },
        {
          "npc": "After the sharing session, in the darkroom. The photo of her looking down at her draft.",
          "reply": "Can you show me the diary you wrote that day?"
        }
      ],
      "shen": [
        {
          "npc": "I've wanted to ask her for so long, I never said it. All of that just spilled out when we fought that day.",
          "reply": "What happened before that?"
        },
        {
          "npc": "I went to buy hot cocoa with Kavin Zhou once. It sounds kind of silly to say it out loud, but I've been upset over that for ages.",
          "reply": "That's not silly at all. Did you write that down that day?"
        }
      ],
      "xu": [
        {
          "npc": "When I was writing songs with her, I really thought I had a chance.",
          "reply": "When did you start feeling that way?"
        },
        {
          "npc": "I can't remember. Anyway, when I sent out the performance tickets, I was already planning to tell her. But then she asked for an extra ticket to give to Kavin Zhou.",
          "reply": "Did you keep the stuff you wrote that day?"
        }
      ]
    },
    "2": {
      "lin": [
        {
          "npc": "The school released the results. I laid down right after I read it. It was more tiring than I expected.",
          "reply": "Do you want to rest first?"
        },
        {
          "npc": "I'm fine, I can still chat. It's just that someone else asked me for that letter again, and it's annoying.",
          "reply": "Put the letter aside for now. Show me today's records."
        }
      ],
      "zhou": [
        {
          "npc": "I've had Phil Chi's chat window open forever, but I didn't type a single word out.",
          "reply": "What do you want to say to her?"
        },
        {
          "npc": "I have so much I want to say. And Caroline too, I have no idea how to start. I wrote for a long time yesterday, can you take a look at it for me?",
          "reply": "Send it over."
        }
      ],
      "shen": [
        {
          "npc": "I just flipped through old photos, and there's one of Phil Chi and I standing together, both of us smiling happily.",
          "reply": "Have you talked to her lately?"
        },
        {
          "npc": "A little bit. I sent her those few message screenshots, but she hasn't replied yet.",
          "reply": "Wait a little longer. Can you also show me that other page you wrote later?"
        }
      ],
      "xu": [
        {
          "npc": "The program list is finally finalized. I still have to pack my luggage, and there's literally no space to step in my room right now.",
          "reply": "Haven't you finished packing up yet?"
        },
        {
          "npc": "Nope, there's a whole stack of sheet music. All the ones she edited are in there too. I wrote a little bit these past two days, do you wanna see it?",
          "reply": "Send it over, let me take a look."
        }
      ]
    }
  },
  "narrativeOrder": "incident-first-v1",
  "intel": [
    {
      "id": "r00",
      "ch": 0,
      "kind": "background",
      "status": "Background Introduction",
      "source": "Mr Rabbit",
      "title": "What happened that night",
      "lead": "I'm Mr Rabbit. Let me fill you in on this whole thing first.",
      "body": [
        "On the night of September 16, Phil Chi fell from the second-floor connecting corridor of the Nanchuan University literature building. She's recovering now after being rescued. Kavin Zhou, Caroline Xu, and Caesar Huo are all tied to what she went through that night. You're working on her behalf, figuring out the full story through online communication.",
        "Say hi to them first; you can use the clues from the diary to ask questions too. Whatever you end up talking about, I'll help you dig up the related info after."
      ],
      "question": "I'll go chat with them first.",
      "response": [
        "Alright. For anything you bring up in conversation, I'll send you the related details later."
      ],
      "related": "lin",
      "trigger": {
        "background": true
      }
    },
    {
      "id": "r01",
      "ch": 0,
      "kind": "rumor",
      "status": "Unverified",
      "source": "Campus Anonymous Forum · Repost of an anonymous thread",
      "title": "\"Who was she going to meet that night?\"",
      "lead": "You just asked about that phone call Phil Chi got, and I found a post that's also speculating who she was heading upstairs to see that night.",
      "body": [
        "Anonymous: That girl from the literature building, did she really go upstairs just to take a call? I heard she was supposed to meet someone there.",
        "Reply 17: Who was she meeting with?",
        "Reply 18: No idea, someone from the dorm next door said it.",
        "Reply 26: Stop reposting this, Phil Chi hasn't even talked about any of it yet."
      ],
      "question": "Was the person who posted this at the scene?",
      "response": [
        "They didn't say. Someone asked where they were standing, and they haven't replied at all since then.",
        "I saved it first, because I was scared I wouldn't be able to find it again later."
      ],
      "related": "lin",
      "trigger": {
        "answer": "c13"
      }
    },
    {
      "id": "r02",
      "ch": 0,
      "kind": "rumor",
      "status": "Unverified",
      "source": "Year Group Chat · Multiple forwarded chat snippets",
      "title": "\"The first person on the scene\" got a different name",
      "lead": "Kavin Zhou just told you where he was that night, right? These two screenshots from the group list two different names as \"the first person to arrive\".",
      "body": [
        "Forwarded Version A: I heard the first person to get there was a guy from the photography club.",
        "Forwarded Version B: It was Kavin Zhou, he was waiting for her the whole time downstairs.",
        "Group reply: There were obviously security guards and other students there first. Who of you actually saw this with your own eyes?",
        "Neither forwarded version has the original message's context attached."
      ],
      "question": "Keep both versions, don't just save the second one.",
      "response": [
        "I kept both of them.",
        "The weird thing is, the second one spread way more widely. Right now if you search her name, that's the only line that pops up."
      ],
      "related": "zhou",
      "trigger": {
        "opening": "zhou"
      }
    },
    {
      "id": "r03",
      "ch": 0,
      "kind": "student",
      "status": "Student Self-Report · Pending Verification",
      "source": "Photography Club Members · Timeline Draft",
      "title": "A receipt is blocking the whole timeline",
      "lead": "Speaking of Kavin Zhou's payment record, someone in the photography club is also stuck on this exact time period. I'll send you their draft.",
      "body": [
        "Compiler: Someone mentioned Kavin Zhou went to the off-campus photo shop that night. You have to ask separately about the times he arrived, paid, and left, don't just fill all of them in as a single time point.",
        "Following reply: Do you have the original receipt? If you only cut out one time, you can't tell which action that's even for.",
        "Compiler: Still waiting for it. Leave that line blank for now."
      ],
      "question": "Who filled out this form?",
      "response": [
        "A few people from the photography club group put it together; the school didn't make it.",
        "Some of the boxes are stuff they heard from others, some are their own notes, and they didn't even color-code them properly yet."
      ],
      "related": "zhou",
      "trigger": {
        "answer": "c14"
      }
    },
    {
      "id": "r04",
      "ch": 0,
      "kind": "tabloid",
      "status": "Unofficial Tabloid · Speculation",
      "source": "Corridor Night Talk · Anonymous Student Tabloid",
      "title": "That ten-second clip that keeps getting passed around",
      "lead": "You just asked about the noise in the audio recording. I found a tabloid that only posted a ten-second clip, and people in the comments are begging for the content before that part.",
      "body": [
        "Title: In that practice room that night, were they really just talking about the performance?",
        "Tabloid text: A recording is being shared around several club groups. Who else was in the room before Phil Chi left? What were the two of them even talking about before that?",
        "Comment: Why does it start here, where's the beginning?",
        "Comment: Asking for the original file, it's gotten all garbled being passed around so much."
      ],
      "question": "Did the tabloid get the full recording?",
      "response": [
        "They didn't post the full thing in the text, only the clip.",
        "I asked where the original file was, and they just replied \"still putting it together\"."
      ],
      "related": "xu",
      "trigger": {
        "answer": "c12"
      }
    },
    {
      "id": "r05",
      "ch": 0,
      "kind": "student",
      "status": "Student Self-Report · Pending Verification",
      "source": "School Journal Club Chat · Equipment Checkout Memories",
      "title": "\"I saw her in the equipment room\"",
      "lead": "When you were asking Caroline Xu about that night, someone in the school journal chat mentioned seeing her in the equipment room. I saved these few messages.",
      "body": [
        "Student A: I went to get a memory card that night, and Caroline Xu was in the equipment room.",
        "Student B: I also remember her organizing the batteries. But I didn't check my phone, so don't go by my guess for the exact time.",
        "Student A: The admin has the sign-in log, go ask for that.",
        "Right after these few messages were sent, that old form that said \"she was on the second floor the whole time\" got recalled."
      ],
      "question": "Can you still get the recalled form?",
      "response": [
        "I saved the old version.",
        "The new version deleted that whole section and didn't explain why they changed it. It's even more confusing now."
      ],
      "related": "shen",
      "trigger": {
        "answer": "c15"
      }
    },
    {
      "id": "r06",
      "ch": 0,
      "kind": "rumor",
      "status": "Old Thread Tracking · Unverified",
      "source": "Campus Anonymous Forum · Original Post Updates",
      "title": "The original post is gone, but screenshots are still being shared",
      "lead": "Right after you asked about the audio clip, I went and checked the earliest rumors by chance. The original post is gone, but screenshots are still being passed around.",
      "body": [
        "Original post location: Content is no longer visible.",
        "Subsequent reposts: Why was it deleted? Did something new come up?",
        "Reply: It's probably the poster deleted it themself, y'know.",
        "Mr Rabbit Archive Note: No reason for the deletion was found."
      ],
      "question": "Before the post got deleted, did anyone add new info about the scene?",
      "response": [
        "Nope. The last few replies were all asking the same thing: who actually saw this happen with their own eyes?",
        "I put all the reposts in order, and each time it spread it sounded more like a confirmed fact, but at the very start there was only the line \"I heard that...\""
      ],
      "trigger": {
        "answer": "c16"
      }
    },
    {
      "id": "r07",
      "ch": 1,
      "kind": "tabloid",
      "status": "Unofficial Tabloid · Speculation",
      "source": "Corridor Night Talk · Issue 2",
      "title": "Four people, drawn into a single relationship diagram",
      "lead": "Talking about those two tickets reminded me of this tabloid. It drew all the stuff: the performance they went to together, the umbrella they lent each other, all mapped out with arrows.",
      "body": [
        "Page title: One letter, two tickets, and the September that never got finished.",
        "Text beside the diagram: Phil Chi and Kavin Zhou were always hanging out, and Caroline Xu kept passing messages between them; that song Caesar Huo collaborated on with Phil Chi—who exactly was it written for?",
        "Comment: Do you really need to draw a \"romance\" line for every two people who work on projects together?",
        "Comment: Who drew all those arrows on the chart? Did they even ask any of the people in it?"
      ],
      "question": "Did anyone confirm this relationship diagram is right?",
      "response": [
        "No signature, and it doesn't say who they asked.",
        "They don't even know if the two tickets ever got used, and they already paired everyone up."
      ],
      "trigger": {
        "answer": "c4"
      }
    },
    {
      "id": "r08",
      "ch": 1,
      "kind": "student",
      "status": "Classmate Recollection · Pending Verification",
      "source": "Classmates · Excerpts from private messages",
      "title": "\"She was preparing her applications really early on\"",
      "lead": "You just brought up Phil Chi's applications, and one classmate left a message a while back saying she'd been preparing for ages.",
      "body": [
        "Classmate: Phil Chi was always taking her drafts to the library before, she edited her application materials way more than once.",
        "Classmate: Everyone's saying now she last-minute decided to go off with someone, but she was working on those applications for ages.",
        "Reply: Which workshop was it?",
        "Classmate: That's private material she never shared publicly, I'm not posting that for her."
      ],
      "question": "That out-of-town call might be related to the applications too.",
      "response": [
        "That could be it.",
        "What she actually heard on the phone that night, we still have to ask her directly."
      ],
      "related": "lin",
      "trigger": {
        "answer": "c5"
      }
    },
    {
      "id": "r09",
      "ch": 1,
      "kind": "tabloid",
      "status": "Unofficial Tabloid · Out-of-context Snippet",
      "source": "Corridor Night Talk · Excerpt from comment section screenshot",
      "title": "A screenshot cropped to cut all context",
      "lead": "When you asked about that message Kavin Zhou passed along, I found this screenshot, only the three words \"don't push her\" are left, everything before and after got cropped out.",
      "body": [
        "Repost caption: She made it so clear, how does he still not get it?",
        "Comment: Did Phil Chi say this line?",
        "Comment: Are there any lines before or after this?",
        "The original person who reposted it didn't share the full conversation."
      ],
      "question": "Don't treat this line as something Phil Chi actually said for now.",
      "response": [
        "Yeah, I couldn't find any record of her actually saying that either.",
        "There are so many different versions floating around now, they don't even have the same punctuation."
      ],
      "related": "shen",
      "trigger": {
        "answer": "c6"
      }
    },
    {
      "id": "r10",
      "ch": 1,
      "kind": "student",
      "status": "Classmate Recollection · Pending Verification",
      "source": "Band Members · Club Group Messages",
      "title": "That song is not a \"public love confession\"",
      "lead": "Talking about that song they edited together, a band member replied to the tabloid before. I found those exact messages.",
      "body": [
        "Band Member: That was a collaborative piece we all worked on, not some big public confession you people made up. We practiced it dozens of times.",
        "Classmate: I don't know what they talked about in private. But stop using rehearsal photos paired with random dialogue you made up.",
        "Reply: So what's their actual relationship then?",
        "Band Member: Dude, go ask them yourself."
      ],
      "question": "The collaboration is real, everything else you have to ask about separately.",
      "response": [
        "Exactly. That photo originally had the rehearsal date written under it, but by the time it got to the tabloid there was nothing left except the two people's names."
      ],
      "related": "xu",
      "trigger": {
        "answer": "c8"
      }
    },
    {
      "id": "r11",
      "ch": 1,
      "kind": "notice",
      "status": "School Update · Conclusion Not Released Yet",
      "source": "Nanchuan University · Investigation Progress Notice",
      "title": "The school says all verification materials are collected",
      "lead": "You guys are starting to talk about what happens next. I'll leave the school's previous progress notice here first; when we get to the actual results later, we can check the corresponding documents then.",
      "body": [
        "Statement on the Investigation Progress of the Literature Building Incident",
        "The call logs, original audio recordings, equipment checkout records, and statements from all related parties have been collected, and cross-verification is currently underway.",
        "Inspection of the connecting corridor facilities in the literature building is being conducted at the same time. The full results will be announced separately.",
        "Please do not spread any unverified personal information or private chat content."
      ],
      "question": "The conclusion isn't out yet, wait for the official results first.",
      "response": [
        "Yeah, this only covers the progress so far.",
        "I'll keep an eye on the announcement board, and send you the new one as soon as it's posted."
      ],
      "trigger": {
        "chapter": 2
      }
    },
    {
      "id": "r12",
      "ch": 2,
      "kind": "notice",
      "status": "Official School Announcement",
      "source": "Nanchuan University · September 23 Announcement",
      "title": "Incident Statement Regarding the Literature Building Event",
      "lead": "You just talked with Phil Chi about the maintenance records and public documents. This is the school's official announcement, covering the exact same thing she mentioned.",
      "body": [
        "Nanchuan University Public Announcement Regarding the September 16 Literature Building Incident",
        "After verifying the call records, original audio, whereabouts of all involved persons, and facility maintenance documents, it has been confirmed that this incident was an accident caused by the failure of the corridor guardrail fixtures.",
        "The investigation found no evidence supporting the online rumors that this incident was caused by chasing or conflicts. The related timeline and verification results are included in the investigation summary.",
        "The school will continue to arrange student support services and facility safety inspections. Please stop spreading false information, and do not circulate the parties' private materials."
      ],
      "question": "Send me the matching investigation summary too.",
      "response": [
        "Got it, I'll send you the matching summary separately."
      ],
      "trigger": {
        "answer": "c17"
      }
    },
    {
      "id": "r13",
      "ch": 2,
      "kind": "report",
      "status": "Investigation Results · Verified",
      "source": "School Investigation Documents · Public Summary",
      "title": "Phone Calls, Whereabouts, and Facility Verification",
      "lead": "The investigation summary you asked for is right here. The calls, recordings, and all movements are listed in this single document.",
      "body": [
        "Around 20:00: Phil Chi and Caroline Xu had an argument; they separated at 20:05. Caroline Xu then went to the equipment room, and the sign-in record and other classmates' statements from 20:06 to 20:22 all check out with each other.",
        "Kavin Zhou's photo shop payment record and whereabouts have been verified; no materials confirm the rumors that \"he was waiting downstairs at the literature building the whole time\" or that \"he was the first person to arrive\".",
        "20:17: Phil Chi received a call from the literature workshop and left the first-floor practice room to answer it in the connecting corridor. Caesar Huo stayed in the practice room, and the original recording has not been edited.",
        "Facility Verification: The guardrail fixtures on the literature building's connecting corridor failed. Based on all existing materials, this incident was an accident; the online claims that chasing or a fight caused it have no supporting evidence.",
        "Private love letters, the full application, and irrelevant private chats are not included in the public summary."
      ],
      "question": "The facts are all clear now. I wanna hear what they all have to say for themselves.",
      "response": [
        "Yeah. Phil Chi logged on for a little bit earlier.",
        "She didn't post any status updates; she just took down that old pinned help request she had up before."
      ],
      "related": "lin",
      "trigger": {
        "request": "r12"
      }
    },
    {
      "id": "r14",
      "ch": 2,
      "kind": "tabloid",
      "status": "Tabloid Correction",
      "source": "Corridor Night Talk · Correction Page",
      "title": "The big headline is gone, and the correction is at the very bottom",
      "lead": "Caroline Xu just talked about getting everything out in the open, and I found the tabloid's correction page too. The original flashy headline got changed, and the correction is stuck all the way at the bottom.",
      "body": [
        "Correction: Previous content referencing a \"planned corridor meeting\" and \"waiting downstairs the whole time\" was not verified, and is hereby retracted. The incident details are subject to the school's official announcement and investigation results.",
        "Comment: That relationship diagram is still getting shared in other groups.",
        "Comment: Can you post the correction on its own? Not everyone's gonna go back and recheck the old thread."
      ],
      "question": "Save a separate copy of the correction.",
      "response": [
        "Already saved, I put it together with the old version.",
        "The original pictures were so obvious, but the correction's only this tiny little section now."
      ],
      "trigger": {
        "answer": "c19"
      }
    },
    {
      "id": "r15",
      "ch": 2,
      "kind": "student",
      "status": "Classmate Responses",
      "source": "Campus Anonymous Forum · Comments After the Announcement",
      "title": "People are starting to add things they didn't say before",
      "lead": "You guys are catching up on how everyone's been lately, and these new replies on the forum are totally different from the old ones. Some people reposted the official announcement, and some are apologizing.",
      "body": [
        "Classmate: I reposted that old \"first person on the scene\" screenshot before without checking the facts, so I'm sorry. I'm adding the announcement summary here.",
        "Classmate: I hope they post updates on how they're gonna fix that corridor later too.",
        "Classmate: Stop asking for the full love letter, that's not an investigation document."
      ],
      "question": "As long as people see the correction, that's good. Stop pestering everyone for their private business.",
      "response": [
        "Yeah.",
        "Just now someone asked what that song was called, and someone replied under it this time: wait for the authors to release it themselves."
      ],
      "trigger": {
        "answer": "c23"
      }
    },
    {
      "id": "r16",
      "ch": 2,
      "kind": "notice",
      "status": "School Follow-Up Announcement",
      "source": "Nanchuan University · Safety Rectification and Follow-Up Plans",
      "title": "The last announcement, and one quiet night",
      "lead": "Everything's sorted out now, here's the school's final follow-up plan for you. It's a notice about repairs, not some new random rumor.",
      "body": [
        "The literature building corridor area will stay closed until all repairs and reviews are finished. The school will keep checking all similar facilities, and further updates will be provided separately.",
        "Student support arrangements for all those involved in the incident are ongoing, no personal recovery or life details will be released to people who aren't involved.",
        "Please refer to the official investigation conclusion, and stop reposting false content that's already been corrected."
      ],
      "question": "Got it. For the rest of it, let them take all the time they need to talk.",
      "response": [
        "Alright. I'm not refreshing the anonymous forum tonight.",
        "Whatever post you still wanna check out, I saved all of them."
      ],
      "trigger": {
        "ending": true
      }
    }
  ],
  "epilogue": {
    "title": "The Days After",
    "objective": "The case is closed. After talking through the last private messages with all four people, you'll read the diary entries they wrote after this whole conversation. Everyone has their own life to live, so we're not collecting any more clues in this chapter.",
    "date": "October 12 · The Final Private Messages",
    "completion": "Four private messages, four new diary entries, all saved here. Next time you log in, you might get a photo, a new song, or a finished short story.",
    "people": {
      "lin": {
        "title": "Turn to the next page first",
        "date": "October 12, 2024",
        "weather": "Autumn evening",
        "rounds": [
          {
            "npc": [
              "I finally had time to write something different these past two days.",
              "I wrote half a page today, rewrote the opening four times, and it's still a little silly."
            ],
            "choices": [
              "Wanna show me when you finish it?",
              "I'm still writing it, no rush to show it to anyone right away."
            ],
            "responses": [
              [
                "Sure, but don't rush me to post it later.",
                "I write pretty slow."
              ],
              [
                "Yeah, I didn't give myself a super tight deadline this time.",
                "If I can keep writing, I'll just keep going."
              ]
            ]
          },
          {
            "npc": [
              "Finally, I don't have to go through that whole pile of screenshots every single day anymore.",
              "I just opened the chat app a second ago and thought I missed something I had to deal with."
            ],
            "choices": [
              "There's nothing to verify today, so we can just chat casually.",
              "We can just talk about regular, daily stuff from now on too."
            ],
            "responses": [
              [
                "That's a relief.",
                "The thing I most need to say today is that the soup at dinner was so salty."
              ],
              [
                "Sounds great.",
                "If I hit a writer's block someday, I'll probably come complain to you."
              ]
            ]
          },
          {
            "npc": [
              "I gotta go wash my mug now; if I leave it till tomorrow it'll be all crusty again.",
              "Will texting you later bother you?"
            ],
            "choices": [
              "We can talk whenever you're free, and don't worry if you reply late.",
              "Nope. I'm looking forward to reading your next new story."
            ],
            "responses": [
              [
                "Alright, then we don't have to rush to reply right away.",
                "I'm really looking forward to our next chat. See you next time you're online."
              ],
              [
                "Me too.",
                "Hopefully next time you send me a new story, not another screenshot. See you online."
              ]
            ]
          }
        ],
        "variants": {
          "open": {
            "text": [
              "October 12, evening. Right after I finished chatting with that detective, my phone buzzed again; it was the low battery alert. I plugged in the charger on autopilot, then realized I had already replied to every single message today. There are no screenshots on my desktop waiting for me to fill in a timeline, no red notification dots I have to explain. A huge chunk of the night suddenly opened up. I stood by my desk for a minute thinking, then decided to fold the clothes hanging over the back of my chair.",
              "I sat by the window this afternoon trying to work on a new short story. I rewrote the first line four times, and all of them were just descriptions of the weather that sounded more and more like the dorm building's loudspeaker announcements. I deleted all four lines and left a random girl who lost her meal card right at dinnertime. Nothing super dramatic happened to her. She just had to borrow her roommate's card and get an extra portion of sweet and sour pork. I got hungry while I was writing that part. Turns out writing can make me remember dinner; I don't have to end up going back to that night every single time.",
              "The mug on the table was brought by my mom, printed with two oranges so perfectly round they looked fake. I used to complain it took up too much space, but today, having hot water right within reach feels so convenient. Mom called this afternoon, rambling about how the vegetable seller downstairs finally got a new weighing scale, and how our cat at home had scratched a hole in the doormat. She paused for a second, like she had something else to say, but in the end only asked what I had for dinner. I said I just ate dinner. She laughed, saying that was technically an answer, but barely counted as one.",
              "The workshop emailed back today, agreeing to lock in the exact schedule once my current arrangements settle down. I saved the bus map of that small town into a folder named only \"Stay.\" Kavin Zhou asked which showing of the rescheduled movie I wanted to pick, I chose a time that wasn't too late, and told him it also depended on how much energy I had that day. This time, I didn't tie the invitation and the departure plan together. He replied \"got it,\" then asked how the novel was coming along. Staring at the screen, I suddenly really wanted to actually finish writing a whole story to show him.",
              "Those two pages of the letter are still in the same envelope, and the creases have gone soft. When I took it out today, the second page almost stuck to the back of the first one. I didn't smooth out every single crease, just rearranged the two pages properly. The words I thought over so carefully while writing, the ones I went back and revised over and over later, left the little notes scribbled in the margins all cramped and messy. Turns out liking someone can make your paper look this messy too. Right next to the envelope are the application materials; I didn't press them together anymore.",
              "Caroline Xu sent a photo of the exhibition board. The border wasn't installed yet, and a folding chair was leaning against the wall beside it. She asked which font size was legible. I held my phone further away, and replied with a number. Back then we would follow up on questions like this with super long chats, rambling from fonts to late-night snacks, then to who in the class dyed their hair. Today there were only a few lines. I stared at the chat box for a little while, then got up to close the window. When I came back, she had sent an enlarged version of the photo.",
              "I'm not completely over it. Sometimes when I see similar sentences, I still think of that incident where a message got passed along, my chest gets tight, and I forget even what I was doing. It's just that today I didn't let that little bit of discomfort drag all the old memories back up. I know she's prepping for the exhibition, I know she still tends to set the text too close to the edge of the layout, and I know I don't want to turn every casual chat into a whole explanatory meeting right now. These little things are enough for now.",
              "When talking with you, the detective, about whether we'd still keep in touch later on, the first thing that popped into my head was that draft I started with four different weather descriptions. Sending over a new piece of writing — not a call log, not a screenshot, not a diary meant to prove something — that thought made me a little happy. We've always been in different places. Typing to someone who isn't on campus used to feel so distant, but today it feels totally okay not to have to reply right away.",
              "Those few messages we exchanged tonight were all super short. I typed out a line, waited for your reply on the screen, and didn't go searching for my own name in other group chats. Turns out chats can just end naturally when it's time. No one is asking me to put a label on a relationship, no one is rushing me to plan out everything for next year all at once. When I said \"talk to you next time I'm online,\" I actually meant I wanted there to be a next time, not just to wrap up this conversation nicely.",
              "After washing the mug and coming back, I saw the cursor on my computer was still hovering at the part about the meal card. The girl has already borrowed a meal card, but I haven't figured out what's supposed to happen next. Maybe I can just let her carry her tray to find a seat, sit by the window, and hear someone next to her complaining there's too much chili. Even just writing about a totally normal noon can stretch on for a long time. I typed a few lines, and realized my shoulders, which had been tensed up this whole time, had relaxed at some point without me noticing.",
              "Before going to bed, I put the pen I'll need tomorrow into my bag, just the one pen. The other pen is leaking ink, so I have to find a separate bag to put it in; I can't just toss it into the side pocket casually again. I wiped it with tissues for ages, but my fingers were still stained blue. I took a photo, originally wanted to add some super artsy caption, but ended up thinking it was silly, so I just saved it and didn't send it. I'll wash my hands again tomorrow, and the stain will probably come off.",
              "I'll stop here for now. There's still half a page of an unfinished novel on the desk, a carton of yogurt left in the fridge, and I still haven't gotten the details straight about what my mom is planning to send tomorrow. I need to save some energy for all these little things. When I turned the lights off, the window reflected the bookshelf in my room. I saw my own thin notebooks tucked between the others, tilted a little, but not falling out."
            ],
            "wordCount": 1240,
            "intro": [
              "The workshop has kept the spot for me, and we're still discussing which exact day I'll go over.",
              "I've also picked the movie, but we'll lock in the time once that day works for everyone. I feel like chatting with you about something relaxing today."
            ]
          },
          "quiet": {
            "text": [
              "Night of October 12. I just finished chatting with you, the detective, and my phone dinged again with a low battery alert. I plugged in the charging cable automatically, then realized I had already replied to every single message I got today. There were no screenshots on my desktop waiting for me to timestamp, no red notification dots I was obligated to explain away. A huge chunk of the night suddenly felt empty. I stood by my desk thinking for a second, then decided to fold the clothes that were hanging over the back of my chair.",
              "This afternoon, I sat by the window and tried to rewrite a section of the novel. I rewrote the first line four times; every version was about the weather, and the more I revised, the more it sounded like the loudspeaker announcements outside the dorm building. I deleted all four lines together, and wrote in a girl who loses her meal card right at lunchtime. Nothing dramatic happens to her. She can only borrow her roommate's card, and accidentally swipes an extra serving of sweet and sour pork. Halfway through writing that part, I got hungry. Turns out writing can make me think about dinner now, and it doesn't always have to loop back to that day.",
              "The mug on the table was brought by my mom, printed with two oranges so perfectly round they looked fake. I used to complain it took up too much space, but today, having hot water right within reach feels so convenient. Mom called this afternoon, rambling about how the vegetable seller downstairs finally got a new weighing scale, and how our cat at home had scratched a hole in the doormat. She paused for a second, like she had something else to say, but in the end only asked what I had for dinner. I said I just ate dinner. She laughed, saying that was technically an answer, but barely counted as one.",
              "The workshop agreed to reserve my spot, I saved the reply email, and I didn't immediately start searching for train tickets. Kavin Zhou's movie invitation is still open; I told him I don't want to make plans right now, not to make him wait for a hidden confirmation. He said he got it, and later really didn't pester me about it anymore. I felt a little off, but also a little relieved. Today I only wrote down my upcoming classes and immediate plans on the calendar, left the blank spaces blank, and didn't fill them in with random stuff.",
              "Those two pages of the letter are still in the same envelope, and the creases have gone soft. When I took it out today, the second page almost stuck to the back of the first one. I didn't smooth out every single crease, just rearranged the two pages properly. The words I thought over so carefully while writing, the ones I went back and revised over and over later, left the little notes scribbled in the margins all cramped and messy. Turns out liking someone can make your paper look this messy too. Right next to the envelope are the application materials, and I didn't press them together anymore.",
              "Caroline Xu sent a photo of the exhibition board; the border wasn't installed yet, and a folding chair was leaning against the wall beside it. She asked which font size was legible. I held my phone further away, and replied with a number. Back then we would follow up on questions like this with super long chats, rambling from fonts to late-night snacks, then to who in the class dyed their hair. Today there were only a few lines. I stared at the chat box for a little while, then got up to close the window. When I came back, she had sent an enlarged version of the photo.",
              "I'm not completely over it. Sometimes when I see similar sentences, I still think of that incident where a message got passed along, my chest gets tight, and I forget even what I was doing. It's just that today I didn't let that little bit of discomfort drag all the old memories back up. I know she's prepping for the exhibition, I know she still tends to set the text too close to the edge of the layout, and I know I don't want to turn every casual chat into a whole explanatory meeting right now. These little things are enough for now.",
              "When talking with you the detective about whether we'd still keep in touch later on, the first thing that popped into my head was that draft I started with four different weather descriptions. Sending over a new piece of writing — not a call log, not a screenshot, not a diary meant to prove something — that thought made me a little happy. We've always been in different places. Typing to someone who isn't on campus used to feel so distant, but today it feels totally okay not to have to reply right away.",
              "Those few messages we exchanged tonight were all super short. I typed out a line, waited for your reply on the screen, and didn't go searching for my own name in other group chats. Turns out chats can just end naturally when it's time. No one is asking me to put a label on a relationship, no one is rushing me to plan out everything for next year all at once. When I said \"talk to you next time I'm online,\" I actually meant I wanted there to be a next time, not just to wrap up this conversation nicely.",
              "After washing the mug and coming back, I saw the cursor on my computer was still hovering at the part about the meal card. The girl has already borrowed a meal card, but I haven't figured out what's supposed to happen next. Maybe I can just let her carry her tray to find a seat, sit by the window, and hear someone next to her complaining there's too much chili. Even just writing about a totally normal noon can stretch on for a long time. I typed a few lines, and realized my shoulders, which had been tensed up this whole time, had relaxed at some point without me noticing.",
              "Before going to bed, I put the pen I'll need tomorrow into my bag, only that one pen. The other pen is leaking ink, so I have to find a bag to put it in and can't just toss it into the side pocket casually again. I wiped it with tissues for ages, but my fingers were still stained blue. I took a photo, originally wanted to add some super artsy caption, but ended up thinking it was silly, so I just saved it and didn't send it. I'll wash it again tomorrow, and the stain will probably come off.",
              "I'll stop here for now. There's still half a page of my unfinished novel on the desk, a carton of yogurt left in the fridge, and I still haven't gotten the details straight about what my mom is planning to send tomorrow. I need to save some energy for all these little things. When I turned the lights off, the window reflected the bookshelf in my room. I saw my own thin notebooks tucked between the others, tilted a little, but not falling out."
            ],
            "wordCount": 1233,
            "intro": [
              "My spot is reserved for now. I'll just take things slow and sort out my own arrangements one at a time.",
              "I'm not dating anyone right now either. I've got some free time tonight, and wanted to update you on how I've been lately."
            ]
          },
          "distance": {
            "text": [
              "Night of October 12. I just finished chatting with you, the detective, and my phone dinged again with a low battery alert. I plugged in the charging cable automatically, then realized I had already replied to every single message I got today. There were no screenshots on my desktop waiting for me to timestamp, no red notification dots I was obligated to explain away. A huge chunk of the night suddenly felt empty. I stood by my desk thinking for a second, then decided to fold the clothes that were hanging over the back of my chair.",
              "This afternoon, I sat by the window and tried to rewrite a section of the novel. I rewrote the first line four times, and every version was about the weather. The more I revised, the more it sounded like the loudspeaker announcements outside the dorm building. I deleted all four lines together, and left a girl who loses her meal card right at lunchtime. Nothing dramatic happens to her; she can only borrow her roommate's card, and accidentally swipes an extra serving of sweet and sour pork. Halfway through writing that part, I got hungry. Turns out writing can make me think about dinner now, it doesn't always have to loop back to that day.",
              "The mug on the table was brought by my mom, printed with two oranges so perfectly round they looked fake. I used to complain it took up too much space, but today, having hot water right within reach feels so convenient. Mom called this afternoon, rambling about how the vegetable seller downstairs finally got a new weighing scale, and how our cat at home had scratched a hole in the doormat. She paused for a second, like she had something else to say, but in the end only asked what I had for dinner. I said I just ate dinner. She laughed, saying that was technically an answer, but barely counted as one.",
              "I didn't hand over those two pages of the letter for now. I'm still slowly gathering my application materials, and I didn't put my own thoughts and opinions about everyone else in the same folder. Before chatting with you today, I made it clear that all the old parts I don't want to expand on anymore are done, and you stopped pushing. I didn't instantly get super close to you because of that, but I'm willing to talk about the stuff I've been writing lately. This piece is just about my recent life, not reopening those pages I locked away. Whether I'll head to Stay later will still be decided on my own schedule.",
              "Those two pages of the letter are still in the same envelope, and the creases have gone soft. When I took it out today, the second page almost stuck to the back of the first one. I didn't smooth out every single crease, just rearranged the two pages properly. The words I thought over so carefully while writing, I went back and revised them over and over later, so the little notes scribbled in the margins got all cramped and messy. Turns out liking someone can make your paper look this messy too. Right next to the envelope are the application materials, and I didn't press them together anymore.",
              "Caroline Xu sent a photo of the exhibition board, which didn't have its border installed yet, and a folding chair was leaning against the wall beside it. She asked which font size was legible. I held my phone further away, and replied with a number. Back then we would follow up on questions like this with super long chats, rambling from fonts to late-night snacks, then to who in the class dyed their hair. Today there were only a few lines. I stared at the chat box for a little while, then got up to close the window. When I came back, she had sent an enlarged version of the photo.",
              "I'm not completely over it. Sometimes when I see similar sentences, I still think of that incident where a message got passed along, my chest gets tight, and I forget even what I was doing. It's just that today I didn't let that little bit of discomfort drag all the old memories back up. I know she's prepping for the exhibition, I know she still tends to set the text too close to the edge of the layout, and I know I don't want to turn every casual chat into a whole explanatory meeting right now. These little things are enough for now.",
              "When talking with you, the detective, about whether we'd still keep in touch later on, the first thing that popped into my head was that draft I started with four different weather descriptions. Sending over a new piece of writing — not a call log, not a screenshot, not a diary meant to prove something — that thought made me a little happy. We've always been in different places. Typing to someone who isn't on campus used to feel so distant, but today it feels totally okay not to have to reply right away.",
              "Those few messages we exchanged tonight were all super short. I typed out a line, waited for your reply on the screen, and didn't go searching for my own name in other group chats. Turns out chats can just end naturally when it's time. No one is asking me to put a label on a relationship, and no one is rushing me to plan out everything for next year all at once. When I said \"talk to you next time I'm online,\" I actually meant I wanted there to be a next time, not just to wrap up this conversation nicely.",
              "After washing the mug and coming back, I saw the cursor on my computer was still hovering at the part about the meal card. The girl has already borrowed a meal card, but I haven't figured out what's supposed to happen next. Maybe I can just let her carry her tray to find a seat, sit by the window, and hear someone next to her complaining there's too much chili. Even just writing about a totally normal noon can stretch on for a long time. I typed a few lines, and realized my shoulders, which had been tensed up this whole time, had relaxed at some point without me noticing.",
              "Before going to bed, I put the pen I'll need tomorrow into my bag — just one pen. The other pen is leaking ink, so I have to find a bag to put it in; I can't just toss it into the side pocket casually again. I wiped it with tissues for ages, but my fingers were still stained blue. I took a photo, originally wanted to add some super artsy caption, but ended up thinking it was silly, so I just saved it and didn't send it. I'll wash it again tomorrow, and the stain will probably come off.",
              "I'll stop here for now. There's still half a page of unfinished novel on the desk, a carton of yogurt left in the fridge, and I still haven't gotten the details straight about what my mom is planning to send tomorrow. I need to save some energy for all these little things. When I turned the lights off, the window reflected the bookshelf in my room. I saw my own thin notebooks tucked between the others, tilted a little, but not falling out."
            ],
            "wordCount": 1247,
            "intro": [
              "All that stuff I didn't want to talk about before, I'm leaving it aside for now.",
              "But I wrote some new stuff lately, and I'm okay telling you about those. Let's just chat about that tonight, yeah?"
            ]
          }
        }
      },
      "zhou": {
        "title": "I didn't trim the edges this time.",
        "date": "October 12, 2024",
        "weather": "Autumn evening",
        "rounds": [
          {
            "npc": [
              "I went to pick up a new roll of photos today.",
              "The shop owner asked if I still wanted the edges trimmed, and I said no this time — I'm in a rush to get back and turn in my assignment."
            ],
            "choices": [
              "For once I walked out of the photo shop right on schedule.",
              "What did you take photos of on the new roll?"
            ],
            "responses": [
              [
                "Yeah, I grabbed them and left right away.",
                "I even had time to stop and buy two steamed buns on the way back."
              ],
              [
                "The bike shed, the cafeteria, and one shot where a classmate's hand is sticking into frame in the hallway.",
                "I almost deleted that one at first, but then I thought it was kinda interesting."
              ]
            ]
          },
          {
            "npc": [
              "I used to think I had to get every single thing perfect before I dared to say anything.",
              "Today I told my group mate I don't know how to edit audio, and she said we can work on it together."
            ],
            "choices": [
              "Saying it out loud actually made it possible to keep going.",
              "Once the new assignment is done, you can send me a copy of one of the photos."
            ],
            "responses": [
              [
                "Right.",
                "Way better than dragging it out all by myself; at least now I know exactly what I'm supposed to do tomorrow."
              ],
              [
                "Alright, I'll pick one that's not too blurry.",
                "But if all of them turn out blurry, I'll be honest about that too."
              ]
            ]
          },
          {
            "npc": [
              "I made plans to meet up early tomorrow morning to record sounds in the cafeteria, so I should go to sleep soon.",
              "Can I still message you to chat about stuff like this later? When you're not investigating cases?"
            ],
            "choices": [
              "Of course. Next time we'll talk about photos and assignments.",
              "Sure thing. Go set your alarm first, don't be late."
            ],
            "responses": [
              [
                "It's a promise then.",
                "I'm actually looking forward to it. See you next time I'm online."
              ],
              [
                "Just set the alarms, two of them.",
                "See you then. Hope I can bring you a decent photo next time."
              ]
            ]
          }
        ],
        "variants": {
          "open": {
            "text": [
              "October 12, overcast. After chatting with you, the detective, tonight, I sat at my desk wiping my camera for a bit. There was a speck of dust on the lens cap that I couldn't pry off no matter what; I tried using a toothpick, and my roommate saw me and asked if I shouldn't use a toothpick on something that expensive. I said I didn't get anywhere near the lens. He moved the desk lamp over, saying I still ought to see it clearly. I looked under the light, and turns out it was just a little chipped paint on the plastic.",
              "The roll of photos I picked up from the shop today were practice shots for the school magazine, including the back entrance of the cafeteria, the bike shed, and the dorm hallway, no one's side profile in them. When the shop owner handed me the bag, he asked if I wanted them trimmed this time. I said no need, I'll look through them first. He probably just asked casually, but I stood there in front of the shop for a second. All that time I wasted lingering there back then still feels embarrassing to think about. The edges of the photos were already straight ages ago — the one who couldn't bring myself to leave was me.",
              "I bought two steamed buns on the way back to the dorm, forgot to check what fillings they were, and bit into the first one only to find it was red bean paste. For a second I was a little disappointed, then realized I didn't have to have a pork bun today at all. My roommate yelled at me from the door to help grab his package, I couldn't free up my hands, so he ran over and took the camera bag from me instead. I gave him the other pork bun. He asked why I was being so nice all of a sudden, and I said I grabbed the wrong fillings, which saves us having to swap later.",
              "Phil Chi picked which movie showing she wants to go to, and the time isn't late. I didn't buy both tickets right away; I'll wait for her to confirm that day works for her. She casually brought up the Stay town thing, and I still find myself wondering how long three months is, but this time I asked her what she's been wanting to write. She sent over a two-sentence outline, and I actually found myself curious about how it ends. That little bit of unease didn't just vanish, but there's something else next to it worth listening to carefully, so I don't have to pull her back the second she starts talking.",
              "That photo with the full name written on the back is sitting on the right side of my desk, not propped up, not stuffed at the very bottom. The handwriting isn't that good, the last stroke of the K in Kavin drags out too long, just like how I write it in my homework notebooks normally. Turns out when you actually write a person's full name, it doesn't glow or anything, and it doesn't magically make you brave. I still hesitate, still re-read the messages I sent out a few times, worrying if a couple of the words sound too harsh.",
              "We split into groups for photography class this afternoon, and the teacher assigned me to collect a bunch of ambient campus sounds. My first reaction was to try to pass the job to someone else, since I thought I hadn't even figured out how to take good photos yet. My group mate said she could edit the audio, and that I just needed to borrow the equipment. We stood under the bike shed testing for ten minutes, and recorded a ton of wind noise and an electric bike that wouldn't start no matter what. Everyone laughed when we played it back; the teacher didn't even get mad, and said we just need to learn to pick out which part is the one we actually want to keep.",
              "Back then when I took photos, I always wanted to wait for the perfect moment: the light is just right, the person just turns around, there's no clutter in the background. I kept waiting and waiting, and the sky went dark, or the person already left. Today there's a photo where a classmate's hand sticks right into the frame, pointing at a leaf on the ground. I almost deleted it, but then zoomed in and looked for a long time. That leaf doesn't matter, the hand isn't posed properly, but I still remember what they were talking about when I pressed the shutter.",
              "There were no new clues in our direct messages tonight. I told you about the assignment I've been working on, and mentioned that slightly crooked photo too. Right after sending it, I realized you technically didn't have to know any of this. We first got in touch because of what happened that night; now that that's all explained, the chat box didn't just disappear. You said you'd wait for me to finish up my new assignment, and that felt really relaxing to hear — not like turning in a report, more like we agreed we'd find some other fun topic to talk about next time.",
              "I still haven't gotten used to talking about my own stuff first. Back then, every time I opened a chat, my mind would immediately fix on what the other person needed, and I'd rush to find something I could do, like if I stood there empty-handed, it wouldn't count as caring. Today, I only talked about the process of picking up my photos, not adding a single line about what else I could help with later. Nobody called that thing too small after I finished talking. My roommate asked what I was grinning at on the screen, and I said I was chatting about cameras. He said it's rare to find someone willing to listen.",
              "The poster for Caroline Xu's exhibit got posted in the group chat, and I tapped into it and stared for a while. The empty corridor photo she picked has a cold color tone, nothing like the campus I remember. I was gonna compliment the composition, but typed it out and thought it sounded like a teacher grading homework, so I just replied I saw it. Later, she sent over the exhibit's opening hours, no extra explanation. I marked the time in my calendar, didn't make plans for Phil Chi on her behalf, and didn't arrange for anyone to go together either.",
              "Before the lights turned off, my group mate was pinging the group chat about tomorrow's audio recording spot. I picked the cafeteria during breakfast, wanting to record the sound of a plastic tray being set on the table, and also curious how many different tones the line \"Auntie, less spice\" could be said in. Only after I sent the plan did I realize the time was pretty early, and my roommate already started complaining. I promised not to slam the door when I get up, and borrowed his power bank. He mumbled that I should remember to return it.",
              "When I said \"see you next time\" to you just now, I meant the next time my phone lights up, not a pre-planned meetup somewhere. Maybe by then my assignments are still just mediocre, and there's still an extra branch sticking out at the edge of my photos. But at least I'll have new stuff to talk about. I zipped up my camera bag, set tomorrow morning's alarm, and didn't send anyone a goodnight with a question mark attached."
            ],
            "wordCount": 1279,
            "intro": [
              "Phil Chi already picked the movie she wants to watch, and I haven't rushed to buy tickets yet.",
              "For now I'll wait and see how she plans it out. And also, I actually turned in my assignment on time today."
            ]
          },
          "quiet": {
            "text": [
              "October 12, overcast. After I finished chatting with you tonight, I sat at my desk wiping down my camera for a bit. There was a speck of dust on the lens cap I couldn't pick off no matter what; I tried using a toothpick, my roommate saw that and asked if you're not supposed to use toothpicks on something that expensive. I said I hadn't touched the lens yet. He moved the desk lamp over, and said I still need to see it clearly. I looked under the light, and turned out it was just a little fleck of chipped plastic paint.",
              "What I picked up from the photo shop today was a roll of practice photos for the campus journal, including the back entrance of the cafeteria, the bike shed, and the dorm hallway, no one's side profile was there. When the shop owner handed me the bag, he asked if I wanted to trim them again this time. I said not right now, I'll take them home and look. He probably just asked casually, but I paused outside the shop for a second. All that time I wasted lingering there before, it still feels awkward when I think about it now. The edges of the photos were already neat ages ago; it was me who kept refusing to leave.",
              "I bought two buns on the way back to the dorm, forgot which filling was which, and only realized I picked the red bean one after the first bite. I was a little disappointed for a second, then thought I didn't absolutely have to have a pork bun today anyway. My roommate yelled at the door for me to grab his package, I couldn't free up my hands, so he ran over and took the camera bag from me. I gave him the remaining pork bun. He asked why I was being so generous all of a sudden, and I said I took the wrong one, so we don't have to swap later.",
              "Phil Chi said she doesn't want to go to the movies right now, and she's not in a hurry to start a relationship. I replied that I got it, and didn't tack on a line saying I can wait. Of course I felt a little down typing those words out, and I didn't bounce right back after putting my phone down. But dinner still needs to be eaten, and the assignment's almost due. I closed the movie link I was about to send to her chat, and texted my group mate the time I'm borrowing the equipment. I've still got to get up early tomorrow, I can't drag that out anymore.",
              "That photo with the full name written on its back is sitting on the right side of my desk, not propped up, and not tucked away at the very bottom either. The handwriting's not great. The last stroke of the K in Kavin drags out long, just like how I usually write it in my homework. Turns out, writing a full name out doesn't make it glow, and it definitely doesn't make you brave out of nowhere. I still hesitate, and still re-read my messages after I send them, wondering if any two words I picked came off too harsh.",
              "During photography class grouping this afternoon, the teacher assigned me to collect a segment of campus sounds. My first reaction was to back out, thinking I haven't even figured out how to take proper photos yet. My group mate said she can edit the audio, so all I have to do is borrow the gear. We tested it under the bike shed for ten minutes, and recorded a ton of wind noise plus the sound of an electric bike that wouldn't start no matter what. Everyone laughed when we played it back; the teacher didn't yell at us, he just said first learn to pick out which part you actually want to keep.",
              "Back when I took photos, I always waited for the perfect moment: the light's exactly right, the person just turned around, no clutter in the background. I wait and wait, the sky goes dark, or the person's already gone. Today one of the photos has a classmate's hand sticking into the frame, pointing at a leaf on the ground. I almost deleted it, but then zoomed in and stared for a long time. That leaf doesn't matter, the hand isn't posed, but I remember exactly what they were talking about when I pressed the shutter.",
              "No new clues popped up in the DMs tonight. I talked about the assignment I've been working on, and even mentioned that slightly crooked photo. Only after I sent it did I realize you don't actually need to know all that. We first got in touch because of what happened that night; now that everything's cleared up, the chat box didn't just disappear. You said you can wait for me to finish my new assignment, and it felt so relieving to hear that. It wasn't like handing in a report, more like agreeing to chat about something else next time.",
              "I still haven't gotten used to talking about my own stuff first. Back then, every time I opened a chat, my mind would immediately fix on what the other person needed, and I'd rush to find something I could do, like if I stood there empty-handed, it wouldn't count as caring. Today, I only talked about the process of picking up my photos, not adding a single line about what else I could help with later. Nobody called that thing too small after I finished talking. My roommate asked what I was grinning at on the screen, and I said I was chatting about cameras. He said it's rare to find someone willing to listen.",
              "The poster for Caroline Xu's exhibit got posted in the group chat. I tapped into it and stared for a while. The empty corridor photo she picked has a cold color tone, nothing like the campus I remember. I was gonna compliment the composition, but typed it out and thought it sounded like a teacher grading homework, so I just replied I saw it. Later, she sent over the exhibit's opening hours, no extra explanation. I marked the time in my calendar, didn't make plans for Phil Chi on her behalf, and didn't arrange for anyone to go together either.",
              "Before the lights turned off, my group mate was pinging the group chat about tomorrow's audio recording spot. I picked the cafeteria during breakfast, wanting to record the sound of a plastic tray being set on the table, and also curious how many different tones the line \"Auntie, less spice\" could be said in. Only after I sent the plan did I realize the time was pretty early, and my roommate had already started complaining. I promised not to slam the door when I get up, and borrowed his power bank. He mumbled to remember to return it.",
              "When I said \"see you next time\" to you just now, I meant the next time my phone lights up, not a pre-planned meetup somewhere. Maybe by then my assignments are still just mediocre, and there's still an extra branch sticking out at the edge of my photos. But at least I'll have new stuff to talk about. I zipped up my camera bag, set tomorrow morning's alarm, and didn't send anyone a goodnight with a question mark attached."
            ],
            "wordCount": 1245,
            "intro": [
              "She said she doesn't want to make plans right now, and I get it.",
              "I've been busy with my photography class lately, not glued to my phone waiting for messages every day. I turned in my assignment today."
            ]
          },
          "distance": {
            "text": [
              "October 12, overcast. After I finished chatting with you tonight, I sat at my desk wiping down my camera for a bit. There was a speck of dust on the lens cap I couldn't pick off no matter what. I tried using a toothpick, my roommate saw that and asked if you're not supposed to use toothpicks on something that expensive. I said I hadn't touched the lens yet. He moved the desk lamp over, said I still needed to see it clearly. I looked under the light; it turned out it was just a little fleck of chipped plastic paint.",
              "What I picked up from the photo shop today was a roll of practice photos for the campus journal, including the back entrance of the cafeteria, the bike shed, and the dorm hallway, no one's side profile was there. When the shop owner handed me the bag, he asked if I wanted to trim them again this time. I said not right now, I'll take them home and look. He probably just asked casually, but I paused outside the shop for a second. All that time I wasted lingering there before, it still feels awkward when I think about it now. The edges of the photos were already neat ages ago; it was me who kept refusing to leave.",
              "I bought two buns on the way back to the dorm, forgot which filling was which, and only realized I picked the red bean one after the first bite. I was a little disappointed for a second, then thought I didn't absolutely have to have a pork bun today anyway. My roommate yelled at the door for me to grab his package. I couldn't free up my hands, so he ran over and took the camera bag from me. I gave him the remaining pork bun. He asked why I was being so generous all of a sudden, and I said I took the wrong one, so we don't have to swap later.",
              "Phil Chi put that letter away, and I didn't ask again what else was written inside. Today I didn't send her a long paragraph of explanations trying to make up for every single silent moment all at once. I already told you what happened that night at the photo shop. I still regret it sometimes when it crosses my mind, but over and over again proving how bad I feel isn't gonna help me live the present well. The photo class assignment is my responsibility, and I need to keep track of the times I promised people. Finishing these few small things first is way more solid than spouting a bunch of fancy empty words last minute.",
              "That photo with the full name written on its back is sitting on the right side of my desk, not propped up, not tucked away at the very bottom either. The handwriting's not great; the last stroke of the K in Kavin drags out long, just like how I usually write it on my homework. Turns out, writing a full name out doesn't make it glow, and it definitely doesn't make you brave out of nowhere. I still hesitate, and still re-read my messages after I send them, wondering if any two words I picked came off too harsh.",
              "During photography class grouping this afternoon, the teacher assigned me to collect a segment of campus sounds. My first reaction was to back out, thinking I haven't even figured out how to take proper photos yet. My group mate said she can edit the audio, and all I have to do is borrow the gear. We tested it under the bike shed for ten minutes, recorded a ton of wind noise and an electric bike that wouldn't start no matter what. Everyone laughed when we played it back. The teacher didn't yell at us, just said first learn to pick out which part you actually want to keep.",
              "Back when I took photos, I always waited for the perfect moment: the light's exactly right, the person just turned around, no clutter in the background. I wait and wait, the sky goes dark, or the person's already gone. Today one of the photos has a classmate's hand sticking into the frame, pointing at a leaf on the ground. I almost deleted it, but then zoomed in and stared for a long time. That leaf doesn't matter, the hand isn't posed, but I remember exactly what they were talking about when I pressed the shutter.",
              "No new clues popped up in the DMs tonight. I talked about the assignment I've been working on, and even mentioned that slightly crooked photo. Only after I sent it did I realize you don't actually need to know all that. We first got in touch because of what happened that night; now that everything's cleared up, the chat box didn't just disappear. You said you can wait for me to finish my new assignment, and it felt so relieving to hear that. It wasn't like handing in a report, more like agreeing to chat about something else next time.",
              "I still haven't gotten used to talking about my own stuff first. Back then, every time I opened a chat, my mind would immediately fix on what the other person needed, and I'd rush to find something I could do, like if I stood there empty-handed, it wouldn't count as caring. Today, I only talked about the process of picking up my photos, not adding a single line about what else I could help with later. Nobody called that thing too small after I finished talking. My roommate asked what I was grinning at on the screen, and I said I was chatting about cameras. He said it's rare to find someone willing to listen.",
              "The poster for Caroline Xu's exhibit got posted in the group chat. I tapped into it and stared for a while. The empty corridor photo she picked has a cold color tone, nothing like the campus I remember. I was gonna compliment the composition, but typed it out and thought it sounded like a teacher grading homework, so I just replied I saw it. Later, she sent over the exhibit's opening hours, no extra explanation. I marked the time in my calendar, didn't make plans for Phil Chi on her behalf, and didn't arrange for anyone to go together either.",
              "Before the lights turned off, my group mate was pinging the group chat about tomorrow's audio recording spot. I picked the cafeteria during breakfast, wanting to record the sound of a plastic tray being set on the table, and also curious how many different tones the line \"Auntie, less spice\" could be said in. Only after I sent the plan did I realize the time was pretty early, and my roommate already started complaining. I promised not to slam the door when I get up, and borrowed his power bank. He mumbled to remember to return it.",
              "When I said \"see you next time\" to you just now, I meant the next time my phone lights up, not a pre-planned meetup somewhere. Maybe by then my assignments are still just mediocre, and there's still an extra branch sticking at the edge of my photos. But at least I'll have new stuff to talk about. I zipped up my camera bag, set tomorrow morning's alarm, and didn't send anyone a goodnight with a question mark attached."
            ],
            "wordCount": 1242,
            "intro": [
              "She's keeping the letter for now, and I didn't pester her about it again.",
              "I wanna get my own stuff sorted first lately. Let's talk about something unrelated to that night today."
            ]
          }
        }
      },
      "shen": {
        "title": "The Name On the Exhibit Label",
        "date": "October 12, 2024",
        "weather": "Autumn evening",
        "rounds": [
          {
            "npc": [
              "I messed up writing my own name once while setting up the exhibit today.",
              "My hands were all sticky with glue, so the middle letters of Caroline smudged into a blob."
            ],
            "choices": [
              "Did you rewrite it later?",
              "How does it feel working on your own exhibit?"
            ],
            "responses": [
              [
                "Got it rewritten. A senior gave me a new sheet of paper.",
                "This time I stuck it on perfectly straight; I even stepped back to double check."
              ],
              [
                "Exhausting, I rubbed a whole sleeve full of wall dust on my jacket.",
                "But when I saw the photos hung up, I was genuinely pretty happy."
              ]
            ]
          },
          {
            "npc": [
              "A girl stood in front of my photo rambling for ages about the apartment building she lived in when she was little.",
              "She doesn't know any of that old stuff, so we just chatted about a chair."
            ],
            "choices": [
              "It's nice getting to know a new friend like that.",
              "You can talk to me about all these photos later too."
            ],
            "responses": [
              [
                "Mm-hmm.",
                "For the first time, I realized I have other things I can talk to people about too."
              ],
              [
                "Okay.",
                "Though I'll probably complain that the exhibit labels keep sticking crookedly, which is super un-artistic."
              ]
            ]
          },
          {
            "npc": [
              "I'm gonna wash my jacket now, otherwise I won't have anything dry to wear tomorrow.",
              "Send over the next photo you shoot that you love, okay?"
            ],
            "choices": [
              "Alright, I'll be waiting to see it.",
              "Of course. I can't wait to hear your new stories next time."
            ],
            "responses": [
              [
                "It's a deal then.",
                "See you next time you're online; I'm really looking forward to it too."
              ],
              [
                "Same here.",
                "I hope next time I can tell a tiny story about one of my own photos. See you."
              ]
            ]
          }
        ],
        "variants": {
          "open": {
            "text": [
              "October 12, a little after 10 PM. The display panels finally got installed. I didn't notice I got white wall dust all over my jacket cuff until I got back to the dorm. After I finished chatting, I tried wiping it with a wet towel first, but it just spread into a bigger stain, so I had to soak the jacket in a basin of water. I still have to wake up early tomorrow to put up the descriptions at the exhibit. I was gonna crash right after cleaning up, but sitting down I felt like I needed to remember today. After running around all day, the first thing that popped into my head when I tried writing it down was that we ran out of laundry detergent.",
              "The exhibit isn't nearly as grand as I imagined. One of the lights by the entrance has a bad connection, flickering on and off a few times. A classmate from the next booth squatted on the floor messing with the power strip, with a half-eaten loaf of bread next to them. I stood there holding my photos for ages, not knowing which one to hand over first. The senior in charge of setting up the booth asked for the work title. I said the photos of people without people in them. She held her pen waiting, and it hit me she was asking for the official title, not what's inside the frame.",
              "Later I named the piece The Corridor Is Still Lit. The four photos are all empty spots at different times: a chair no one's sitting on, a drawn curtain that's already been tucked away, a classroom door left slightly ajar, and the staircase at dinnertime. Someone asked why I didn't shoot people. I almost recited that pre-written explanation I practiced, but then I just said I wanted to shoot these things at the time. The words came out really short. I wasn't even used to that myself, but the person just nodded and moved on to look at the next photo.",
              "Phil Chi looked at the photos of the display board and pointed out one line of text that was way too small. I resized it bigger and sent it over again. She replied with a little nod emoji. We didn't keep the conversation going about that night, and we didn't pretend we never had a falling out. She said when the time's right, she'll check out the exhibit arrangement herself. I didn't take that as proof our friendship's all back to normal. Just being able to talk seriously about a display board today is already a real, actual thing that happened.",
              "While pasting the work descriptions, I messed up writing my own name once. It's not that I forgot how to write it. My hand shook a little, and the middle letters of Caroline blurred into a smudged blob. The senior handed me a new sheet of paper and told me to take it easy. I grabbed a different pen and slowly wrote out Caroline Xu. Finishing that, I thought about how many neat, well thought-out messages I passed on for other people before, but whenever it came to talking about what I actually like, what I actually want, I always start the sentence with maybe or whatever.",
              "This afternoon there was a girl I don't know who stood in front of the empty chair photo staring for ages. She said the building she lived in as a kid had a chair exactly like that, and people would drag them out in summer to sort vegetables. I told her this was the dorm hallway. She smiled a little and said no wonder there's slippers off to the side. She never brought up Phil Chi, never asked about that fight, and didn't read some hidden meaning into my photo. We chatted for a few minutes about chairs, then she went next door to look at other works.",
              "I've been holding onto that tiny little moment. Once a photo gets shared, what other people see doesn't have to be the feeling you had when you took it. I used to be terrified of that, thinking if no one gets what I meant, it's like I did it all for nothing. But today I'm kind of thankful to that girl. She made me realize this photo can just be the little thing that reminds her of her old apartment. It doesn't need to prove who loved who, or who owes who.",
              "In tonight's DMs, I told you about messing up my name. After sending it I thought it was a little embarrassing, but the reply I got back didn't fixate on that detail and pester me for more. I sat on the edge of my bed looking at my phone, my feet still resting on the tangled extension cord. Then we talked about the future. I didn't say I wish everything could go back to the way it was. The way things were back then had uncomfortable parts I never wanted to admit. I can't just call it the best time just because it's familiar.",
              "After saying sorry, there's still a bunch of regular, ordinary days ahead. You'll be late for morning classes, photos will turn out blurry, clean laundry might even get splattered by drips from the apartment upstairs. Not every single day needs a chance to rehash what happened that night. Sometimes when I see Phil Chi's name pop up, I still pause for a second, wondering if replying too fast feels fake, and replying too slow makes her misunderstand. Today I sent a single reply that just said \"received\", and didn't tack on three extra explanations after.",
              "Kavin Zhou said he saw the poster in the group chat. I sent over the opening hours, then immediately went to edit the exhibit label. Those few minutes were way easier than I expected. My hands were busy, I had another definite thing I had to finish, and I didn't keep staring at my phone waiting for him to send an extra line. Looking back on it tonight, I still can't really say how much better I'm doing. But that exhibit label is properly fixed now, the paper's not wrinkled, and the glue's not lopsided.",
              "You said we can talk about new photos next time, and I agreed. It's not about getting someone to judge if my photos are good enough, or trading a piece of work to earn forgiveness. When I actually take something I wanna share later, I can just send it over. The person on the other side of the screen doesn't go to our school, doesn't know the light at the exhibit entrance broke at one point, but that's fine, I can tell you that little story too next time. I hope next time I can remember more little things like that.",
              "The water in the basin's gone cold, but that dust stain on my cuff washed out completely. I hung the jacket back up, and scribbled a note on scrap paper of things to bring tomorrow: scissors, clear tape, spare exhibit labels. At the very end I added a pack of tissues. I forgot to take a photo of the full display wall after we set it up, so I'll head over early tomorrow, before anyone else gets there, and take my time to snap a proper photo. This time, my name will be signed right on the photo."
            ],
            "wordCount": 1242,
            "intro": [
              "The displays are all set up, and Phil Chi even helped me check the font size.",
              "We didn't jump straight back to how things used to be, but being able to chat normally today already makes me really happy."
            ]
          },
          "quiet": {
            "text": [
              "October 12, a little after 10 PM. The display panels finally got installed. I didn't notice I got white wall dust all over my jacket cuff until I got back to the dorm. After I finished chatting with you, I tried wiping it with a wet towel first, but it just spread into a bigger stain, so I had to soak the jacket in a basin of water. I still have to wake up early tomorrow to put up the descriptions at the exhibit, so I was gonna crash right after cleaning up, but sitting down I felt like I needed to remember today. After running around all day, the first thing that popped into my head when I tried writing it down was that we ran out of laundry detergent.",
              "The exhibit isn't nearly as grand as I imagined. One of the lights by the entrance has a bad connection, flickering on and off a few times. A classmate from the next booth squatted on the floor messing with the power strip, with a half-eaten loaf of bread next to them. I stood there holding my photos for ages, and didn't know which one to hand over first. The senior in charge of setting up the booth asked for the work title, and I said the photos of people without people in them. She held her pen waiting, and it hit me she was asking for the official title, not what's inside the frame.",
              "In the end, I titled the series The Hallway Is Still Lit. All four photos show empty spots at different times: an unoccupied chair, a fully drawn curtain, a classroom door left slightly ajar, and a staircase captured at dinner time. When someone asked why I didn't take photos of people, I nearly recited the well-rehearsed explanation I had prepared, but ended up only saying I felt like shooting those moments. The words came out so short even I felt a little off, but they just nodded and moved on to the next photo.",
              "Phil Chi said she wants to sort out her own schedule lately and might not make it to the exhibition. I replied okay, sent her the opening hours separately, and didn't ask again. In the past, a reply like that would've made me overthink immediately—was she still mad? Did I mess up again? I had that thought today too, but right after it I went back to sticking up the exhibition labels. The exhibition has to go well no matter who shows up or not; it's such an obvious truth, but it took me ages to finally get it.",
              "While pasting the artwork descriptions, I miswrote my own name once. It wasn't that I forgot how to write it—my hand was shaking, and the middle letters of Caroline smudged together. A senior handed me a new sheet of paper and told me not to rush. I grabbed a different pen and slowly wrote out the full name Caroline Xu again. When I finished, I remembered how many neat, careful lines I used to pass along for other people in the past, but whenever I talked about what I liked or wanted, I always had to lead with \"maybe\" or \"it doesn't matter\".",
              "This afternoon, a girl I didn't recognize stood in front of the photo of the empty chair for a very long time. She said the apartment building she lived in as a kid had chairs just like that, and in summer people would drag them out to sort vegetables. I told her this photo was taken in a dorm hallway, and she smiled, said no wonder there were slippers off to the side. She never mentioned Phil Chi, never asked about that fight, never took my photos as some kind of hidden hint. We chatted about chairs for a few minutes, then she went next door to look at other works.",
              "I still remember that tiny moment so clearly. Once you show a photo to other people, what they see doesn't have to match the feelings you hid inside it when you pressed the shutter. I used to be so scared of that, like if no one picked up on my hidden meaning, the whole thing was wasted. But today I'm a little grateful to that girl—she made me realize this photo can just be a little path that leads her back to her memories of that old apartment building. It doesn't have to prove anything about who loved who, or who owed who.",
              "In the direct messages tonight, I told you about messing up my name. I felt a little silly after sending it, but your reply didn't pester me to dig further into that mistake. I sat on the edge of my bed looking at my phone, my feet still resting on the tangled, uncoiled extension cord. When we talked about the future later on, I didn't say I wanted everything to go back to how it used to be. The old days had their fair share of pain I refused to admit, and I can't just call them the best times ever just because they feel familiar.",
              "There are plenty of ordinary, unremarkable days after you say sorry. You'll be late to morning classes, photos will come out blurry, and freshly washed laundry can get splashed by water dripping from the floor above. You don't get a do-over to talk through that night every single day. Sometimes I see Phil Chi's name pop up and I still pause first, worrying a reply too quick might look fake, and one too slow might make her misunderstand. Today I just sent one line that said \"got it\", and didn't tack on three extra explanations after.",
              "Kavin Zhou said in the group chat he saw the exhibition poster, so I sent him the opening hours, then went straight to fix the misprinted exhibition label. Those few minutes were way easier than I thought they'd be. My hands were busy, my mind was fixed on something definite I knew I had to get done, and I didn't keep refreshing my screen waiting for him to send another extra line. Looking back on it tonight, I still can't say exactly how much better I've gotten. But that exhibition label really was fixed, the paper didn't wrinkle, and the adhesive didn't smudge or stick lopsided.",
              "You told me we could talk about new photos next time, and I agreed. This isn't me asking you to judge if my shots are good enough, or trying to trade a photo for a line of forgiveness. Next time I actually capture something I want to share, I'll just send it over. You don't even go to our school, so you don't know the light by the gallery door used to flicker and die—I might as well tell you that little random story then too. I hope next time I can remember more little things like that to chat about.",
              "The water in the basin has gone cold, but that smudge of grime on my sleeve finally washed out. I hung my jacket back up, grabbed a scrap of paper, and jotted down the things I need to bring tomorrow: scissors, clear tape, spare exhibition labels. At the very end I added a pack of tissues. I completely forgot to take a picture of the full finished wall after setting everything up, so I'll head over early tomorrow before anyone else shows up, and take my time to get that shot right. This time, my name will be right there on the photo too."
            ],
            "wordCount": 1272,
            "intro": [
              "The exhibition is all set up now, but Phil Chi might not be able to drop by soon.",
              "It's fine, I'll just wrap up everything I need to do. I finally finished putting up all the display boards today."
            ]
          },
          "distance": {
            "text": [
              "October 12, a little after 10 PM. The display boards are finally mounted. I didn't notice the white wall dust all over my jacket cuff until I got back to the dorm. After chatting with you, I tried wiping it with a damp towel first, but it just spread the stain out even bigger. I had no choice but to soak my jacket in a basin. I need to wake up early tomorrow to go to the gallery and paste the artwork descriptions, so I planned to crash right after I finished washing, but when I sat down I felt like I wanted to remember how this day went. After being busy nonstop for the whole day, the first silly thing I recalled was that I ran out of laundry detergent.",
              "The exhibition isn't anywhere near as grand as I imagined it'd be. One of the lights by the door has a bad connection, flickering on and off over and over. A classmate from the room next door is squatting on the ground messing with the power strip, with a half-eaten loaf of bread sitting next to them. I stood there holding my stack of photos for ages, not sure which one to hand over first. The senior in charge of curating asked me what my art series was called, and I said \"photos of peopleless spaces\". She held her pen waiting, and that's when I realized she was asking for an official title, not just a description of what was in the shots.",
              "In the end, I titled the series The Hallway Is Still Lit. All four photos show empty spots at different times: an unoccupied chair, a fully drawn curtain, a classroom door left slightly ajar, and a staircase captured at dinner time. When someone asked why I didn't take photos of people, I nearly recited the well-rehearsed explanation I had prepared, but ended up only saying I felt like shooting those moments. The words came out so short even I felt a little off, but they just nodded and moved on to the next photo.",
              "That old notebook full of edited lines and sentences is still sealed shut. I'm not going to repost my most embarrassing old moments just to convince anyone I've changed for the better. I already said my apology to Phil Chi, and she doesn't owe me instant closeness right away. This time we agreed to only talk about the exhibition and my everyday life, and I can actually finish a full sentence now. The name on the exhibition label is mine, and I'll be the one to decide if I did a good job today. No more losing myself trying to carve out a spot in other people's relationships.",
              "While pasting the artwork descriptions, I miswrote my own name once. It wasn't that I forgot how to write it—my hand was shaking, and the middle letters of Caroline smudged together. A senior handed me a new sheet of paper and told me not to rush. I grabbed a different pen and slowly wrote out the full name Caroline Xu again. When I finished, I remembered how many neat, careful lines I used to pass along for other people in the past, but whenever I talked about what I liked or wanted, I always had to lead with \"maybe\" or \"it doesn't matter\".",
              "This afternoon, a girl I didn't recognize stood in front of the photo of the empty chair for a very long time. She said the apartment building she lived in as a kid had chairs just like that, and in summer people would drag them out to sort vegetables. I told her this photo was taken in a dorm hallway, and she smiled, said no wonder there were slippers off to the side. She never mentioned Phil Chi, never asked about that fight, never took my photos as some kind of hidden hint. We chatted about chairs for a few minutes, then she went next door to look at other works.",
              "I still remember that tiny moment so clearly. Once you show a photo to other people, what they see doesn't have to match the feelings you hid inside it when you pressed the shutter. I used to be so scared of that, like if no one picked up on my hidden meaning, the whole thing was wasted. But today I'm a little grateful to that girl—she made me realize this photo can just be a little path that leads her back to her memories of that old apartment building. It doesn't have to prove anything about who loved who, or who owed who.",
              "In the direct messages tonight, I told you about messing up my name. I felt a little silly after sending it, but your reply didn't pester me to dig further into that mistake. I sat on the edge of my bed looking at my phone, my feet still resting on the tangled, uncoiled extension cord. When we talked about the future later on, I didn't say I wanted everything to go back to how it used to be. The old days had their fair share of pain I refused to admit, and I can't just call them the best times ever just because they feel familiar.",
              "There are plenty of ordinary, unremarkable days after you say sorry. You'll be late to morning classes, photos will come out blurry, and freshly washed laundry can get splashed by water dripping from the floor above. You don't get a do-over to talk through that night every single day. Sometimes I see Phil Chi's name pop up and I still pause first, worrying a reply too quick might look fake, and one too slow might make her misunderstand. Today I just sent one line that said \"got it\", and didn't tack on three extra explanations after.",
              "Kavin Zhou said in the group chat he saw the exhibition poster, so I sent him the opening hours, then went straight to fix the misprinted exhibition label. Those few minutes were way easier than I thought they'd be. My hands were busy, my mind was fixed on something definite I knew I had to get done, and I didn't keep refreshing my screen waiting for him to send another extra line. Looking back on it tonight, I still can't say exactly how much better I've gotten. But that exhibition label really was fixed, the paper didn't wrinkle, and the adhesive didn't smudge or stick lopsided.",
              "You told me we could talk about new photos next time, and I agreed. This isn't me asking you to judge if my shots are good enough, or trying to trade a photo for a line of forgiveness. Next time I actually capture something I want to share, I'll just send it over. You don't even go to our school, so you don't know the light by the gallery door used to flicker and die—might as well tell you that little random story then too. I hope next time I can remember more little things like that to chat about.",
              "The water in the basin has gone cold, but that smudge of grime on my sleeve finally washed out. I hung my jacket back up, grabbed a scrap of paper, and jotted down the things I need to bring tomorrow: scissors, clear tape, spare exhibition labels. At the very end I added a pack of tissues. I completely forgot to take a picture of the full finished wall after setting everything up, so I'll head over early tomorrow before anyone else shows up, and take my time to get that shot right. This time, my name will be right there on the photo too."
            ],
            "wordCount": 1288,
            "intro": [
              "I'm keeping that old chat log sealed up; I don't plan on going back to open it again.",
              "Today I wanted to talk about the exhibition. If it's just little updates about my life like this, I'm happy to chat slowly about all of it."
            ]
          }
        }
      },
      "xu": {
        "title": "After I turned off the monitor",
        "date": "October 12, 2024",
        "weather": "Autumn evening",
        "rounds": [
          {
            "npc": [
              "Just got back from the practice studio.",
              "I missed my cue twice today during rehearsal. The drummer got too lazy to even say anything, and just counted me back in."
            ],
            "choices": [
              "New environments always take a little while to get used to.",
              "Did you finally get the whole track down smoothly by the end?"
            ],
            "responses": [
              [
                "Yeah, the others don't know all my little weird quirks yet.",
                "This time I really do have to take it slow and practice properly."
              ],
              [
                "The final full run-through was perfect.",
                "I listened back to the recording, caught a wrong chord at the very start, so we'll fix that tomorrow."
              ]
            ]
          },
          {
            "npc": [
              "Back in the day, whenever I wanted to post something, I always overthought how that one specific person would reply.",
              "Today I snapped a random photo of a cat with its back turned to the camera, and it felt really nice just how it was."
            ],
            "choices": [
              "You can totally send that kind of casual photo over next time.",
              "What about that new song—are you still working on it lately?"
            ],
            "responses": [
              [
                "Alright, fair warning, taking photos is definitely not my strong suit.",
                "The cat wouldn't face the camera, and there's nothing I could do about it."
              ],
              [
                "I'm still writing it.",
                "Right now I'm just tweaking one short section to make it flow, no rush to name the whole song yet."
              ]
            ]
          },
          {
            "npc": [
              "I gotta turn off my monitor now, because my next door neighbor just banged on the wall a second ago.",
              "Next time you've got a new draft, or even just messed up and walked into the wrong practice studio again, you can hit me up right?"
            ],
            "choices": [
              "For sure, I'm looking forward to hearing that next section.",
              "Definitely, talk to you next time I'm online."
            ],
            "responses": [
              [
                "Same, I'm really looking forward to it too.",
                "Catch you later—hopefully I'm not messaging you to ask how to fix a missed beat next time."
              ],
              [
                "See you.",
                "You can use this chat anytime, no need to wait for some big important thing to talk about."
              ]
            ]
          }
        ],
        "variants": {
          "open": {
            "text": [
              "Night of October 12. I just finished telling you I'd chat next time I logged on, when my neighbor banged on the wall and told me to turn off my headphone speaker. I glanced over at my computer and realized my sound card's monitor was still running. I said sorry, plugged my headphones back in properly, and the whole room went dead quiet all at once. A bus drove past the intersection outside, its brakes dragging for a long time. I just sat there and listened for a minute, didn't rush to grab my phone to record the sound.",
              "After moving here, the first route I memorized was the path from my dorm to the practice studio. It's not a long walk, but there are two entrances that look almost identical. The very first day I got lost, hauled my guitar bag all over the place and worked up a full sweat. The doorman auntie asked who I was looking for, I told her my band's name, she said she'd never heard of it, and pointed me toward the building behind to ask again. The next day I learned to look for the little wonton shop—turn right when you get to its door, and you can't get lost anymore.",
              "I missed my cue twice at rehearsal today. The drummer didn't say a word, just held up two fingers when we stopped the second time. I said let's do another take, so he slowed the tempo down and let the bass run through the line alone. Moments like this make you realize that when you leave a familiar place, all those tiny little problems old routines used to cover up pop right out. No one here knows what parts I used to handle, and no one will automatically fill in the beat for me just because they know some old story.",
              "I already sent out that last song; Phil Chi said it sounded good before, and I never pestered her to tell me exactly which line she liked. The new bandmates all gave it a listen too, and said we could try adjusting the tempo. When I heard that, it hit me that the work can still keep evolving, and I don't have to freeze it forever hung up on what an old listener thought. Tonight I shortened the second verse, cut out two lines I used to never have the heart to change. When I played it all the way through, it flowed way better, though I'm just still not totally used to the new version yet.",
              "That song Phil Chi co-wrote still has her name on the credits. I didn't take her name off, and I didn't shove the old demo recording into the new track either. After rehearsal someone asked about my early collaborations, so I just said we made music together back when we were in school. He nodded, twisted a tuning peg on his guitar, and the conversation moved on. No one kept pushing to guess what our relationship was, and I suddenly didn't know what else to say, so I asked him how long he'd been using that particular guitar string.",
              "My phone buzzed while I was eating dinner. Someone posted a pic in the old band group chat of the empty practice space. The chairs got rearranged, there were a few new cardboard boxes in the corner, and the music stand I always used was still tilted crookedly. I zoomed in on it for a while, remembered how I kept saying I'd fix it later, but never got around to it before I left. I finally replied telling them to tighten the screws, then immediately thought that was kind of lame and added that the photo was shot really nicely.",
              "There's way more of my stuff left there than I realized. There's probably a leftover guitar pick in my desk drawer, and half a receipt for batteries tucked under my sticky notes. None of it's worth asking someone to mail all the way over here, but knowing it's still there makes me think of those afternoons I never fully wrote down in my diary. Some people were tuning their instruments, some bickering over where to get dinner, someone sitting by the window reworking a lyric over and over. We were really close back then, and it's also really true that we all went our separate ways.",
              "The last thing we talked about wasn't that old demo track; it was about how I messed up my timing at rehearsal today. I sent a message saying I'm so embarrassed, followed by a silly, goofy emoji. I used to always try to make everything I did look perfect in front of people, and brush off the parts I couldn't get right once no one was asking. But saying it out loud to you didn't lead to any drama, your reply was super casual, and I grinned to myself looking at the screen, almost accidentally cranked the monitor volume up again.",
              "I don't have anyone yet who I eat dinner with every single day. Everyone clears out super fast after practice, some have classes, some live really far away. Sometimes I head over to that wonton shop and sit by myself for a bit. The owner already knows I don't add cilantro. Tonight he didn't even have to ask, and I didn't take it as some big special favor, just slid my bowl a little closer to me. The soup was piping hot, so I waited a minute and flipped to the page of sheet music I didn't finish going over earlier.",
              "On the walk back I thought about posting a bunch of new photos to the old group chat. Then I figured I should just take the shots first—no need to attach a whole backstory about why every single one is worth missing. I snapped the neon sign above the shop, then a cat sitting on the steps. The cat wouldn't face the camera, it turned its head away as soon as I lifted my phone. I saved that shot of its back, and thought it looked way better than the ones I took waiting around for it to look at me.",
              "When I said \"see you next time\", I meant the next time I have a free minute to open this chat. I can send new songs, or just complain I walked into the wrong room again. There's no reason every single message we exchange has to feel like a goodbye, no need to prove I'm doing perfectly fine after I left. I haven't totally settled into this new place yet; there are nights I still miss our old practice room, but I really do have to practice tomorrow's sheet music. Both thoughts exist at the same time, neither one is pushing the other away.",
              "By the time I finish writing this entry, the clock in the bottom right of my computer says it's almost midnight. I circled the two bars I need to practice tomorrow, saved a second copy of the file, named it just with today's regular date, no one's name. I turned off the monitor, double-checked that my headphone plug was all the way in so my neighbor wouldn't bang on the wall again. Before I turned the lights off I saw my guitar bag leaning by the door, so I tossed the adapter cable I always forget right into the side pocket. This time I definitely won't leave it behind."
            ],
            "wordCount": 1250,
            "intro": [
              "I finally memorized how to get to the new practice studio no problem now.",
              "All my old songs are just sitting there after I posted them, and right now I want to try writing something totally new."
            ]
          },
          "quiet": {
            "text": [
              "Night of October 12. I just finished telling you I'd chat next time I logged on, when my neighbor banged on the wall and told me to turn off my headphone speaker. I glanced over at my computer and realized my sound card's monitor was still running. I said sorry, plugged my headphones back in properly, and the whole room went dead quiet all at once. A bus drove past the intersection outside, its brakes dragging for a long time. I just sat there and listened for a minute, didn't rush to grab my phone to record the sound.",
              "After moving here, the first route I memorized was the path from my dorm to the practice studio. It's not a long walk, but there are two entrances that look almost identical. The very first day I got lost, hauled my guitar bag all over the place and worked up a full sweat. The doorman auntie asked who I was looking for, I told her my band's name, she said she'd never heard of it, and pointed me toward the building behind to ask again. The next day I learned to look for the little wonton shop—turn right when you get to its door, and you can't get lost anymore.",
              "I missed my cue twice at rehearsal today. The drummer didn't say a word, just held up two fingers when we stopped the second time. I said let's do another take, so he slowed the tempo down and let the bass run through the line alone. Moments like this make you realize that when you leave a familiar place, all those tiny little problems old routines used to cover up pop right out. No one here knows what parts I used to handle, and no one will automatically fill in the beat for me just because they know some old story.",
              "My plans after graduating are still on track exactly like I mapped them out before; they didn't grind to a halt just because someone hit pause on their own stuff. The new song's still in my practice folder, and I'm gonna test it out at our next small rehearsal. I never set a specific date for Phil Chi to have to finish listening to it—she's got her own life to sort out, and I've got stuff I need to learn all over again. Thinking about that old second ticket still stings a little, but the sheet music in front of me won't play itself correctly just because I'm sad about it.",
              "That song Phil Chi co-wrote still has her name on the credits. I didn't take her name off, and I didn't shove the old demo recording into the new track either. After rehearsal someone asked about my early collaborations, so I just said we made music together back when we were in school. He nodded, twisted a tuning peg on his guitar, and the conversation moved on. No one kept pushing to guess what our relationship was, and I suddenly didn't know what else to say, so I asked him how long he'd been using that particular guitar string.",
              "My phone buzzed while I was eating dinner. Someone posted a pic in the old band group chat of the empty practice space. The chairs got rearranged, there were a few new cardboard boxes in the corner, and the music stand I always used was still tilted crookedly. I zoomed in on it for a while, remembered how I kept saying I'd fix it later, but never got around to it before I left. I finally replied telling them to tighten the screws, then immediately thought that was kind of lame and added that the photo was shot really nicely.",
              "There's way more of my stuff left there than I realized. There's probably a leftover guitar pick in my desk drawer, and half a receipt for batteries tucked under my sticky notes. None of it's worth asking someone to mail all the way over here, but knowing it's still there makes me think of those afternoons I never fully wrote down in my diary. Some people were tuning their instruments, some were bickering over where to get dinner, someone was sitting by the window reworking a lyric over and over. We were really close back then, and it's also really true that we all went our separate ways.",
              "The last thing we talked about wasn't that old demo track; it was about how I messed up my timing at rehearsal today. I sent a message saying I'm so embarrassed, followed by a silly goofy emoji. I used to always try to make everything I did look perfect in front of people, and brush off the parts I couldn't get right once no one was asking. But saying it out loud to you didn't lead to any drama. Your reply was super casual, and I grinned to myself looking at the screen, almost accidentally cranking the monitor volume up again.",
              "I don't have anyone yet who I eat dinner with every single day. Everyone clears out super fast after practice; some have classes, some live really far away. Sometimes I head over to that wonton shop and sit by myself for a bit. The owner already knows I don't add cilantro. Tonight he didn't even have to ask, and I didn't take it as some big special favor, just slid my bowl a little closer to me. The soup was piping hot, so I waited a minute and flipped to the page of sheet music I didn't finish going over earlier.",
              "On my way back, I thought about sending a few more photos of this place to the old group chat. Then I decided I'd just take them first — there's no need to attach a reason why each one deserves to be missed. I took a picture of the shop's neon sign, then another of a cat sitting on the steps. The cat refused to look at the camera; it turned its head the second I lifted my phone. I saved that shot of its back, and thought it was a little better than the shots where I deliberately waited for it to turn around.",
              "When I say \"see you next time,\" I mean the next time I have free time to open the chat window. I could send a new song, or just say I walked through the wrong door again. There's no need for every message to feel like a goodbye, much less to prove I'm doing great after I left. I haven't fully gotten used to this new place yet; some nights I still miss the old practice room, but I really do need to practice tomorrow's sheet music. Both thoughts are here, and neither is pushing the other away.",
              "By the time I finish writing this page, the clock in the bottom right corner of my computer shows it's almost midnight. I circled the two measures I need to practice tomorrow, saved a copy of the file under a plain date as the name, with no people's names on it. I turned off the monitor ✓, then double-checked the headphone jack, so the neighbor next door won't come knock on the wall again. Before turning off the light I saw my guitar case leaning by the door, so I put the adapter I always forget to bring in its side pocket. I shouldn't leave it behind this time."
            ],
            "wordCount": 1242,
            "intro": [
              "I've come over as planned, and lately I've been rehearsing with some new people I met.",
              "Take it slow with the new songs, no rush to make someone listen right away."
            ]
          },
          "distance": {
            "text": [
              "Night of October 12. I just finished telling you, the detective, that I'll talk to you next time I log on, when someone next door knocked on the wall, telling me to turn off the speaker output of my headphones. I glanced at my computer, and realized the sound card monitoring was still on. I said sorry, re-plugged the cable, and the room went totally quiet all at once. The bus outside the window passed the intersection, its brake screeched on for a long time. I listened for a while, didn't rush to grab my phone to record it.",
              "After I got here, the first route I got familiar with was the one from the dorm to the rehearsal room. It's not far, but there are two entrances that look almost identical. The first day I took a wrong turn, and walked until I was sweating while carrying my guitar bag. The doorman aunt asked who I was looking for, I told her my band's name, she said she didn't know them, and pointed me to the building behind and told me to ask there. The second day I learned to spot a small wonton shop — turn right when you reach the shop, and you won't get lost.",
              "Today during rehearsal I walked in through the wrong door twice. The drummer didn't say anything, just held up two fingers when I stopped the second time. I said let's do it again, and he slowed the tempo down, letting the bass play its part alone. That's when I realized that once you leave a place you know really well, so many little problems that used to be covered up by unspoken familiarity start to show. No one knows what part I used to handle, and no one will fill in the beats for me just because they know some old story.",
              "I still don't want more people to hear that conversation we never made public back then. Today I only talked to you, the detective, about the current rehearsal, and we agreed beforehand not to dig up old business. Phil Chi's private voice isn't mixed into the new tracks, and there's no hidden message she would recognize. I tried writing an opening that has nothing to do with our old relationship, wasn't happy with the first two drafts, and the third one finally sounds passable. Turns out even a song with no recipient still takes slow, careful practice to write.",
              "The song Phil Chi helped write still has her name in the credits right where it was. I didn't take her name off, and I didn't slip the old recording into the new tracks. After rehearsal someone asked about our early collaborations, and I said we made some works together back in college. He nodded, looked down to tune his guitar, and the topic dropped. No one kept guessing about our relationship, and I didn't even know how to keep the conversation going, so I just asked him how long he'd been using that guitar string.",
              "My phone buzzed while I was having dinner. Someone in my old band group chat sent a photo of our empty old rehearsal room. The chairs had been moved around, there were a few new cardboard boxes in the corner, and the music stand I always used was still tilted. I zoomed in on the photo for a while, remembered how we always said we'd fix it later, and never got around to it even when I left. I finally replied to their message, telling them to tighten the screws, then felt that was kind of lame, so I added that the photo turned out really nice.",
              "The stuff I left there was more than I imagined. There are probably some unused guitar picks in my desk drawer, and half a receipt for buying batteries tucked under a sticky note. Those things aren't worth asking someone to mail over, but just knowing they're still there for now makes me remember some afternoons I never fully wrote down in my diary. Someone doing a sound check, someone arguing about what to get for dinner, someone sitting by the window rewriting a line of lyrics over and over. Back then we were really close, and it's also true that we all went our separate ways later.",
              "The last thing I talked to you, the detective, about wasn't that recording — it was about me messing up the beat during rehearsal today. I sent the message \"so embarrassing\" followed by a really silly emoji. I used to always make sure I did everything perfectly in front of other people first, and just gloss over the parts I messed up once no one asked about them. Saying it out loud today didn't lead to any trouble. You replied super casually, I smiled through the screen, and almost cranked the monitoring volume all the way open by accident.",
              "There's no one here I can grab dinner with regularly yet. Everyone from rehearsal splits fast; some have classes to go to, some live really far away. Sometimes I go to that wonton shop by myself to hang out for a bit, and the owner already remembers I don't eat cilantro. He didn't ask tonight, and I didn't think that was some special favor, I just moved my bowl a little closer to myself. The soup was kinda hot, I waited for a while, and flipped through the page of sheet music I didn't finish looking at earlier today.",
              "On my way back, I thought about sending a few more photos of this place to the old group chat. Then I decided I'd just take them first — there's no need to attach a reason why each one deserves to be shared. I took a picture of the shop's neon sign, then another of a cat sitting on the steps. The cat refused to look at the camera; it turned its head the second I lifted my phone. I saved that shot of its back, and thought it was a little better than the shots where I deliberately waited for it to turn around.",
              "When I say \"see you next time,\" I mean the next time I have free time to open the chat window. I could send a new song, or just say I walked through the wrong door again. There's no need for every message to feel like a goodbye, much less to prove I'm doing great after I left. I haven't fully gotten used to this new place yet, some nights I still miss the old practice room, but I really do need to practice tomorrow's sheet music. Both thoughts are here, and neither is pushing the other away.",
              "By the time I finish writing this page, it's almost midnight, according to the clock in the bottom right corner of my computer. I circled the two measures I need to practice tomorrow, saved a copy of the file under a plain date as the name, with no people's names on it. I turned off the monitor, then double-checked the headphone jack, so the neighbor next door won't come knock on the wall again. Before turning off the light I saw my guitar case leaning by the door, so I put the adapter I always forget to bring in its side pocket. I shouldn't leave it behind this time."
            ],
            "wordCount": 1227,
            "intro": [
              "That conversation we never made public back then, let's just leave it at that for now.",
              "Lately I've been rehearsing in this new place, and I can tell you all about what's going on over here."
            ]
          }
        }
      }
    }
  }
};
