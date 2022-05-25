const awards = [
    {
        key: 13,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/c32f33b/2147483647/strip/true/crop/225x338+0+11/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F21%2F95%2Ff7f98631f04ac68943afbad7bb83%2Fanne-of-green-gables.jpg",
        title: "Anne of Green Gables",
        author: "Lucy Maud Montgomery",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700", 
        about: "Anne's own true love, Gilbert Blythe, is finally a doctor, and in the sunshine of the old orchard, among their dearest friends, they are about to speak their vows. Soon the happy couple will be bound for a new life together and their own dream house, on the misty purple shores of Four Winds Harbor. A new life means fresh problems to solve, fresh surprises. Anne and Gilbert will make new friends and meet their neighbors: Captain Jim, the lighthouse attendant, with his sad stories of the sea; Miss Cornelia Bryant, the lady who speaks from the heart -- and speaks her mind; and the tragically beautiful Leslie Moore, into whose dark life Anne shines a brilliant light."
    },
    {
        key: 14,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/465f4c3/2147483647/strip/true/crop/225x338+0+11/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F02%2F9c%2F5e5662510b911ca35cf46a2479a5%2Fadventures-of-sherlock-holmes.jpg",
        title: "Adventures of Sherlock Holmes",
        author: "Arthur Conan Doyle",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700", 
        about: "A colonel receives five seeds in the mail--and dies within weeks. A young bride disappears immediately after her wedding. An old hat and a Christmas goose are the only clues to a stolen jewel. A son is accused of his father's murder. These mysteries--and many more--are brought to the house on Baker Street where detective Sherlock Holmes resides. No case is too tricky for the world's most famous sleuth and his incredible powers of deduction."
    },
    {
        key: 15,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/b27a739/2147483647/strip/true/crop/224x337+0+0/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F7c%2F7b%2F39a2375331e44754d959c09782fb%2Ffault-in-our-stars.jpg",
        title: "The Fault in Our Stars",
        author: "John Green",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700", 
        about: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel’s story is about to be completely rewritten. Insightful, bold, irreverent, and raw, The Fault in Our Stars brilliantly explores the funny, thrilling, and tragic business of being alive and in love."
    },
    {
        key: 16,
        image: "https://pictures.abebooks.com/isbn/9781408824856-us.jpg",
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700", 
        about: "Twelve-year-old Amir is desperate to win the approval of his father and resolves to win the local kite-fighting tournament, to prove that he has the makings of a man. His loyal friend Hassan promises to help him - for he always helps Amir - but this is 1970s Afghanistan and Hassan is merely a low-caste servant who is jeered at in the street, although Amir still feels jealous of his natural courage and the place he holds in his father's heart. But neither of the boys could foresee what would happen to Hassan on the afternoon of the tournament, which was to shatter their lives. After the Russians invade and the family is forced to flee to America, Amir realises that one day he must return, to find the one thing that his new world cannot grant him: redemption."
    },
    {
        key: 17,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/cb32774/2147483647/strip/true/crop/223x335+0+13/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Fe6%2F42%2Fefce0dce206e2722a891353866f5%2Flolita.jpg",
        title: "Lolita",
        author: "Vladimir Nabokov",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700", 
        about: "Awe and exhiliration--along with heartbreak and mordant wit--abound in Lolita, Nabokov's most famous and controversial novel, which tells the story of the aging Humbert Humbert's obsessive, devouring, and doomed passion for the nymphet Dolores Haze. Lolita is also the story of a hypercivilized European colliding with the cheerful barbarism of postwar America. Most of all, it is a meditation on love--love as outrage and hallucination, madness and transformation."
    },
    {
        key: 18,
        image: "https://pictures.abebooks.com/isbn/9780486292731-us-300.jpg",
        title: "Gulliver's Travels",
        author: "Jonathan Swift",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700", 
        about: "Regarded as the preeminent prose satirist in the English language, Jonathan Swift (1667–1745) intended this masterpiece, as he once wrote Alexander Pope, to 'vex the world rather than divert it.' Savagely ironic, it portrays man as foolish at best, and at worst, not much more than an ape. The direct and unadorned narrative describes four remarkable journies of ship's surgeon Lemuel Gulliver, among them, one to the land of Lilliput, where six-inch-high inhabitants bicker over trivialities; and another to Brobdingnag, a land where giants reduce man to insignificance. Written with disarming simplicity and careful attention to detail, this classic is diverse in its appeal: for children, it remains an enchanting fantasy. For adults, it is a witty parody of political life in Swift's time and a scathing send-up of manners and morals in 18th-century England."
    },
    {
        key: 19,
        image: "https://pictures.abebooks.com/isbn/9780064410939-us-300.jpg",
        title: "Charlotte's Web",
        author: "White, E. B",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700", 
        about: "Some Pig. Humble. Radiant. These are the words in Charlotte's Web, high up in Zuckerman's barn. Charlotte's spiderweb tells of her feelings for a little pig named Wilbur, who simply wants a friend. They also express the love of a girl named Fern, who saved Wilbur's life when he was born the runt of his litter. E. B. White's Newbery Honor Book is a tender novel of friendship, love, life, and death that will continue to be enjoyed by generations to come. This edition contains newly color illustrations by Garth Williams, the acclaimed illustrator of E. B. White's Stuart Little and Laura Ingalls Wilder's Little House series, among many other books."
    },
    {
        key: 20,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/3b0a32b/2147483647/strip/true/crop/225x338+0+3/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F19%2F44%2F61decd6f4d1e96c48404e927defc%2Fbreakfast-of-champions.jpg",
        title: "Breakfast of Champions",
        author: "Kurt Vonnegut",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700", 
        about: "Breakfast Of Champions is vintage Vonnegut. One of his favorite characters, aging writer Kilgore Trout, finds to his horror that a Midwest car dealer is taking his fiction as truth. The result is murderously funny satire as Vonnegut looks at war, sex, racism, success, politics, and pollution in America and reminds us how to see the truth."
    },
    {
        key: 21,
        image: "https://pictures.abebooks.com/isbn/9780064410939-us-300.jpg",
        title: "The Color Purple",
        author: "Alice Walker",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700", 
        about: "A special limited edition of nine classic novels produced to coincide with weidenfeld & nicolsons 60th anniversary designed by the award-winning advertising agency fallon with special endpapers commissioned from ground-breaking artists the endpapers for this title have been designed by carl kleiner set in the deep american south between the wars, this is the classic tale of celie, a young poor black girl raped repeatedly by her father, she loses two children and then is married off to a man who treats her no better than a slave she is separated from her sister nettie and dreams of becoming like the glamorous shug avery, a singer and rebellious black woman who has taken charge of her own destiny gradually celie discovers the support of women that enables her to leave the past behind and begin a new life one of the most haunting books you could ever wish to readit is stunning - moving, exciting, and wonderful lenny henry the pulitzer-prize winning novel that made alice walker a household name about the author: alice walker won the pulitzer prize and the american book award for the color purple she is the author of many bestselling novels, essays and collections of poetry including meridian, by the light of my fathers smile and the third life of grange copeland."
    },
    {
        key: 22,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/d576bf5/2147483647/strip/true/crop/225x338+0+5/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F5b%2F8b%2F8406b53f3bb3aefa38273d59ddc1%2Fvegetarian-the.jpg",
        title: "The Vegetarian",
        author: "Han Kang",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700", 
        about: "Winner of the 2016 Man Booker International Prize. NAMED ONE OF THE BEST BOOKS OF THE YEAR BY The New York Times Book Review · Publisher's Weekly ·  Buzzfeed ·  Entertainment Weekly ·  Time ·  Wall Street Journal ·  Bustle ·  Elle ·  The Economist ·  Slate ·  The Huffington Post · The St. Louis Dispatch ·  Electric Literature"
    },
    {
        key: 23,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/1eea01e/2147483647/strip/true/crop/225x338+0+7/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F02%2F70%2Fe06a1ef3c8ffebfe61e5f4bebcd0%2Fpaying-guests.jpg",
        title: "The Paying Guests",
        author: "Sarah Waters",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700", 
        about: "It is 1922, and London is tense. Ex-servicemen are disillusioned; the out-of-work and the hungry are demanding change. And in South London, in a genteel Camberwell villa—a large, silent house now bereft of brothers, husband, and even servants—life is about to be transformed, as impoverished widow Mrs. Wray and her spinster daughter, Frances, are obliged to take in lodgers. With the arrival of Lilian and Leonard Barber, a modern young couple of the “clerk class,” the routines of the house will be shaken up in unexpected ways. Little do the Wrays know just how profoundly their new tenants will alter the course of Frances’s life—or, as passions mount and frustration gathers, how far-reaching, and how devastating, the disturbances will be."
    },
    {
        key: 24,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/b94ffa2/2147483647/strip/true/crop/225x338+0+5/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F74%2Fb2%2F0320768e06159036296714289bdc%2Flord-flies.jpg",
        title: "Lord of the Flies",
        author: "William Golding",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700", 
        about: "At the dawn of the next world war, a plane crashes on an uncharted island, stranding a group of schoolboys. At first, with no adult supervision, their freedom is something to celebrate. This far from civilization they can do anything they want. Anything. But as order collapses, as strange howls echo in the night, as terror begins its reign, the hope of adventure seems as far removed from reality as the hope of being rescued."
    }
]

export default awards;