import { useState } from 'react'
import './App.css'
import TharoAptisReading from './TharoAptisReading';
import TharoAptisReadingPart5 from './TharoAptisReadingPart5';
import TharoAptisReadingPart4 from './TharoAptisReadingPart4';

const PAGE_DATA = [
  {
    topic: 'Making films',
    title: 'The first film was shown in 1895 in Paris, France.',
    choices: [
      '1.Due to the lack of money, actors also had few opportunities to earn money through acting.',
      '2.Now things have changed, actors and filmmakers can earn millions of dollars from film production.',
      '3.Old movies were very different from today\'s movies.',
      '4.Not only did these technological limitations exist, the movies were also low budget.',
      '5.That\'s because the movies were only in black and white, and sometimes without sound.'
    ],
    correctOrder: [2, 4, 3, 0, 1]
  },
  {
    topic: 'Weekend activities',
    choices: [
      '1.After she received the prize, the following time was for children\'s activities.',
      '2.Activities included football, swimming, skipping rope, and the children played very happily.',
      '3.It was held on Saturday morning, there was a 10 mile race for adults.',
      '4.After playing, the children were very hungry and ate with their parents.',
      '5.There were 60 participants, in which Ms Kamur kept the fastest speed and won.'
    ],
    correctOrder: [2, 4, 0, 1, 3]
  },
  {
    topic: 'The famous singer',
    title: 'Many people dream of becoming a famous singer, but only a few achieve it.',
    choices: [
      '1.Thanks to his talent and style, he became more and more famous and well-known.',
      '2.Before becoming famous, he had to practice very hard every day.',
      '3.Many people started to notice him because of his talent and creativity',
      '4.At the age of fifteen, he studied music at a special school.',
      '5.With his unique style and clothes, he soon attracted attention.'
    ],
    correctOrder: [1, 3, 4, 2, 0]
  },
  {
    topic: 'Preparing to Write about a Place',
    choices: [
      '1.This comparison will help you find common points between countries.',
      '2.Before writing, we need to find out some information about the place',
      '3.You may not find all the above information but you will find places with similarities',
      '4.That information can revolve around the aspects: people, culture and history',
      '5.When collecting information about the above 3 aspects, you can compare with places in your country'
    ],
    correctOrder: [1, 3, 2, 4, 0]
  },
  {
    topic: 'Group presentation',
    choices: [
      '1.During the presentation, we use pictures and our own words to explain the ideas',
      '2.Finally, group members take turns answering the questions.',
      '3.Then, we present our topic for five minutes',
      '4.First, we prepare materials for our group presentation',
      '5.After the presentation, the other students ask questions'
    ],
    correctOrder: [3, 2, 0, 4, 1]
  },
  {
    topic: 'Artificial Intelligence',
    choices: [
      '1.Modern AI tools help businesses analyze data and improve decision-making.',
      '2.High computational costs restricted AI development in the past',
      '3.Artificial intelligence has transformed industries over the past decade',
      '4.Early AI systems were limited to basic pattern recognition tasks',
      '5.Today, AI engineers create advanced models for tasks like language translation'
    ],
    correctOrder: [2, 3, 1, 4, 0]
  },
  {
    topic: 'Tech Innovation Exposition',
    choices: [
      '1.The tech expo was held on Sunday morning, showcasing cutting-edge innovations',
      '2.Activities included 3D printing demos, AI workshops, and virtual reality trials',
      '3.After the presentations, awards were given for the most creative prototype',
      '4.Attendees enjoyed networking over coffee and exploring interactive displays.',
      '5.Over 75 participants attended, with Ms. Tran presenting a smart home device'
    ],
    correctOrder: [0, 4, 2, 1, 3]
  },
  {
    topic: 'Internet of Things (IoT)',
    choices: [
      '1.Modern IoT systems enable real-time data monitoring and automation.',
      '2.Early IoT devices were limited by slow internet speeds and compatibility issues',
      '3.The Internet of Things connects everyday devices to enhance functionality',
      '4.Engineers now design smart devices for homes and industries',
      '5.High development costs restricted IoT adoption in the past'
    ],
    correctOrder: [2, 1, 4, 3, 0]
  },
  {
    topic: 'A new cafe',
    title: 'Yesterday I went to a new opening cafe named Corner Cafe on High street',
    choices: [
      '1.I chose the most expensive sandwich',
      '2.They gave me the menu and when I looked at it I saw quite a few dishes',
      '3.It tasted quite good and I will definitely go back to this place.',
      '4.Although it was busy the staff still arranged a table for me',
      '5.When I was there it was very crowded and the staff were very busy on the first day'
    ],
    correctOrder: [4, 3, 1, 0, 2]
  },
  {
    topic: 'End-of-term Project',
    choices: [
      '1.After this time, other students will have questions for you and you have to answer them.',
      '2.The end of term project will focus on at least two of these chapters.',
      '3.This talk will point out the key points, and should last about 5 minutes in total.',
      '4.It will have relevant pictures, and your own writing on the topic.',
      '5.You will then need to use these pictures and written work to create a presentation for the class.'
    ],
    correctOrder: [1, 3, 4, 2, 0]
  },
  {
    topic: 'Music festivals',
    title: 'Last Saturday, a live music show was held in town park',
    choices: [
      '1.The singer performed for 2 hours, everyone had great fun.',
      '2.People came early and sat in nearby shops waiting for the start time',
      '3.The local government planned, funded and paid for everything',
      '4.The staff were very busy but still closed the shop early to watch the singer',
      '5.Because it was free, more than 5,000 people attended'
    ],
    correctOrder: [2, 4, 1, 3, 0]
  },
  {
    topic: 'College welcome day',
    title: 'College Welcome Day will be held on Wednesday the 13th.',
    choices: [
      '1.At the end of the talk, you will meet the head of department and teachers',
      '2.This meal is on the 2nd floor of the building',
      '3.These staff members give you a guided tour of the building',
      '4.It starts at 10am, there is a small presentation in the main hall',
      '5.During the trip, you have to stay with other students until lunch break'
    ],
    correctOrder: [3, 0, 2, 4, 1]
  },
  {
    topic: 'African American Women in Space',
    title: 'A woman whose father is a skilled worker and mother is a teacher.',
    choices: [
      '1.Some of those include growing plants and animals in a spaceship.',
      '2.Being a part of this group, she traveled to space frequently, and conducted many experiments in space.',
      '3.Her degree in the subject enabled her to take a training course in the USA.',
      '4.With the support of her parents, she went to university and studied science.',
      '5.This was about science, she was later a member of the research team.'
    ],
    correctOrder: [3, 2, 4, 1, 0]
  },
  {
    topic: 'Delivery man -- Từ đây trở đi là đề cũ nha',
    choices: [
      "1.You must return your keys to the office manager after you get back.",
      "2.You should arrive at the main office by 6.30am and collect your keys.",
      "3.You must follow the route on the map to deliver packages\t.",
      "4.When you have completed all deliveries, return to your office.",
      "5.In the office, you can also collect a map of your route."
    ],
    correctOrder: [1, 4, 2, 3, 0]
  },
  {
    topic: 'Buying a new house',
    choices: [
      "1.Such requirements of course depend on you personal circumstances",
      "2.The first and most important thing is to choose the location",
      "3.Other factors to look at is the place of employment, shops and schools",
      "4.In order to choose the right place, you need to consider several factors",
      "5.The most important of these to look at is the price of home."
    ],
    correctOrder: [1, 3, 4, 2, 0] // (1) là index 1, (2) là index 3, (3) là index 4, (4) là index 2, (5) là index 0
  },
  {
    topic: 'Using public cycle',
    choices: [
      "1.Choose 'hire the cycle' on the screen and then follow the instructions to receive an unlock code.",
      "2.Enter the code on the lock of the bike and wait for the green light.",
      "3.When the light comes, you can unlock your bike and start your journey.",
      "4.Go to the collection point and click on the screen to choose the bike with your bank card.",
      "5.When you finish your journey, return the bike to any empty collection point."
    ],
    correctOrder: [3, 0, 1, 2, 4]
  },
  {
    topic: 'Natural history center',
    choices: [
      "1.The most important of these is the Natural history centre.",
      "2.When you enter the building from the square, you will see a set of stairs to your left.",
      "3.The ticket office is on the top of these stairs, the staff there are very helpful.",
      "4.The entrance of the centre is on the town's main square.",
      "5.As well as selling tickets, they can provide maps and useful tour information."
    ],
    correctOrder: [0, 3, 1, 2, 4]
  },
  {
    topic: 'Traffic lights',
    choices: [
      "1.They were out of order and the traffic moved very slowly.",
      "2.Fortunately, in the evening, the traffic lights were working again.",
      "3.Therefore, there were no further delays for people going back home.",
      "4.This created long delays in the roads to the city's business district.",
      "5.As a result of these delays, many people were not able to get to work on time."
    ],
    correctOrder: [0, 3, 4, 1, 2]
  },
  {
    topic: 'Enter the conference hall',
    choices: [
      "1.Show your pass from the conference pack to a member of staff at the desk",
      "2.He or she will tell you your seat number for the talk at the main hall",
      "3.When you collect your pack, go to the lifts on the right",
      "4.Take the lift to the third floor and go to the main desk",
      "5.Once you are in the hall, someone will help you find your seat"
    ],
    correctOrder: [2, 3, 0, 1, 4]
  },
  {
    topic: 'Enter the animal hospital',
    choices: [
      "1.When you arrive, go straight to the main office to collect your ticket",
      "2.Before you look at the pictures, a guide will tell you about the day’s event",
      "3.These activities will include playing and feeding the animals",
      "4.You will need to show this to a member of staff at the door before you enter",
      "5.Inside the building, you will find a photography exhibition on the ground floor"
    ],
    correctOrder: [0, 3, 4, 1, 2]
  },
  {
    topic: "Betty Barr’s life",
    choices: [
      "1.She was born in Shanghai in 1933 to an American mother and a father from Scotland",
      "2.However, she missed China and applied for a job in Hong Kong, where she taught from 1959 to 1972 and learnt to speak Cantonese, the local language",
      "3.In the 1980s, she finally returned to China and still lives with her Shanghai husband, George Wang",
      "4.At that time, Shanghai was a city filled with many people from different countries",
      "5.After she finished her school, she went to Wellesley College, a famous university in the USA"
    ],
    correctOrder: [0, 3, 4, 1, 2]
  },
  {
    topic: 'My first car',
    choices: [
      "1.I have just passed the test, and I am the proud owner of the driving license",
      "2.We agreed on a price and when I handed over the money, he gave me the keys",
      "3.However, I did not have a car and my parents would not let me drive theirs",
      "4.So, when I saw an advertisement on the local newspaper for a cheap second hand car, I did not waste a time",
      "5.I called the number in that advert and arranged a meeting to meet the owner on the other side of the town"
    ],
    correctOrder: [0, 2, 3, 4, 1]
  },
  {
    topic: 'Key card',
    choices: [
      "1.He or she will ask for your name and your flat number, and then will write these down",
      "2.You will also need to show your identification card",
      "3.To enter the building and use the lift, you will need your key card",
      "4.If you lose this, you will need to see the staff member at the front desk",
      "5.He or she will make a copy of it and give you a new key card"
    ],
    correctOrder: [2, 3, 0, 1, 4]
  },
  {
    topic: 'Tom Harper',
    choices: [
      "1.When he was young, he began writing short stories for a magazine",
      "2.He almost left the magazine, but then he decided to create some unusual new characters",
      "3.The characters he imagined were one of the most famous in the world",
      "4.He soon wrote regularly for the magazine, but he was not satisfied",
      "5.This popularity made Tom Harper rich and successful"
    ],
    correctOrder: [0, 3, 1, 2, 4]
  },
  {
    topic: 'Car park',
    choices: [
      "1.When you arrive, please take a ticket from a machine at the entrance",
      "2.This ticket will show the date and the time you arrived",
      "3.Please display the ticket with this information in the window of your car",
      "4.Before you leave, please put the ticket on the machine by the gate",
      "5.The machine will read your information and tell you how much you have to pay"
    ],
    correctOrder: [0, 1, 2, 3, 4]
  },
  {
    topic: 'Submitting papers work',
    choices: [
      "1.In your account, press “open new window”",
      "2.Simply drag and drop your files",
      "3.Once you put the files there, press the “send” button",
      "4.After you send your work, you should check your email",
      "5.When you do this, a new window will open"
    ],
    correctOrder: [0, 4, 1, 2, 3]
  },
  {
    topic: 'Instructions for new students',
    choices: [
      "1.When you arrive at the university, go to the help desk",
      "2.A member of staff will ask for your name and your address",
      "3.He or she will enter your information into the computer and give you an identification card",
      "4.You can use this card to borrow books from the library and access lesson materials online",
      "5.You will find these in material links on your home page"
    ],
    correctOrder: [0, 1, 2, 3, 4]
  },
  {
    topic: 'Participate in a race',
    choices: [
      "1.On your arrival, please go to the information point at the north gate",
      "2.A member of staff will give you a numbered armband to wear",
      "3.Please put this on immediately and join other competitors at the warm-up area",
      "4.Runners must register here at least 30 minutes before the race starts at 9am",
      "5.To do this, you just need to give us your photo card"
    ],
    correctOrder: [0, 3, 4, 1, 2]
  },
  {
    topic: 'Solve a problem',
    choices: [
      "1.The first step is to find out what you know about the problem",
      "2.Then, you need to perform experiments to see if these ideas are true or not",
      "3.Also, you can compare your results with experiments in the past",
      "4.The next one is to form a hypothesis or an idea based on your information",
      "5.In this way, you can add to your knowledge of the subject for future experiments"
    ],
    correctOrder: [0, 3, 1, 2, 4]
  },
  {
    topic: 'Quy trình nộp report',
    choices: [
      "1.You should also include a list of books that you use for reference",
      "2.When you have finished your report, correct all the mistakes",
      "3.After you make the corrections, send your report by your email",
      "4.Before you send your report, you should look at websites for the information you need",
      "5.Remember to save links to websites and include them in your report"
    ],
    correctOrder: [3, 4, 0, 1, 2]
  },
  {
    topic: 'Procedure for using a printer',
    choices: [
      "2.A light comes on at the front of the printer",                   // index 0
      "1.Before using the printer, you need to put papers into it",      // index 1
      "3.When your printer is in place, turn it on using the switch",    // index 2
      "5.If the light is green, your printer is ready to use",           // index 3
      "4.First, you need to find an appropriate place to put your printer" // index 4
    ],
    correctOrder: [4, 2, 0, 3, 1] // thứ tự theo logic gốc ứng với chỉ số mới
  },
  {
    topic: "A scientist’s life – Albert",
    choices: [
      "1.His best friend in his new class was a girl named Lavine",
      "2.She later became his wife and helped him with his earliest scientific discoveries",
      "3.These were so advanced that he soon became famous all over the world",
      "4.As a child, he moved to a special school because he was so clever",
      "5.Princeton University in the USA offered him a job because he was so famous"
    ],
    correctOrder: [3, 0, 1, 2, 4]
  },
  {
    topic: 'Conference Hall Procedure',
    choices: [
      "4.After he finishes, there will be time for questions",            // index 0
      "5.When you arrive at the conference hall, give your booking number", // index 1
      "1.If you would like to attend his talk, it will take place in the main hall at midday", // index 2
      "2.A staff member will note this down and give you a welcome pack", // index 3
      "3.Inside you will find a schedule of events and information about the key speaker" // index 4
    ],
    correctOrder: [1, 3, 4, 2, 0] // theo đúng trình tự logic ứng với chỉ số mới
  },
  {
    topic: 'Hand in Assignment',
    choices: [
      "1.Bring your assignment with the attached cover sheet to the front desk in the main hall", // index 0
      "3.First, it is a good idea to check your report and correct mistakes",                     // index 1
      "5.The staff member will take your report and confirm that everything is complete",         // index 2
      "4.When you are sure there are no mistakes left, print out your report",                    // index 3
      "2.Next, complete a cover sheet with your name and your student number, and attach it to your printed assignment" // index 4
    ],
    correctOrder: [1, 3, 4, 0, 2]
  }
  ,
  {
    topic: 'Fire Instructions',
    choices: [
      "1.Next, walk calmly to the doors marked “Emergency Exit”",                          // index 0
      "4.Outside, gather on the grass and wait for further instructions",                  // index 1
      "3.Through these doors, there are stairs leading you to the ground floor",           // index 2
      "2.When you hear the alarm, leave your bags and belongings at the desk",             // index 3
      "5.When you reach the bottom of these stairs, leave the building through the front entrance" // index 4
    ],
    correctOrder: [3, 0, 2, 4, 1]
  },
  {
    topic: 'A famous football player',
    choices: [
      "1.When he was a child, he played for some local teams near his home in Marseille",
      "2.After that, he moved to Italy and Spain, where he finished his playing career",
      "3.He then moved away from his home to join Cannes Football Club in southern France",
      "4.While he was at that club, people throughout France saw that he was a brilliant player",
      "5.Since he retired from playing, he has worked as a football club manager"
    ],
    correctOrder: [0, 2, 3, 1, 4]
  },
  {
    topic: 'How to grow potatoes',
    choices: [
      "1.All you need is some earth, an old potato, and a big pot",
      "2.When you’ve done this, you should water it every day and place it in a sunny spot",
      "3.With this care, you should see a potato plant growing after a couple of weeks",
      "4.An old potato will have little roots, will be a little green, and won’t be good for eating",
      "5.This colour means it is perfect for growing—you should put some earth in the pot and dig it deep down"
    ],
    correctOrder: [0, 3, 4, 1, 2]
  },
  {
    topic: 'Famous actor Jay',
    choices: [
      "1.Jay was very good at that and he participated in a bodybuilding competition",         // old index 2
      "2.It was a major action movie and he gained fame from that film",                       // old index 4
      "3.He started studying at the school in that country, and in his free time he did some strength exercises", // old index 1
      "4.At one of these events, an actor agent saw him and gave him a starring role",         // old index 3
      "5.They left their home country and took Jay to live in the United States"               // old index 0
    ],
    correctOrder: [4, 2, 0, 3, 1]
  },
  {
    topic: 'Process of growing roses',
    choices: [
      "1.Once you planted it, water them everyday",
      "2.The amount of water depends on the weather condition",
      "3.Put the base of the rose and cover the root with lease earth",
      "4.In the chosen place, dig a deep hole in the ground",
      "5.Push this down by hand until the tree is straight"
    ],
    correctOrder: [3, 2, 4, 0, 1]
  },
  {
    topic: 'The dream of space travel',
    choices: [
      "1.When she was a child, she was very interested in space.",
      "2.A year later, she was selected to fly into space.",
      "3.They introduced her to a job opportunity at a prestigious organization.",
      "4.This hard work was recognized by many lecturers at the university.",
      "5.Because of this passion, she worked very hard and passed the university entrance exam."
    ],
    correctOrder: [0, 4, 3, 2, 1]
  }
];

