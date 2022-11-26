import mongoose from 'mongoose'
import { SalvationStory } from '../model'
import { ISalvationStory } from '../model/salvation_story'
import dotenv from 'dotenv'

dotenv.config()

const salvationStories: Array<ISalvationStory> = [
  {
    author: 'user_0',
    body: `“I'm on my way to hell,” said Sam,* a New Orleans homeowner. Billy Graham Rapid Response Team chaplains recently deployed to three areas of Louisiana following Hurricane Ida, a Category 4 storm which caused catastrophic damage. The chaplains had started a conversation with him at his home that led to spiritual matters. Sam shared some personal and financial challenges related to his ex-wife, and he said his bitterness toward her caused him much grief. Our chaplains used Scripture to explain the Gospel, sharing the wages of our sin and God's gift of salvation. When they asked him if he would like to spend eternity with Jesus Christ and grow in joy and peace, he tearfully replied, “Yes!” Sam prayed to repent of his sins and invite Christ into his life, and he also prayed for God to enable him to forgive his ex-wife. The chaplains prayed with him, that the Lord would bless his ex-wife and bring her to salvation.`,
    date_of_salvation: new Date(),
    venue: 'Believer Convention 2022'
  },
  {
    author: 'user_1',
    body: `In metro Detroit, Stephen,* one of our chaplains, encountered Brad,* a homeowner in his late 40s distressed over the effects of recent torrential rains that caused widespread flooding. When the chaplain asked if he had a relationship with Jesus Christ, he said he did not but needed spiritual help. “I’ve never heard that Jesus wants a relationship with me.” Stephen then shared the Gospel with Brad, who followed along intently. Brad indicated he wanted to begin a relationship with the Lord, and he prayed to surrender his life to Christ.`,
    date_of_salvation: new Date('10/01/2000'),
    venue: 'Begat 2019'
  },
  {
    author: 'user_2',
    body: `In Plumas County, California, the Dixie Fire is the largest single wildfire in the state’s history, burning more than 740,000 acres across four counties. Billy Graham chaplains recently deployed to the area, and our mobile ministry center has been a haven for many community members who have come to meet with the chaplains to talk and receive encouragement.`,
    date_of_salvation: new Date('1999'),
    venue: 'Open-Air Crusade'
  },
  {
    author: 'user_3',
    body: `“I am at the end of my rope,” said Mike,* a 78-year-old Vietnam veteran who stopped by the mobile ministry center in Houma, Louisiana, to ask for prayer. His wife was terminally ill, and he told his story of losses and how hopeless he felt. The chaplains believed the Lord was at work. They used Scriptures and the “Steps to Peace With God” booklet to share about sin and salvation, as well as the lasting hope and comfort found only in Jesus.`,
    date_of_salvation: new Date('2012'),
    venue: 'Online Conference'
  },
  {
    author: 'user_4',
    body: `But this year, things changed  I felt a call, a need to find a place where I could belong. That’s when I was told about a Salvation Army shop no more than 800 metres from my home! About 20 years ago, I had been part of the Salvos in Geraldton, so I was happy to hear of a shop near me, and I went searching.`,
    date_of_salvation: new Date('05/05/2016'),
    venue: 'Online Conference'
  },
  {
    author: 'user_5',
    body: `When I arrived, the shop was closed, but I met an amazing woman of God – Major Naava Brooks. As we talked, she mentioned that she, with Major Jenny Armstrong, were the majors of the Salvos church here. The moment there was mention of a church, I felt drawn to it and needed to go. When I walked through the doors on Sunday, I heard Naava say, “Here he is.” I felt welcome.`,
    date_of_salvation: new Date('2016'),
    venue: 'Online Conference'
  },
  {
    author: 'user_6',
    body: `At first, it was very different a lot of elderly and the service was very different to what I was used to, so I said I would come back the following week. The sermon was fantastic, I felt more connected, the music was still different to me, but the message was clear. I started to feel like this could become my new home. As I kept coming, I got to meet and become friends with some amazing people.`,
    date_of_salvation: new Date('2016'),
    venue: 'Online Conference'
  },
  {
    author: 'user_7',
    body: `As the months went by, I grew more invested and connected, and I could feel God bringing me home. I wanted to offer myself in service, to really be part of my new spiritual home. So, I spoke with Naava to learn about how to become a member. I was given two options, adherent or soldier, and I knew immediately what and how I was to belong to this home ­­– this family of God. I wanted to fully surrender to him, to be the man of God he wanted me to be, so I gave him all of me.`,
    date_of_salvation: new Date('2019'),
    venue: 'Online Conference'
  },
  {
    author: 'user_8',
    body: `Being a soldier of The Salvation Army means a complete surrender to God in every way, in every part of my life. I now live for him, and I have never been so happy. I feel fulfilled in God, stronger in him, and so grateful he accepts me. For all he has done for me, I could do nothing less in return.`,
    date_of_salvation: new Date('05/08/2020'),
    venue: 'Online Conference'
  },
  {
    author: 'user_9',
    body: `It is in my heart to share the gospel the Good News that Jesus saves. No matter who you are, Jesus is ready and waiting for you. His love, grace and mercy endure forever and ever. He loves you right where you’re at, and to share his love and word with those around me is just fantastic.`,
    date_of_salvation: new Date('2001'),
    venue: 'Online Conference'
  }
]

async function populateDatabaseWithSalvationStories() {
  if (process.env.CONNECTION_STRING) {
    await mongoose.connect(process.env.CONNECTION_STRING)
    await SalvationStory.insertMany(salvationStories)
  } else throw new Error()
}

populateDatabaseWithSalvationStories()
  .then(async () => {
    console.log('successfully populated database with mock data')
    await mongoose.connection.close()
  })
  .catch((err) => console.log(err.message))
