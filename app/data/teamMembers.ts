interface TeamMember {
    name: string;
    role: string;
    photo: string | null;
    socials: string | null;
    quote: string | null;
}
const teamMembers: TeamMember[] = [
  {
    "name": "Spencer Ong",
    "role": "President",
    "photo": "spencer-ong.jpg",
    "socials": "https://www.linkedin.com/in/spencer-ong-6106a7322/",
    "quote": "professional sidequester"
  },
  {
    "name": "Yeo Yi Shan",
    "role": "Deputy Chief Organiser",
    "photo": "yeo-yi-shan.jpeg",
    "socials": "https://www.linkedin.com/in/yeo-yi-shan-aa697a278",
    "quote": "im lovin' it"
  },
  {
    "name": "Hayden Tan",
    "role": "Head of Events",
    "photo": "hayden-tan.jpg",
    "socials": "https://www.instagram.com/sleepyaxion",
    "quote": "i almost fell down that mountain"
    
  },
  {
    "name": "Theshyan Thirun",
    "role": "Events IC",
    "photo": "theshyan-thirun.jpeg",
    "socials": "https://www.linkedin.com/in/theshyan-thirun-813ab0243",
    "quote": "why did ntuc tie all its goods in rubber bands? to make them income inelastic"
  },
  {
    "name": "Matilda Laq",
    "role": "Events IC",
    "photo": "matilda-laq.jpeg",
    "socials": "https://www.instagram.com/matildaonbread",
    "quote": "J2 HELM Student"
  },
  {
    "name": "Trista Tanary",
    "role": "Events IC",
    "photo": null,
    "socials": "https://www.linkedin.com/in/trista-tanary-294b4a3a2/",
    "quote": "live laugh love"
  },
  {
    "name": "Toh jo-lynne",
    "role": "Events IC",
    "photo": "toh-jo-lynne.jpeg",
    "socials": "https://www.linkedin.com/in/jolynne-toh-747229356",
    "quote": "Stay hungry, stay foolish"
  },
  {
    "name":"Zeng TaoJinHao ",
    "role": "Events IC",
    "photo": "zeng-taojinhao.jpg",
    "socials":"https://www.linkedin.com/in/zeng-taojinhao-a36381218",
    "quote":"Be wise, move on"
  },
  {
    "name": "Fang Yuyue",
    "role": "Chief Academic Officer",
    "photo": "fang-yuyue.jpeg",
    "socials": "https://www.linkedin.com/in/fang-yuyue",
    "quote": "Hi!"
  },
  {
    "name": "Dhruv Aggarwal",
    "role": "Academic Consultant",
    "photo": "dhruv-aggarwal.jpeg",
    "socials": "https://www.linkedin.com/in/dhruv-aggarwal-finance",
    "quote": "Chase the impossible"
  },
  {
    "name": "Guo Shuhan",
    "role": "Lead Problem Setter",
    "photo": null,
    "socials": "http://linkedin.com/in/shuhan-guo-b34814280",
    "quote": "Why can’t I just print money"
  },
  {
    "name": "Qian Zhe Chong",
    "role": "Lead Problem Setter",
    "photo": null,
    "socials": "https://www.linkedin.com/in/qian-chong-3a3410265",
    "quote": "Take strategies, not sentiments"
  },
  {
    "name": "Royce Goh",
    "role": "Lead Problem Setter",
    "photo": null,
    "socials": null,
    "quote": null
  },
  {
    "name":"Jonathan Tan",
    "role": "Lead Problem Setter",
    "photo": "jonathan-tan.jpeg",
    "socials": "https://www.linkedin.com/in/jonathan-tan-16b408407",
    "quote": "The early bird gets the cheeseburger."
  },
  {
    "name": "Wee Chuan Jie",
    "role": "Problem Setter",
    "photo": null,
    "socials": "https://www.instagram.com/wheats_wheatz/",
    "quote": "Live life without regrets"
  },
  {
    "name": "Chua Zhong Ding",
    "role": "Lead Software Developer",
    "photo": "chua-zhong-ding.png",
    "socials": "https://www.linkedin.com/in/chua-zhong-ding-94412728b/",
    "quote": "unpaid intern"
  }
]

export default teamMembers;
export type { TeamMember };