function App() {
  const [page, setPage] = useState(0);
  const [part, setPart] = useState('part2'); // 'part2' hoặc 'part5'
  const maxPage = PAGE_DATA.length - 1;
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar buttons */}
      <div style={{ minWidth: 180, padding: '32px 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <button
          onClick={() => setPart('part2')}
          style={{
            padding: '12px 18px',
            fontWeight: 600,
            fontSize: 18,
            background: part === 'part2' ? '#2d3a4a' : '#fff',
            color: part === 'part2' ? '#fff' : '#2d3a4a',
            border: '2px solid #2d3a4a',
            borderRadius: 8,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          Reading Part 2
        </button>
        <button
          onClick={() => setPart('part4')}
          style={{
            padding: '12px 18px',
            fontWeight: 600,
            fontSize: 18,
            background: part === 'part4' ? '#2d3a4a' : '#fff',
            color: part === 'part4' ? '#fff' : '#2d3a4a',
            border: '2px solid #2d3a4a',
            borderRadius: 8,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          Reading Part 4
        </button>
        <button
          onClick={() => setPart('part5')}
          style={{
            padding: '12px 18px',
            fontWeight: 600,
            fontSize: 18,
            background: part === 'part5' ? '#2d3a4a' : '#fff',
            color: part === 'part5' ? '#fff' : '#2d3a4a',
            border: '2px solid #2d3a4a',
            borderRadius: 8,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          Reading Part 5
        </button>
      </div>
      {/* Main content */}
      <div style={{ flex: 1 }}>
        {part === 'part2' ? (
          <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '24px 0' }}>
              <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} style={{ fontSize: 24, marginRight: 16 }}>&lt;</button>
              <span style={{ fontWeight: 600, fontSize: 18 }}>Page {page + 1} / {PAGE_DATA.length}</span>
              <button onClick={() => setPage(p => Math.min(maxPage, p + 1))} disabled={page === maxPage} style={{ fontSize: 24, marginLeft: 16 }}>&gt;</button>
            </div>
            <TharoAptisReading
              key={page}
              topic={PAGE_DATA[page].topic}
              title={PAGE_DATA[page].title}
              choices={PAGE_DATA[page].choices}
              correctOrder={PAGE_DATA[page].correctOrder}
            />
          </>
        ) : part === 'part4' ? (
          <TharoAptisReadingPart4 />
        ) : (
          <TharoAptisReadingPart5 />
        )}
      </div>
    </div>
  )
}

export default App
